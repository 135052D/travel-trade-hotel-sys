import React from 'react'
import CopyRight from "./CopyRight/CopyRight";
import Services from "./Services/Services";
import SocialMediaNavigation from "./SocialMediaNavigation/SocialMediaNavigation";

const Footer = () => {
    return(
        <div className="footer_bg">
            <div className="wrap">
                <div className="footer">
                    <CopyRight/>
                    <Services/>
                    <SocialMediaNavigation/>
                    <div className="clear" />
                </div>
            </div>
        </div>
    );
};

export default Footer