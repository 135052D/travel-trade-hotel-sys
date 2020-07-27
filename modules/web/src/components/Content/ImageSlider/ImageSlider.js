import React from 'react'

const ImageSlider = () => {
    return(
        <div className="images-slider">
            <div id="fwslider">
                <div className="slider_container">
                    <div className="slide">
                        <img src="images/slider-bg.jpg" alt="" />
                        <div className="slide_content">
                            <div className="slide_content_wrap">
                                <h4 className="title"><i className="bg" />Travel Lodge Hotel</h4>
                                <h5 className="title1"><i className="bg" />Wherever you travel, do it for less</h5>
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
    );
};

export default ImageSlider