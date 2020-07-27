package com.hotel.lodge.travel.services;

import com.hotel.lodge.travel.db.Entity.AvailableRooms;
import com.hotel.lodge.travel.db.Entity.Room;

import java.sql.Date;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface RoomService {

    Collection<AvailableRooms> findAvailiableRooms(String hotelName, String checkedIn, String checkedOut);
}
