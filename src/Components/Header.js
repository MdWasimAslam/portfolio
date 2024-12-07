import React, { useState } from 'react';
import logo from "../Assets/logo.png";
import "./Header.css";
import { AutoAwesome } from '@mui/icons-material';

const logoStyles = {
    width: '30px',
    height: '30px',
};

// const cardStyles = {
//     position: 'absolute',
//     top: '300px',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     width: '300px',
//     textAlign: 'center',
//     fontFamily: 'Arial, sans-serif',
//     color:"#333"
// };


function Header() {
    const [showCard, setShowCard] = useState(false);

    const developerJokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "Why did the developer go broke? Because he used up all his cache!",
        "How many programmers does it take to change a light bulb? None, that’s a hardware problem!",
        "What do you call a programmer from Finland? Nerdic.",
        "Why do Java developers wear glasses? Because they don’t see sharp.",
        "Why can't programmers tell the difference between Halloween and Christmas? Because Oct 31 == Dec 25.",
        "What’s a programmer’s favourite hangout place? The Foo Bar.",
        "Why do programmers hate nature? It has too many bugs.",
        "What’s the object-oriented way to become wealthy? Inheritance.",
        "I told my computer I needed a break, and it froze.",
        "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
        "Why don’t programmers like to play hide and seek? Because good luck hiding when all your bugs are in the open.",
        "What did the router say to the server? 'You need to stop spreading rumors.'",
        "Why did the web developer walk out of the restaurant? Because they didn’t have good HTML (Hot, Tasty, Meat).",
        "What do you call a programmer who is afraid of the dark? A light programmer!",
        "How does a programmer fix a lightbulb? By doing a quick refactor of the socket.",
        "I’m not a magician, but I can make your bugs disappear!",
        "Why did the coder break up with his girlfriend? She didn’t get his array of emotions.",
        "How does a developer fix a broken website? With some JavaScript magic.",
        "Why do programmers prefer using Git? Because it’s always committed!",
    ];

    const randomJoke = developerJokes[Math.floor(Math.random() * developerJokes.length)];

    return (
        <div className='header'>
            <div>
                <img src={logo} alt="logo" style={logoStyles} />
            </div>
            <div>
                <AutoAwesome onClick={() => setShowCard(true)} style={{ cursor: 'pointer' }} />
            </div>

            {showCard && (
                <div  className="joke-card">
                    <h3>Developer Joke:</h3>
                    <p>{randomJoke}</p>
                    <button
                        className='joke-card-btn'
                        onClick={() => setShowCard(false)}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
}

export default Header;
