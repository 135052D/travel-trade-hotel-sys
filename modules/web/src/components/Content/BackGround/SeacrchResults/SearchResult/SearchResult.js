import React from 'react'

const SearchResult = ({result}) => {
    return(
        <div className="grid1_of_3">
            <div className="grid1_of_3_img">
                <a href="#">
                    <img src="images/pic2.jpg" alt=""/>
                </a>
                <h4>Room Type : {result.type}</h4>
                <p>{result.noOfRooms} available</p>
            </div>

        </div>
    );
};

export default SearchResult