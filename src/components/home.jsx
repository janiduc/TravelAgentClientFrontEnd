import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import SigiriyaPic from '../assets/Sigiriya.jpg';
import EllaPic from '../assets/Ella.jpg';
import GallePic from '../assets/Galle.jpeg';
import KandyPic from '../assets/Kandy.jpg';
import VideoClip from '../assets/video.mp4'; // Path to your video file
import '../styles/AboutUs.css'; // Assuming you have a CSS file for styling

const placesToVisit = [
    {
        name: 'Sigiriya',
        description: 'Sigiriya or Lion Rock is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. The name refers to a site of historical and archaeological significance that is dominated by a massive column of rock nearly 200 metres (660 ft) high.',
        image: SigiriyaPic
    },
    {
        name: 'Ella',
        description: 'Ella is a small town in the Badulla District of Uva Province, Sri Lanka governed by an Urban Council. It is approximately 200 kilometres (120 mi) east of Colombo and is situated at an elevation of 1,041 metres (3,415 ft) above sea level.',
        image: EllaPic
    },
    {
        name: 'Galle',
        description: 'Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century.',
        image: GallePic
    },
    {
        name: 'Kandy',
        description: 'A city located in the central part of Sri Lanka, known for its picturesque lake and the Temple of the Tooth Relic, which houses a sacred tooth relic of the Buddha.',
        image: KandyPic
    },
];

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    return (
        <div className="digital-clock">
            {formattedTime}
        </div>
    );
};

const Home = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home">
            <div className="digital-clock-container">
                <h2>Digital Clock</h2>
                <DigitalClock />
            </div>
            <div className="description-container">
                <h2>About TravelSri Travel Agent</h2>
                <p><strong>Mission:</strong> To simplify your journey to unforgettable experiences. Explore, compare, and book your dream vacation with ease.</p>
                <p><strong>Vision:</strong> Our vision for the travel agent web application is to empower both travel agents and travelers with a comprehensive, user-friendly platform that redefines the booking experience. Our application will serve as a one-stop solution for travel agents, offering intuitive tools to efficiently manage bookings, access real-time information from suppliers, and provide personalized recommendations to clients. For travelers, our platform will offer a seamless and engaging experience, allowing them to discover, plan, and book their dream vacations with ease. By leveraging technology to simplify complex processes and enhance communication between agents and travelers, we aim to revolutionize the way people explore the world, fostering unforgettable travel experiences and lasting memories.</p>
            </div>
            <div className="places-container">
                {placesToVisit.map(place => (
                    <div key={place.name} className="place-card">
                        <img src={place.image} alt={place.name} className="place-image" />
                        <div className="place-info">
                            <h2>{place.name}</h2>
                            <p>{place.description}</p>
                        </div>
                    </div>
                ))}
                <video autoPlay loop muted className="video-clip" style={{ transform: 'scale(1.0)', marginBottom: '20%' }}>
    <source src={VideoClip} type="video/mp4" />
</video>

            </div>
        </div>
    );
};


export default Home;
