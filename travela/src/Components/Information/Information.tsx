import Trip from '../../Types/tripType.ts';
import planeImage from '../../assets/dummy.jpeg';
import './information.css';
interface Props {
    trip: Trip;
}

const Information:React.FC<Props> = ({trip}) => {
  return (
    <div>
        <img src= {planeImage} alt = "" />
    </div>
  )
}

export default Information