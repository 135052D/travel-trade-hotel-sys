import React from 'react'
import CheckAvailability from "./CheckAvailability/CheckAvailability";
import SearchResults from "./SeacrchResults/SearchResults";

const BackGround = () => {
    return(
        <div className="main_bg">
            <div className="wrap">
                <CheckAvailability/>
                <SearchResults/>
            </div>
        </div>
    );
};

export default BackGround