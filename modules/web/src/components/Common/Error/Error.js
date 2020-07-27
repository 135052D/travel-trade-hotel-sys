import React from 'react'
import {connect} from 'react-redux'

const Error = ({results}) => {
    return(
        <div>{ (results.hotelDetails && results.hotelDetails.length ==0) &&
            <div className="error">
                    <h4>
                        Rooms Not Available
                    </h4>
            </div>
        }
        </div>

    );
};


const mapStateToProps = state => {
    return {
        results:state.search && state.search.hotelDetails ,
    }
};

export default connect(mapStateToProps)(Error);
