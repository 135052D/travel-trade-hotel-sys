package com.hotel.lodge.travel.services.impl;

import com.hotel.lodge.travel.db.Entity.AvailableRooms;
import com.hotel.lodge.travel.db.Entity.Room;
import com.hotel.lodge.travel.repository.RoomRepository;
import com.hotel.lodge.travel.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
import java.sql.Date;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service("roomService")
@Transactional
public class RoomServiceImpl implements RoomService {

    private final RoomRepository roomRepository;

    @Autowired
    public RoomServiceImpl(RoomRepository roomRepository){
        this.roomRepository = roomRepository;
    }


    @Override
    public Collection<AvailableRooms> findAvailiableRooms(String hotelName, String checkedIn, String checkedOut){
        return roomRepository.findAvailiableRooms(hotelName,checkedIn,checkedOut);
    }
}
