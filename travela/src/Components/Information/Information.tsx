import Trip from '../../Types/tripType.ts';
import './information.css';

interface Props {
    trip: Trip;
}

const Information:React.FC<Props> = ({trip}) => {
  return (
    <div>Information</div>
  )
}

export default Information