import React from 'react'

const SearchResult = ({result}) => {
    return(
        <div className="grid1_of_3">
            <div className="grid1_of_3_img">
                <a href="#">
                    <img src="images/pic2.jpg" alt=""/>
                </a>
                <h4>Room Type : {result.username}</h4>
                <p>{result.email} available</p>
            </div>

        </div>
    );
};

export default SearchResult