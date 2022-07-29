import React from 'react';
import banner from "../images/banner.png";
import "./Banner.css"

const Banner = () => {
    return (
        <>
            <section id='banner' style={{
                background: `url(${banner})`,
                paddingTop: "286px",
                paddingBottom: "80px",
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}>
                <div className="container">
                    <div className='banner_text'>
                        <h3 className='header_title'>Computer Engineering</h3>
                        <p>142,765 Computer Engineers follow this</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;