import React from "react";

import raidguild_crosses from "../assets/raidguild__crosses.png";

const SuccessComponent = () => {
    return (
        <section className='booking-confirmed-section '>
            <img
                src={raidguild_crosses}
                width='250px'
                height='auto'
                alt='success'
                className='animate__animated animate__flip'
            />
            <h3
                style={{ color: "#ff3864", margin: "20px" }}
                className='animate__animated animate__fadeInUp animate__delay-1s'
            >
                Booking Confirmed!
            </h3>
            <p
                style={{ maxWidth: "80%" }}
                className='animate__animated animate__fadeInUp animate__delay-3s'
            >
                Your submission is successful! Our team will contact you in a
                few days. Until then, check our newsletter!
            </p>
            <a
                href='https://scroll.raidguild.org/'
                target='_blank'
                rel='noopener noreferrer'
                className='animate__animated animate__fadeInUp animate__delay-5s'
            >
                Read Scroll
            </a>
        </section>
    );
};

export default SuccessComponent;
