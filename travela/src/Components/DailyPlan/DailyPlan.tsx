import { GetPlaceDetails } from "@/engine/GlobalAPI";
import Trip from '@/Types/tripType';
import { Grid2, Typography } from '@mui/material';
import planeImage from '../../assets/dummy5 copy 2.png';

//import timeImg from "../../assets/iconmonstr-clock-thin.svg";
import { useEffect, useState } from 'react';
import './DailyPlan.css';

interface Props {
    savedTrip: Trip;
    mode: string;
}
interface PlaceSearchRequest {
    textQuery: string;
}

const PHOTO_REF_URL = 'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key=' + import.meta.env.VITE_GOOGLE_PLACE_API_KEY

const DailyPlan:React.FC<Props> = ({savedTrip, mode}) => {
    const [placePhotos, setPlacePhotos] = useState<Record<string, string>>({});
    const FALLBACK_IMAGE = planeImage;

  useEffect(() => {
    if (savedTrip?.itinerary) {
      Object.values(savedTrip.itinerary).forEach((item) => {
        item.places.forEach((place) => {
          fetchPlacePhoto(place.placeName);
        });
      });
    }
  }, [savedTrip]);

  const fetchPlacePhoto = async (placeName: string) => {
    if (!placeName) return;

    const data: PlaceSearchRequest = {
      textQuery: placeName,
    };

    try {
      const resp = await GetPlaceDetails(data);
      const photoName = resp.data.places?.[0]?.photos?.[0]?.name; // First photo

      if (!photoName) {
        setPlacePhotos((prev) => ({ ...prev, [placeName]: FALLBACK_IMAGE }));
        return;
      }

      const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
      const PhotoUrl = PROXY_URL + PHOTO_REF_URL.replace('{NAME}', photoName);

      const img = new Image();
      img.src = PhotoUrl;
      img.onload = () => setPlacePhotos((prev) => ({ ...prev, [placeName]: PhotoUrl }));
      img.onerror = () => setPlacePhotos((prev) => ({ ...prev, [placeName]: FALLBACK_IMAGE }));
    } catch (error) {
      console.error('Error fetching place details:', error);
      setPlacePhotos((prev) => ({ ...prev, [placeName]: FALLBACK_IMAGE }));
    }
  };
  return (
    <div className='daily-plan'>
        <Typography variant='h2' sx={{fontWeight: 'bold', fontSize: '1.5rem', marginTop: '20px'}}>Places To Visit</Typography>
        <div>
        {savedTrip?.itinerary &&
          Object.entries(savedTrip.itinerary).map(([dayKey, item], index) => {
            const formattedDay = dayKey.replace(/day(\d+)/i, (_, num) => `Day ${num.charAt(0).toUpperCase() + num.slice(1)}`);
            return (
              <div key={index}>
                <Typography variant='h2' sx={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: '30px' }}>
                  {formattedDay}: {item.theme}
                </Typography>
                <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                  {item.places.map((place, i) => (
                    <Grid2 size={6} >
                    <div key={i} className='daily-plan-places'>
                      <Typography variant='body1' sx={{fontWeight: 'bold'}} > {place.bestTimeToVisit.split(")")[0] + ")"} </Typography>
                      <div className={`daily-plan-places-desc ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                        <img src={planeImage} alt='' className='daily-plan-places-img'/>
                        <div>
                            <Typography variant='h2' sx = {{fontWeight: 'bold', fontSize: '1.3rem', marginTop: '20px'}}>{place.placeName}</Typography>
                            <Typography
                                variant="body1"
                                sx={{fontSize: '0.8rem', color: mode === "dark" ? "#cccccc" : "#4b555f", marginTop: '5px'}}
                                >
                                {place.placeDetails}
                            </Typography>
                            <Typography variant='h2' sx = {{fontWeight: '500', fontSize: '0.8rem', marginTop: '5px'}}> {place.timeToTravel} </Typography>
                        </div>
                      </div>

                    </div>
                    </Grid2>
                  ))}
                </Grid2>
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default DailyPlan