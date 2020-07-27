import source from "./source";

const hotelDetailsPending = () => ({
    type: 'HOTEL_DETAILS_PENDING'
});

const hotelDetailsSuccess = (hotelDetails) => ({
    type: 'HOTEL_DETAILS_SUCCESS',
    hotelDetails
});

const hotelDetailsError = (error) => ({
    type: 'HOTEL_DETAILS_ERROR',
    error
});

export const hotelDetails = (searchRequests) => {

    const  searchQuery = {
        hotelName:searchRequests && searchRequests.hotelName || "",
        startDateTime : searchRequests.startDate && searchRequests.startDate.split("T")[0] || new Date(),
        endDateTime:searchRequests.endDate && searchRequests.endDate.split("T")[0]|| new Date(),

    };

    return (dispatch) => {
        source.hotelDetails(searchQuery)
            .catch(error => {
                dispatch(hotelDetailsError(error))
            })
            .then(response => {
                dispatch(hotelDetailsSuccess(response));
                return response
            })
            .catch(error => {
                dispatch(hotelDetailsError(error))
            });
        dispatch(hotelDetailsPending());
    }

};
