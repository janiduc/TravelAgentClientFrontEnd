import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { useNavigate } from "react-router-dom";
import Logo from '../assets/TravelSriLogo.png'; // Update the path to your logo

export default function Navbar() {
  let navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem('loginStatus') === 'true';
  const logedUser = sessionStorage.getItem('username');
  const items = [
    { label: 'Home', icon: 'pi pi-home', url: '/' },
    { label: 'Create Booking', icon: 'pi pi-user', url: '/createbooking' },
    //{ label: 'Booking', icon: 'pi pi-user', url: '/bookingSpecific/:id' },
    { label: 'About Us', icon: 'pi pi-plus', url: '/about' },
    { label: 'Contact Us', icon: 'pi pi-user', url: '/contact' },
    // Add other menu items here
  ];

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  const start = (
    <img alt="logo" src={Logo} height="40" className="p-mr-2" />
  );

  const end = (
    <div className="flex align-items-center">
      {!isLoggedIn ? (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <>
            <Link to="/login" className="p-menuitem-link">
                <i className="pi pi-sign-in"></i>
                <span>Log In</span>
            </Link>
            <Link to="/createuser" className="p-menuitem-link">
                <i className="pi pi-angle-up"></i>
                <span>Sign up</span>
            </Link>
        </>
    </div>
    
      ) : (
        <>
          
          <div onClick={handleLogout} className="p-menuitem-link" style={{ cursor: 'pointer' }}>
            <i className="pi pi-sign-out"></i>
            <span>Log Out</span>
          </div>
          <Link to="/profile" className="p-menuitem-link">
            <i className="pi pi-user"></i>
            
            <span>{logedUser}</span>
          </Link>
        </>
      )}
    </div>
  );

  return (
    <div className="navbar">
      <Menubar model={items} start={start} end={end} style={{width: "100%", margin: '0'}}/>
    </div>
  );
}
