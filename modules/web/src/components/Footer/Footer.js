import React from 'react'

const Footer = () => {
    return(
        <div className="footer_bg">
            <div className="wrap">
                <div className="footer">
                    <div className="copy">
                        <p className="link"><span>© All rights reserved | Template by&nbsp;<a href="http://w3layouts.com/"> W3Layouts</a></span></p>
                    </div>
                    <div className="f_nav">
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li><a href="rooms.html">rooms &amp; suits</a></li>
                            <li><a href="reservation.html">reservation</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div className="soc_icons">
                        <ul>
                            <li><a className="icon1" href="#" /></li>
                            <li><a className="icon2" href="#" /></li>
                            <li><a className="icon3" href="#" /></li>
                            <li><a className="icon4" href="#" /></li>
                            <li><a className="icon5" href="#" /></li>
                            <div className="clear" />
                        </ul>
                    </div>
                    <div className="clear" />
                </div>
            </div>
        </div>
    );
};

export default Footer