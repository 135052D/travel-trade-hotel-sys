package com.hotel.lodge.travel.db.Entity;

import java.io.Serializable;

public class RoomId implements Serializable {

    @Override
    public String toString() {
        return "RoomId{" +
                "hotelId='" + hotelId + '\'' +
                ", roomId='" + roomId + '\'' +
                '}';
    }

    private String hotelId;

    private String roomId;


    public String getHotelId() {
        return hotelId;
    }

    public void setHotelId(String hotelId) {
        this.hotelId = hotelId;
    }

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }
}
