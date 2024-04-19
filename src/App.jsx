// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

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