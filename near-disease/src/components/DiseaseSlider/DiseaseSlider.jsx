import React, {useState} from "react";
import './DiseaseSlider.css'

import Slider from 'react-slick'; // Import React Slick
import 'slick-carousel/slick/slick.css'; // Import slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme CSS



import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import bgo from '../assets/bg1.jpg'
import bgo2 from '../assets/bg2.jpg'

// Sample image URLs
const images = [
    bgo2,
    bgo2
       // Add more image URLs as needed
  ];



const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up")
    // Slider settings
    const sliderSettings = {
        dots: true, // Show dots for navigation
        infinite: true, // Infinite looping
        speed: 500, // Animation speed
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true, // Autoplay
        className: 'slider-container' // Custom class name for the slider container
    };


    return (
        <div className="container2">
            
            <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>

    </div>
  );
}

export default LoginSignup;