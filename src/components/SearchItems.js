import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
export default function SearchItems() {
  const [dropdown, setDropDown] = useState(false);

  return (
    <>
      
      <Paper
        component="form"
        sx={{ display: 'flex', alignItems: 'center', width: 700, height: 50, borderColor: '#002f34', borderWidth: 1, borderStyle: 'solid' }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Find Mobile Phone, Cars and more..."
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        {/* <SearchOutlinedIcon sx={{ backgroundColor: "#002f34", color: 'white',display:'flex', justifyContent:'center', alignContent:"center" }} /> */}
        <div style={{ backgroundColor:'#002f34',
                          color: "white", height:'100%',width:'8%'}}
                        // sx={{
                        //   backgroundColor:'black',
                        //   color: "white",
                        // }}
                      >
                      <IconButton size='large'   sx={{
                          // backgroundColor:'black',
                          color: "white",
                        }}>

                        <SearchOutlinedIcon fontSize="inherit"/>
                      </IconButton>
                      </div>
      </Paper>
      {dropdown && (
        <Paper sx={{ width: 400, mt: 1, p: 2 }}>
          {/* Your dropdown content goes here */}
          <p>Dropdown content</p>
        </Paper>
      )}
    </>
  );
}
