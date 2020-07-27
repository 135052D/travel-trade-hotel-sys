export const selectStartDate = startDate => ({
    type: 'START_DATE',
    startDate,
});

export const selectEndDate = endDate => ({
    type: 'END_DATE',
    endDate,
});

export const selectHotelName = hotelName => ({
    type: 'HOTEL_NAME',
    hotelName
});