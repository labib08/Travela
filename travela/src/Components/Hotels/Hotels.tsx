import { GetPlaceDetails } from "@/engine/GlobalAPI";
import Trip from "@/Types/tripType";
import { Grid2, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import planeImage from '../../assets/dummy5 copy 2.png';
import './Hotels.css';
interface Props {
    savedTrip: Trip;
    mode: string;
}
interface PlaceSearchRequest {
    textQuery: string;
}

const PHOTO_REF_URL = 'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key=' + import.meta.env.VITE_GOOGLE_PLACE_API_KEY

const Hotels:React.FC<Props> = ({savedTrip, mode}) => {
    const [hotelPhotos, setHotelPhotos] = useState<{ [key: string]: string }>({});
    const FALLBACK_IMAGE = planeImage;

    useEffect(() => {
    if (savedTrip?.hotelOptions) {
        savedTrip.hotelOptions.forEach((hotel) => {
        GetPlacePhoto(hotel.hotelName);
        });
    }
    }, [savedTrip]);

    const GetPlacePhoto = async (hotelName: string) => {
    if (!savedTrip?.location) return;

    const data: PlaceSearchRequest = {
        textQuery: hotelName,
    };

    try {
        const resp = await GetPlaceDetails(data);
        const photoName = resp.data.places[0].photos?.[3]?.name;

        if (!photoName) {
        setHotelPhotos((prev) => ({ ...prev, [hotelName]: FALLBACK_IMAGE }));
        return;
        }

        const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
        const PhotoUrl = PROXY_URL + PHOTO_REF_URL.replace('{NAME}', photoName);

        const img = new Image();
        img.src = PhotoUrl;
        img.onload = () => {
        setHotelPhotos((prev) => ({ ...prev, [hotelName]: PhotoUrl }));
        };
        img.onerror = () => {
        setHotelPhotos((prev) => ({ ...prev, [hotelName]: FALLBACK_IMAGE }));
        };
    } catch (error) {
        console.error(`Error fetching photo for ${hotelName}:`, error);
        setHotelPhotos((prev) => ({ ...prev, [hotelName]: FALLBACK_IMAGE }));
    }
    };

  return (
        <div className="hotels">
            <Typography variant="h2" sx = {{fontWeight: 'bold', fontSize: '1.5rem', marginTop: '20px'}}>Hotel Recommendations</Typography>
            <Grid2 container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {savedTrip?.hotelOptions?.map((item, index) => (

                    <Grid2 size={{ xs: 2, sm: 4, md: 4 }} key={index} sx={{transition: "all 0.3s ease-in-out","&:hover": {transform: "scale(1.05)",}, cursor: 'pointer'}}>
                    <img
            src={hotelPhotos[item.hotelName] || FALLBACK_IMAGE}
            className="hotels-img"
            alt={item.hotelName}
          />
                    <div className="hotels-desc">
                        <Typography variant="h2" sx={{fontWeight: 'bold', fontSize: '1.2rem'}}> {item.hotelName} </Typography>
                        <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 'medium',
                            fontSize: '0.9rem',
                            color: mode === "dark" ? "#cccccc" : "#4b555f",
                        }}
                        >📍
                        {item.hotelAddress}
                        </Typography>
                        <Typography variant="h2" sx={{fontWeight: 'medium', fontSize: '1.0rem', }}> {item.price.split("(")[0].trim()} </Typography>
                        <Typography variant="h2" sx={{fontWeight: 'medium', fontSize: '1.0rem', }}>⭐ {item.rating} </Typography>
                    </div>
                    </Grid2>
                ))}
            </Grid2>
        </div>

  )
}

export default Hotels