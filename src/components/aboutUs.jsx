import React from 'react';
import MirissaPic from '../assets/Mirissa.jpeg';
import AdamsPic from '../assets/AdamsPeak.jpg';
import HortonPic from '../assets/Hotonplains.jpg';
import PolonnaruwaPic from '../assets/Polonnaruwa.jpg';
//import VideoClip from '../assets/video.mp4'; // Path to your video file
import '../styles/AboutUs.css'; // Assuming you have a CSS file for styling

const placesToVisit = [
    {
        name: 'Mirissa',
        description: 'A coastal town known for its beautiful beaches, whale watching tours, and laid-back atmosphere.',
        image: MirissaPic
    },
    {
        name: 'Adams Peak',
        description: 'A sacred mountain located in central Sri Lanka, known for the "Sri Pada" or "Sacred Footprint," a rock formation at its summit believed to be the footprint of the Buddha, Lord Shiva, or Adam.',
        image: AdamsPic
    },
    {
        name: 'Horton Plains National Park',
        description: 'A scenic national park known for its rolling hills, cloud forests, and the stunning viewpoint known as World s End, offering panoramic views of the surrounding area.',
        image: HortonPic
    },
    {
        name: 'Polonnaruwa',
        description: 'Another ancient capital of Sri Lanka, known for its well-preserved ruins, including the Royal Palace and the Gal Vihara, a group of impressive Buddha statues.',
        image: PolonnaruwaPic
    },
];

const AboutUs = () => {
    return (
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
            
        </div>
    );
};

export default AboutUs;
