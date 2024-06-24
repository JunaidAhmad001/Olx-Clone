import React, { useState } from "react";
import { Button, Typography, Box, Modal } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import './SignInPage.css';
import axios from 'axios';
import MyCustomIcon from "./LogoIcon";

function SignInGoogle() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const responseGoogle = (credentialResponse) => {
    try {
      axios.post('http://44.210.6.59/login', {
        token: credentialResponse,
      })
      .then(response => {
        console.log(`The complete response:`, response);
        console.log(response.data.data);
        // Handle navigation or state updates here
        handleClose();
        navigate('HomePage');
      })
      .catch(error => {
        console.error('Error:', error);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    
    <div>
      <Button onClick={handleOpen} variant="inlined">
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 350,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
        <Box sx={{display:"flex", justifyContent:'center'}}>

            <MyCustomIcon />
        </Box>
          <Typography id="modal-title" sx={{color:'#002f34',fontSize:'16px',fontWeight:'700'}}>
           Login into your OLX account
          </Typography>
          <Box mt={2} sx={{display:"flex", justifyContent:'center',border:'2px solid #000'}}>
            <GoogleLogin   className='google-signin-button'
              onSuccess={(credentialResponse) => {
                responseGoogle(credentialResponse.credential);
                console.log(credentialResponse.credential)
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}


export default SignInGoogle;
