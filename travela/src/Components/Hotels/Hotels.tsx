import Trip from "@/Types/tripType";
import { Grid2, Typography } from "@mui/material";
import planeImage from '../../assets/dummy5 copy 2.png';
import './Hotels.css';
interface Props {
    savedTrip: Trip;
    mode: string;
}
const Hotels:React.FC<Props> = ({savedTrip, mode}) => {
  return (
        <div className="hotels">
            <Typography variant="h2" sx = {{fontWeight: 'bold', fontSize: '1.5rem', marginTop: '20px'}}>Hotel Recommendations</Typography>
            <Grid2 container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {savedTrip?.hotelOptions?.map((item, index) => (

                    <Grid2 size={{ xs: 2, sm: 4, md: 4 }} key={index} sx={{transition: "all 0.3s ease-in-out","&:hover": {transform: "scale(1.05)",}, cursor: 'pointer'}}>
                    <img src={planeImage} className="hotels-img" />
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