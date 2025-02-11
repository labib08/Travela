import { Typography } from '@mui/material';
import './CreateTrip.css';
const CreateTrip:React.FC = () => {

  return (
    <div className='create-trip'>
      <Typography variant = 'h3'  sx={{ fontWeight: 550 }}>
        Tell us your travel preference
      </Typography>
      <Typography variant='subtitle1' component='p' sx={{ color: '#6b7280', fontSize: '20px', mt: '12px' }}>
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </Typography>
      <div>
        <div>
          <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '28px', mt: '12px', mb: '12px', fontWeight: '500' }}>
            What is your destination of choice?
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default CreateTrip