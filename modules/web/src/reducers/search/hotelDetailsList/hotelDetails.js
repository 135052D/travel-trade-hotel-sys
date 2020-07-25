const hotelDetails = (state ={},action) => {
    switch (action.type) {
        case 'HOTEL_DETAILS_PENDING':
            return {status:'pending'};
        case 'HOTEL_DETAILS_SUCCESS':
            return {status: 'success', hotelDetails: action.hotelDetails};
        case 'HOTEL_DETAILS_ERROR':
            return {status: 'error', error: action.error};
        default:
            return state
    }
};

export default hotelDetails