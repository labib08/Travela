import Trip from '@/Types/tripType';
import { Grid2, Typography } from '@mui/material';
import planeImage from '../../assets/dummy5 copy 2.png';
import './DailyPlan.css';

interface Props {
    savedTrip: Trip;
    mode: string;
}
const DailyPlan:React.FC<Props> = ({savedTrip, mode}) => {
  return (
    <div className='daily-plan'>
        <Typography variant='h2' sx={{fontWeight: 'bold', fontSize: '1.5rem', marginTop: '20px'}}>Places To Visit</Typography>
        <div>
        {savedTrip?.itinerary &&
          Object.entries(savedTrip.itinerary).map(([dayKey, item], index) => {
            const formattedDay = dayKey.replace(/day(\d+)/i, (_, num) => `Day ${num.charAt(0).toUpperCase() + num.slice(1)}`);
            return (
              <div key={index}>
                <Typography variant='h2' sx={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: '20px' }}>
                  {formattedDay}: {item.theme}
                </Typography>
                <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  {item.places.map((place, i) => (
                    <Grid2 size={6}>
                    <div key={i} className='daily-plan-places'>
                      <Typography variant='body1' sx={{fontWeight: 'bold'}} > {place.bestTimeToVisit} </Typography>
                      <div className={`daily-plan-places-desc ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                        <img src={planeImage} alt='' className='daily-plan-places-img'/>
                        <div>
                            <Typography variant='body1' sx = {{fontWeight: 'bold'}}>{place.placeName}</Typography>
                            <Typography
                                variant="body1"
                                sx={{ color: mode === "dark" ? "#cccccc" : "#4b555f",}}
                                >
                                {place.placeDetails}
                                </Typography>
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