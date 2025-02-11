import { Typography } from '@mui/material';
import { useStyles } from '../../Styles/Styles';
import './CreateTrip.css';
const CreateTrip:React.FC = () => {
  const classes = useStyles();
  return (
    <div className='create-trip'>
      <Typography variant = 'h3'  style={{ fontWeight: 550 }}>
        Tell us your travel preference
      </Typography>
      <Typography variant='subtitle1' component='p' className={classes.createTripPara}>
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </Typography>
    </div>
  )
}

export default CreateTrip