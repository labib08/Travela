import { FormData } from "@/Types/tripOption.ts";
import { Button, Typography } from "@mui/material";
import { IoIosSend } from "react-icons/io";
import planeImage from '../../assets/dummy5 copy 2.png';
import './information.css';
interface Props {
    tripOption: FormData;
    mode: string;
}

const Information:React.FC<Props> = ({tripOption, mode}) => {
    //const mode = useSelector((state: RootState) => state.theme.mode);
  return (

    <div className='information'>
        <img src= {planeImage} alt = "" className='information-img'/>
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