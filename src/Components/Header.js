import React from 'react'
import logo from "../Assets/logo.png";
import "./Header.css";
import NightsStayIcon from '@mui/icons-material/NightsStay';


const logoStyles = {
    width: '30px',
    Height: '30px',
}

const Header = () => {
  return (
    <div className='header' >
        <div>
            <img src={logo} alt="logo" style={logoStyles} />
        </div>
        <div>
            <NightsStayIcon />
        </div>
    </div>
  )
}

export default Header