import { Button, ButtonProps, styled } from '@mui/material';
import { makeStyles } from "@mui/styles";

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
const useStyles = makeStyles(() =>({
  navbarName: {
      fontWeight: 700,
  },
  headerH2: {
    marginTop: '50px !important',
    textAlign: 'center',

    fontWeight: "650 !important",
    fontSize: '52px !important',
  },
  headerSub: {
    textAlign: 'center',
  }
}));

export { ColorButton, useStyles };
