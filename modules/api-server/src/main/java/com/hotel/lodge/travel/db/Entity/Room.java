package com.hotel.lodge.travel.db.Entity;

import javax.persistence.*;

@Entity
@Table(name = "room")
@IdClass(RoomId.class)
public class Room {

    @Id
    private int roomId;

    @Id
    private int hotelId;


    private double price;
    private String room_type;
    private String description;


    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public int getHotelId() {
        return hotelId;
    }

    public void setHotelId(int hotelId) {
        this.hotelId = hotelId;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getRoom_type() {
        return room_type;
    }

    public void setRoom_type(String room_type) {
        this.room_type = room_type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Room{" +
                "roomId=" + roomId +
                ", hotelId=" + hotelId +
                ", price=" + price +
                ", room_type='" + room_type + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
