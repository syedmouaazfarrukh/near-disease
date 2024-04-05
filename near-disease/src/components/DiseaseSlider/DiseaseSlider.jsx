import React, { useState } from "react";
import './DiseaseSlider.css'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'

import bgo from '../assets/bg1.jpg'
import bgo2 from '../assets/bg2.jpg'

const images = [
    bgo2,
    bgo2
];

const DiseaseSlider = () => {
   
    const [action, setAction] = useState("Sign Up");
    const [message, setMessage] = useState(""); // State to hold user input message

    const handleInputChange = (event) => {
        setMessage(event.target.value); // Update message state when input changes
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle submission here (e.g., send message to server, process it, etc.)
        // For now, let's just log the message
        console.log("User message:", message);
        // Clear the input field after submission
        setMessage("");
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        className: 'slider-container'
    };

    return (
        <div className="container2">

            <div className="inputds">
                
                <img src={email_icon} alt="" />

                <form onSubmit={handleSubmit}>
                <input type="text" value={message} placeholder="Generate Dashboards now"/>
                </form>
                <button type="submit" className="button">Send</button>
                

                
            </div>




            {/* <Slider {...sliderSettings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index}`} className="slider-image" />
                    </div>
                ))}
            </Slider> */}

            {/* Prompt like ChatGPT */}
            <div className="inputds">
              <img src={user_icon} alt="" />
              <input type="email" placeholder="Email Id"/>
                {/* <form onSubmit={handleSubmit}>
                    <input
                    
                        type="text"
                        value={message}
                        onChange={handleInputChange}
                        placeholder="Ask me anything..."
                        className="inputds"
                    />
                    <button type="submit" className="submit-button">Send</button>
                </form> */}
            </div>
        </div>
    );
}

export default DiseaseSlider;
