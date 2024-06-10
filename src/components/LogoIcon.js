import React from 'react';
import LogoImage from '../images/olx.png'
import { SvgIcon } from '@mui/material';

function MyCustomIcon(props) {
  return (
    
     <div {...props}>
      <img style={{width:'100px'}} src={LogoImage} alt='loading..'/>
    </div>
  );
}

export default MyCustomIcon;
