import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header_bg">
                    <div className="wrap">
                        <div className="header">
                            <div className="logo">
                                <a href="index.html"><img src="./images/logo.png" alt="" /></a>
                            </div>
                            <div className="h_right">
                                <ul className="menu">
                                    <li className="active"><a href="index.html">hotel</a></li> |
                                    <li><a href="rooms.html">rooms &amp; suits</a></li> |
                                    <li><a href="reservation.html">reservation</a></li> |
                                    <li><a href="activities.html">activities</a></li> |
                                    <li><a href="contact.html">contact</a></li>
                                    <div className="clear" />
                                </ul>
                                <ul className="style-1 drp_dwn">
                                    <div className="row">
                                        <div className="grid_3 columns">
                                            <select className="custom-select" id="select-1">
                                                <option selected="selected">EN</option>
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
                <div className="images-slider">
                    <div id="fwslider">
                        <div className="slider_container">
                            <div className="slide">
                                <img src="images/slider-bg.jpg" alt="" />
                                <div className="slide_content">
                                    <div className="slide_content_wrap">
                                        <h4 className="title"><i className="bg" />Lorem Ipsum is simply <span className="hide">dummy text</span></h4>
                                        <h5 className="title1"><i className="bg" />Morbi justo <span className="hide">condimentum accumsan</span></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <img src="images/slider-bg.jpg" alt="" />
                                <div className="slide_content">
                                    <div className="slide_content_wrap">
                                        <h4 className="title"><i className="bg" />Morbi justo <span className="hide"> condimentum </span>text</h4>
                                        <h5 className="title1"><i className="bg" />Lorem Ipsum is <span className="hide">simply dummy text</span> </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="timers"> </div>
                        <div className="slidePrev"><span> </span></div>
                        <div className="slideNext"><span> </span></div>
                    </div>
                </div>
                <div className="main_bg">
                    <div className="wrap">
                        <div className="online_reservation">
                            <div className="b_room">
                                <div className="booking_room">
                                    <h4>book a room online</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                </div>
                                <div className="reservation">
                                    <ul>
                                        <li className="span1_of_1">
                                            <h5>type of room:</h5>
                                            <div className="section_room">
                                                <select id="country" onChange="change_country(this.value)"
                                                        className="frm-field required">
                                                    <option value="null">Select a type of room</option>
                                                    <option value="null">Suite room</option>
                                                    <option value="AX">Single room</option>
                                                    <option value="AX">Double room</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li className="span1_of_1 left">
                                            <h5>check-in-date:</h5>
                                            <div className="book_date">
                                                <form>
                                                    <input className="date" id="datepicker" type="text"
                                                           defaultValue="DD/MM/YY" onFocus="this.value = '';"
                                                           onBlur="if (this.value == '') {this.value = 'DD/MM/YY';}"/>
                                                </form>
                                            </div>
                                        </li>
                                        <li className="span1_of_1 left">
                                            <h5>check-out-date:</h5>
                                            <div className="book_date">
                                                <form>
                                                    <input className="date" id="datepicker1" type="text"
                                                           defaultValue="DD/MM/YY" onFocus="this.value = '';"
                                                           onBlur="if (this.value == '') {this.value = 'DD/MM/YY';}"/>
                                                </form>
                                            </div>
                                        </li>
                                        <li className="span1_of_2 left">
                                            <h5>Adults:</h5>
                                            <div className="section_room">
                                                <select id="country" onChange="change_country(this.value)"
                                                        className="frm-field required">
                                                    <option value="null">1</option>
                                                    <option value="null">2</option>
                                                    <option value="AX">3</option>
                                                    <option value="AX">4</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li className="span1_of_3">
                                            <div className="date_btn">
                                                <form>
                                                    <input type="submit" defaultValue="book now"/>
                                                </form>
                                            </div>
                                        </li>
                                        <div className="clear"/>
                                    </ul>
                                </div>
                                <div className="clear"/>
                            </div>
                        </div>
                        <div className="grids_of_3">
                            <div className="grid1_of_3">
                                <div className="grid1_of_3_img">
                                    <a href="details.html">
                                        <img src="images/pic2.jpg" alt=""/>
                                        <span className="next"> </span>
                                    </a>
                                </div>
                                <h4><a href="#">single room<span>120$</span></a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.</p>
                            </div>
                            <div className="grid1_of_3">
                                <div className="grid1_of_3_img">
                                    <a href="details.html">
                                        <img src="images/pic1.jpg" alt=""/>
                                        <span className="next"> </span>
                                    </a>
                                </div>
                                <h4><a href="#">double room<span>180$</span></a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.</p>
                            </div>
                            <div className="grid1_of_3">
                                <div className="grid1_of_3_img">
                                    <a href="details.html">
                                        <img src="images/pic3.jpg" alt=""/>
                                        <span className="next"> </span>
                                    </a>
                                </div>
                                <h4><a href="#">suite room<span>210$</span></a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.</p>
                            </div>
                            <div className="clear"/>
                        </div>
                    </div>
                </div>
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
            </div>
        );
    }
}

export default App;
