import { Button, ButtonProps, styled } from '@mui/material';

const ColorButton = styled(Button)<ButtonProps>(({}) => ({
  color: 'white',
  backgroundColor: 'rgb(217, 48, 147)',
  '&:hover': {
    backgroundColor: 'rgb(173, 18, 109)',
  },
  borderRadius: '50px',
  height: '48px',
  width: '136px',
}));

export { ColorButton };

