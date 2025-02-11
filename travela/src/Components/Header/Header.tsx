import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from '../../Styles/Styles';
import './Header.css';
const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <div className='header'>

        <Typography variant='h2' className={classes.headerH2}>
          <span className='header-ai'>  Discover Your Next Adventure with Ai: </span>
             Personalized Itineraries at Your Fingertips
        </Typography>

        <Typography variant='h5' className={classes.headerSub}>Your personal trip planner and travel curator, creating custom itineraries tailored to your interest and budget</Typography>
        <Link to = '/create-trip'>
        <Button variant="contained" className='header-button'>Get Started, It's Free</Button>
        </Link>
    </div>
  )
}

export default Header