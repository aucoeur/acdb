import React from 'react';
import './About.scss';

function About() {
    return (
        <div className="About">
            <h1>Hoohoo! What's ACDB you ask?</h1>
            <img src={`${process.env.PUBLIC_URL}/images/blathers.jpg`} width="50%" height="50%" alt="blathers" />
            <p>ACDB in its current evolution is but a mere list of fossils available in New Horizons.  But soon, it will be so much more.</p>
        </div>
    )
}

export default About;