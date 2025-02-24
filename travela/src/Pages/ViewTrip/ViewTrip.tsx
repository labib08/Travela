import Information from '@/Components/Information/Information.tsx';
import Trip from '../../Types/tripType.ts';
const ViewTrip = () => {
    const savedTrip: Trip = JSON.parse(localStorage.getItem("generatedTrip") || "{}");

  return (
    <div>
        <Information trip = {savedTrip}/>
    </div>
  )
}

export default ViewTrip