import React from 'react'
import SeaarchResult from "./SearchResult/SeaarchResult";

const SearchResults = () => {
    return(
        <div className="grids_of_3">
            <SeaarchResult/>
            <div className="clear"/>
        </div>
    );
};

export default SearchResults