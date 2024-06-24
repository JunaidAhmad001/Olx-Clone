import React from 'react';
import LogoImage from '../images/olx.png'
import { SvgIcon } from '@mui/material';

function MyCustomIcon(props) {
  return (
    
     <div {...props}>
      <img style={{width:'80px',height:'50px'}} src={LogoImage} alt='loading..'/>
    </div>
  );
}

export default MyCustomIcon;
