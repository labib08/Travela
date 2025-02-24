import Hotels from '@/Components/Hotels/Hotels.tsx';
import Information from '@/Components/Information/Information.tsx';
import { FormData } from "@/Types/tripOption";
import './ViewTrip.css';
const ViewTrip = () => {
    //const savedTrip: Trip = JSON.parse(localStorage.getItem("generatedTrip") || "{}");
    const storedFormData: FormData = JSON.parse(localStorage.getItem('selectedOption') || '{}');
  return (
    <div className='view-trip'>
        <Information tripOption = {storedFormData} />
        <Hotels/>
    </div>
  )
}

export default ViewTrip