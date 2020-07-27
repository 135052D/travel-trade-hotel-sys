import React from 'react'

const Header = () => {
    return(
        <div className="header_bg">
            <div className="wrap">
                <div className="header">
                    <div className="logo">
                        <a href="index.html"><img src="./images/logo.png" alt="" /></a>
                    </div>
                    <div className="h_right">
                        <ul className="menu">
                            <li className="active"><a href="index.html">hotel</a></li> |
                            <li><a href="#">rooms &amp; suits</a></li> |
                            <li><a href="#">reservation</a></li> |
                            <li><a href="#">taxi service</a></li> |
                            <li><a href="#">food</a></li> |
                            <li><a href="#">spa</a></li>
                            <div className="clear" />
                        </ul>
                        <ul className="style-1 drp_dwn">
                            <div className="row">
                                <div className="grid_3 columns">
                                    <select className="custom-select" id="select-1">
                                        <option >EN</option>
                                        <option>USA</option>
                                        <option>AUS</option>
                                        <option>UK</option>
                                        <option>IND</option>
                                    </select>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className="clear" />
                    <div className="top-nav">
                        <nav className="clearfix">
                            <ul>
                                <li className="active"><a href="index.html">hotel</a></li>
                                <li><a href="rooms.html">rooms &amp; suits</a></li>
                                <li><a href="reservation.html">reservation</a></li>
                                <li><a href="activities.html">activities</a></li>
                                <li><a href="contact.html">contact</a></li>
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