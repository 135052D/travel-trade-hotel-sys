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
    console.log("------------------------------------",searchRequests);

    // const  searchQuery = {
    //     startDateTime : searchRequests && searchRequests.startDate || "",
    //     endDateTime:searchRequests && searchRequests.endDate|| "",
    //     hotelName:searchRequests && searchRequests.hotelName || "",
    // };

    const  searchQuery = {
        id:10,
        username : "shanika",
        email :"shahhah@gmail.com",
        password:"Test123#"
    };

    console.log("----------///////--------------------------",searchQuery);

    return (dispatch,getState) => {

        source.hotelDetails(searchQuery)
            .catch(error => {
                dispatch(hotelDetailsError(error))
            })
            .then(response => {
                dispatch(hotelDetailsSuccess(response));
                dispatch(hotelDetails(response.results[0]));
                return response
            })
            .catch(error => {
                dispatch(hotelDetailsError(error))
            });
        dispatch(hotelDetailsPending());
    }
};
