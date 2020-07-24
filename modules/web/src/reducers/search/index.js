import {combineReducers} from 'redux'

import searchRequest from './request/searchRequest'

const search =combineReducers({
    searchRequest
});

export default search