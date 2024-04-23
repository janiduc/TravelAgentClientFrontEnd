import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';
import Home from './components/home';
import LogIn from './components/login';
import LogOut from './components/logout';
import CreateUser from './components/signup';
import CreateBooking from './components/createBooking';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import AboutUs from './components/aboutUs';
//import Footerr from './components/footer';

function App() {
    return (
            <Router>
                <Navbar/>
                <Routes>                    
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<LogIn/>}/>
                    <Route path="/logout" element={<ProtectedRoute>
                                                        <LogOut/>
                                                        </ProtectedRoute>}/>
                    <Route path="/createuser" element={<CreateUser/>}/>
                    <Route path="/createbooking" element={<ProtectedRoute>
                                                        <CreateBooking/>
                                                        </ProtectedRoute>}/>
                    <Route path="/about" element={<AboutUs/>}/>
                    <Route path="/contact" element={<ProtectedRoute>
                                                        <Contact/>
                                                        </ProtectedRoute>}/>
                    
                </Routes>
            </Router>
    );
}

export default App;