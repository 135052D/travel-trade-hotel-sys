package com.hotel.lodge.travel.db.Entity;

import java.io.Serializable;
import java.sql.Date;


public class BookingId implements Serializable {

    private int hotelId;

    private int roomId;

    private Date checkedIn;


    public int getHotelId() {
        return hotelId;
    }

    public void setHotelId(int hotelId) {
        this.hotelId = hotelId;
    }

    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public Date getCheckedIn() {
        return checkedIn;
    }

    public void setCheckedIn(Date checkedIn) {
        this.checkedIn = checkedIn;
    }

    @Override
    public String toString() {
        return "BookingId{" +
                "hotelId=" + hotelId +
                ", roomId=" + roomId +
                ", checkedIn=" + checkedIn +
                '}';
    }
}
