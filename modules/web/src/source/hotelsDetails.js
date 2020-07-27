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
        "hotelName":"tea bush ramboda",
        "chekedIn" : "2020-07-31",
        "chekedOut" :"2020-08-02"
    };

    console.log("----------///////--------------------------",searchQuery);

    return (dispatch,getState) => {

        source.hotelDetails(searchQuery)
            .catch(error => {
                dispatch(hotelDetailsError(error))
            })
            .then(response => {
                dispatch(hotelDetailsSuccess(response));
                // dispatch(hotelDetails(response.results));
                console.log("----------------------------",response)
                return response
            })
            .catch(error => {
                dispatch(hotelDetailsError(error))
            });
        dispatch(hotelDetailsPending());
    }

    // return (dispatch) => {
    //
    //     source.hotelDetails()
    //         .catch(error => {
    //             dispatch(hotelDetailsError(error))
    //         })
    //         .then(response => {
    //             dispatch(hotelDetailsSuccess(response));
    //             // dispatch(hotelDetails(response.results));
    //             console.log("----------------------------",response)
    //             return response
    //         })
    //         .catch(error => {
    //             dispatch(hotelDetailsError(error))
    //         });
    //     dispatch(hotelDetailsPending());
    // }
};
