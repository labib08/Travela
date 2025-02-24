import Trip from '../../Types/tripType.ts';
const ViewTrip = () => {
    const savedTrip: Trip = JSON.parse(localStorage.getItem("generatedTrip") || "{}");

  return (
    <div>  </div>
  )
}

export default ViewTrip