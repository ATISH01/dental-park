import React from 'react';
import me from '../../img/me.jpg'

const AboutMe = () => {
    return (
        <div>
            <img className='d-block mx-auto mb-4 rounded' src={me} alt="" />
            <p className='border border-2 rounded-2 p-2 w-75 mx-auto'>My Name is Atish Barua.Now I am trying to change my self with hardwork.My goal is to become a full stack web-developer.To fullfill my goal I started learning web development in programming hero.I trying my best to utilize my time.</p>
        </div>
    );
};

export default AboutMe;