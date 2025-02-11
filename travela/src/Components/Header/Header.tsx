import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header: React.FC = () => {

  return (
    <div className='header'>

        <Typography variant='h2'
          sx={{
            mt: '50px',
            textAlign: 'center',
            fontWeight: '650',
            fontSize: '52px'
          }}>
          <span className='header-ai'>  Discover Your Next Adventure with Ai: </span>
             Personalized Itineraries at Your Fingertips
        </Typography>

        <Typography variant='h5' sx={{textAlign: 'center'}}>Your personal trip planner and travel curator, creating custom itineraries tailored to your interest and budget</Typography>
        <Link to = '/create-trip'>
        <Button variant="contained" className='header-button'>Get Started, It's Free</Button>
        </Link>
    </div>
  )
}

export default Header