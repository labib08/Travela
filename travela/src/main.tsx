import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Navbar from './Components/Navbar/Navbar.tsx';
import './index.css';
import CreateTrip from './Pages/CreateTrip/CreateTrip.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>
  },
  {
    path: '/create-trip',
    element:<CreateTrip/>
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <RouterProvider router = {router} />
  </StrictMode>,
)
