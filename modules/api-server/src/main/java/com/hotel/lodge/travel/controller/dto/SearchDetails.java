package com.hotel.lodge.travel.controller.dto;

public class SearchDetails {

    private String hotelName;
    private String checkedIn;
    private String checkedOut;

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public String getCheckedIn() {
        return checkedIn;
    }

    public void setCheckedIn(String checkedIn) {
        this.checkedIn = checkedIn;
    }

    public String getCheckedOut() {
        return checkedOut;
    }

    public void setCheckedOut(String checkedOut) {
        this.checkedOut = checkedOut;
    }

    @Override
    public String toString() {
        return "SearchDetails{" +
                "hotelName='" + hotelName + '\'' +
                ", checkedIn='" + checkedIn + '\'' +
                ", checkedOut='" + checkedOut + '\'' +
                '}';
    }
}
