import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49150.11796118964!2d-78.79672623849056!3d39.65236171612032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ca8ec4b1940129%3A0x9bdc8c96587014e2!2sCumberland%2C+MD+21502!5e0!3m2!1sen!2sus!4v1557937627506!5m2!1sen!2sus" width="100%" height="500px" frameBorder="0" allowFullScreen></iframe>
            
            <div className='location_tag'>
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;