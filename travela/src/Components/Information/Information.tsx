import { GetPlaceDetails } from "@/engine/GlobalAPI";
import { FormData } from "@/Types/tripOption.ts";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import planeImage from '../../assets/dummy5 copy 2.png';
import './information.css';
interface Props {
    tripOption: FormData;
    mode: string;
}

interface PlaceSearchRequest {
  textQuery: string;
}

const PHOTO_REF_URL = 'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key=' + import.meta.env.VITE_GOOGLE_PLACE_API_KEY

const Information:React.FC<Props> = ({tripOption, mode}) => {
    //const mode = useSelector((state: RootState) => state.theme.mode);
    const [photoUrl, setPhotoUrl] = useState<string | undefined>();
    useEffect(() => {
      tripOption && GetPlacePhoto();
    }, [tripOption])
    const FALLBACK_IMAGE = planeImage;

    const GetPlacePhoto = async () => {
      if (!tripOption?.location?.label) return;

      const data: PlaceSearchRequest = {
        textQuery: tripOption.location.label,
      };

      try {
        const resp = await GetPlaceDetails(data);
        const photoName = resp.data.places[0].photos[3].name;
        console.log('Photo Name:', photoName);

        const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
        const PhotoUrl = PROXY_URL + PHOTO_REF_URL.replace('{NAME}', photoName);
        console.log('Generated Photo URL:', PhotoUrl);

        const img = new Image();
        img.src = PhotoUrl;
        img.onload = () => {
          console.log('Image loaded successfully');
          setPhotoUrl(PhotoUrl);
        };
        img.onerror = () => {
          console.error('Error loading image, using fallback');
          setPhotoUrl(FALLBACK_IMAGE);
        };
      } catch (error) {
        console.error('Error fetching place details:', error);
        setPhotoUrl(FALLBACK_IMAGE);
      }
    };
  return (

    <div className='information'>
        <img src= {photoUrl} alt = "" className='information-img'/>
        <div className="information-section">
            <div className='information-label'>
                <Typography variant='h2' sx = {{fontWeight: 'bold', fontSize: '1.9rem'}}> {tripOption?.location?.label} </Typography>
                <div className="information-trip-option">
                    <Typography variant="h2" sx={{padding: '7px 12px', fontSize: '1.1rem', fontWeight: 500, backgroundColor: mode === 'dark' ?'#333333': '#E5E7EB', borderRadius: '999px'}}>📅 {tripOption?.numDays} Day(s)</Typography>
                    <Typography variant="h2" sx={{padding: '7px 12px', fontSize: '1.1rem', fontWeight: 500, backgroundColor: mode === 'dark' ?'#333333': '#E5E7EB', borderRadius: '999px'}}>💰 {tripOption?.budget} Budget</Typography>
                    <Typography variant="h2" sx={{padding: '7px 12px', fontSize: '1.1rem', fontWeight: 500, backgroundColor: mode === 'dark' ?'#333333': '#E5E7EB', borderRadius: '999px'}}>🥂 No. of Traveler(s): {tripOption?.numTravelers}</Typography>

                </div>
            </div>
            <Button
            variant="contained"
            className="header-button"
            //onClick={onGenerateTrip}
            sx={{
              color: mode === "dark" ? "#ffffff" : "#ffffff",
              '&:hover': {
                boxShadow: mode === "dark"
                  ? '0 4px 10px rgba(255, 255, 255, 0.5)'
                  : '0 4px 10px rgba(0, 0, 0, 0.7)',
              },
              position: 'relative',
              padding: '8px 16px',
              //minWidth: '160px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IoIosSend />
          </Button>
        </div>
    </div>

  )
}

export default Information