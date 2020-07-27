package com.hotel.lodge.travel.repository;

import com.hotel.lodge.travel.db.Entity.AvailableRooms;
import com.hotel.lodge.travel.db.Entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.Date;
import java.util.Collection;
import java.util.List;

public interface RoomRepository extends JpaRepository<Room,Integer> {

    @Query(value = "select count(r.room_id) as noOfRooms, room_type as type from room r LEFT JOIN hotel h ON r.hotel_id = h.hotel_id LEFT JOIN booking b ON r.room_id=b.room_id and h.hotel_id=b.hotel_id WHERE r.room_id not in (select distinct room_id from booking where b.check_in >=?2 and check_out >= ?2 and check_in<?3 and h.hotel_name=?1) and hotel_name=?1 group by room_type",nativeQuery = true )
    
    Collection<AvailableRooms> findAvailiableRooms(String hotelName, String checkedIn, String checkedOut);

}
