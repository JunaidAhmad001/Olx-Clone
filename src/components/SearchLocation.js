import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect } from 'react';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import axios from 'axios';
const GOOGLE_MAPS_API_KEY = 'AIzaSyD8XbE7uug4sDtSyV5OTywff4ycT1AkxlY';
export default function CustomizedInputBase() {
  const [dropdown, setDropDown] = useState(false);
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState('');

  const handleDropDownToggle = () => {
    setDropDown((prev) => !prev);
    if (!location) {
      getLocation();
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          getLocationName(latitude, longitude);
        },
        (error) => {
          console.error("Error fetching location: ", error);
          setLocation("Unable to fetch location");
        }
      );
    } else {
      setLocation("Geolocation not supported by this browser");
    }
  };

  const getLocationName = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
      );
      if (response.data.results.length > 0) {
        setLocationName(response.data.results[0].formatted_address);
      } else {
        setLocationName("No address found");
      }
    } catch (error) {
      console.error("Error fetching location name: ", error);
      setLocationName("Unable to fetch location name");
    }
  };

  return (
    <>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 280 }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <RoomOutlinedIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Location or Compound"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton
          type="button"
          sx={{ p: '10px' }}
          aria-label="toggle dropdown"
          onClick={handleDropDownToggle}
        >
          {dropdown ? <ArrowDropUpOutlinedIcon /> : <ArrowDropDownOutlinedIcon />}
        </IconButton>
      </Paper>
      {dropdown && (
        <Paper sx={{ width: 400, mt: 1, p: 2 }}>
          {location ? (
            typeof location === 'string' ? (
              <p>{location}</p>
            ) : (
              <>
                <p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>
                {locationName && <p>Location: {locationName}</p>}
              </>
            )
          ) : (
            <p>Loading location...</p>
          )}
        </Paper>
      )}
    </>
  );
}
