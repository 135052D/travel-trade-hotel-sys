import React from 'react'
import SearchResult from "./SearchResult/SearchResult";
import {connect} from 'react-redux'

const SearchResults = ({results,key}) => {

        return(
            <div className="grids_of_3" key={key}>
                {results.hotelDetails && results.hotelDetails.map((result) =>{
                        return(
                            <SearchResult result={result} key={result.email}/>
                        )
                    }
                )
                }
            </div>
        );


};
const mapStateToProps = state => {
    return {
        results:state.search && state.search.hotelDetails ,
    }
};

export default connect(mapStateToProps)(SearchResults);
