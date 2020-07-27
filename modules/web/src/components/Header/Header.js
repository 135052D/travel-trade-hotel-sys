import React from 'react'
import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./LeftBar/RightBar/RightBar";

const Header = () => {
    return(
        <div className="header_bg">
            <div className="wrap">
                <div className="header">
                    <LeftBar/>
                    <RightBar/>
                    <div className="clear" />
                    <div className="top-nav">
                        <nav className="clearfix">
                            <ul>
                                <li className="active"><a href="#">hotel</a></li>
                                <li><a href="#">rooms &amp; suits</a></li>
                                <li><a href="#">reservation</a></li>
                                <li><a href="activities.html">taxi service</a></li>
                                <li><a href="activities.html">food</a></li>
                                <li><a href="contact.html">spa</a></li>
                            </ul>
                            <a href="#" id="pull">Menu</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header