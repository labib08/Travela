import DailyPlan from '@/Components/DailyPlan/DailyPlan';
import Hotels from '@/Components/Hotels/Hotels.tsx';
import Information from '@/Components/Information/Information.tsx';
import { FormData } from '@/Types/tripOption';
import Trip from "@/Types/tripType";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import './ViewTrip.css';

const ViewTrip = () => {
    const mode = useSelector((state: RootState) => state.theme.mode);
    const savedTrip: Trip = JSON.parse(localStorage.getItem("generatedTrip") || "{}");
    const storedFormData: FormData = JSON.parse(localStorage.getItem('selectedOption') || '{}');
  return (
      <div className='view-trip'>
          <Information tripOption = {storedFormData} mode = {mode}/>
          <Hotels savedTrip = {savedTrip} mode = {mode} />
          <DailyPlan savedTrip = {savedTrip} mode = {mode} />
      </div>
  )
}

export default ViewTrip