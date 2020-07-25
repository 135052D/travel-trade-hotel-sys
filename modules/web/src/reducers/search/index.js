import {combineReducers} from 'redux'

import searchRequest from './request/searchRequest'
import hotelDetails from "./hotelDetailsList/hotelDetails";

const search =combineReducers({
    searchRequest,
    hotelDetails
});

export default search