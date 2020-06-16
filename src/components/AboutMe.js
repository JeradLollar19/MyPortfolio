import React from 'react';
import ProfilePic from '../assets/Resized_Lollar_49.jpeg';
import Resume from '../assets/MyResume.pdf';


const AboutMe = () => {

    return (
        <div id="Intro" className="intro">
            <h2 id="introHead">INTRODUCTION</h2>
            <hr/>
            <div className="introPar1">
                <p>Welcome to my portfolio! My name is Jerad Lollar. I'm a creative and motivated Junior Web Developer eager to further learn and develop my coding skills in hopes for a successful transition into the tech industry.</p>
            </div>
            <div className="introPar2">
                <p id="par2">
                    Previously, I had been introduced to coding and design in High School. I then went on to being a graphic design intern for a small business where I collaborated with a team in building designs and logos for both big brands and independent customers. I am currently a graduate from Eleven Fifty Academy where I took a 12 week Immersive Web Development Bootcamp.
                    <br />
                    <br />
                    <br />
                    <br />
                    Examine my<a href={Resume} target="blank"> resume</a>
                </p>
            </div>
            <div className="pic">
                <img id="profilePic" src={ProfilePic} alt="profilePic"></img>
            </div>
        </div>
    )
}


export default AboutMe;