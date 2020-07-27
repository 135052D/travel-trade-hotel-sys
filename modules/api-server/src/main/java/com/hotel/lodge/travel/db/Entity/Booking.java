package com.hotel.lodge.travel.db.Entity;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "booking")
@IdClass(BookingId.class)
public class Booking{

    @Id
    private int hotelId;

    @Id
    private  int roomId;

    @Id
    private String checkedIn;

    private String checkedOut;


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
        return "Booking{" +
                "hotelId=" + hotelId +
                ", roomId=" + roomId +
                ", checkedIn='" + checkedIn + '\'' +
                ", checkedOut='" + checkedOut + '\'' +
                '}';
    }
}
