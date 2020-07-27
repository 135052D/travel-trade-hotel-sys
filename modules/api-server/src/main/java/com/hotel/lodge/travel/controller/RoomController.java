package com.hotel.lodge.travel.controller;

import com.hotel.lodge.travel.controller.dto.SearchDetails;
import com.hotel.lodge.travel.db.Entity.AvailableRooms;
import com.hotel.lodge.travel.db.Entity.Room;
import com.hotel.lodge.travel.db.Entity.User;
import com.hotel.lodge.travel.services.RoomService;
import com.hotel.lodge.travel.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.Collection;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController

@RequestMapping("/")
public class RoomController {

    private final RoomService roomService;

    @Autowired
    public RoomController(RoomService roomService){
        this.roomService = roomService;
    }


    @PostMapping("/searchDetails")
    public ResponseEntity<AvailableRooms> searchDetails(@RequestBody SearchDetails searchDetails) {
        Collection<AvailableRooms> roomResponse = roomService.findAvailiableRooms(searchDetails.getHotelName(),searchDetails.getCheckedIn(),searchDetails.getCheckedOut());
        return new ResponseEntity(roomResponse, HttpStatus.OK);
    }


}
