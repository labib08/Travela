import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './Components/Header/Header';

const App: React.FC = () => {

  return (
    <>
      <div>
        <ToastContainer/>
        <Header />
      </div>
    </>
  );
}

export default App
