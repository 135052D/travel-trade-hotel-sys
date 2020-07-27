DROP DATABASE IF EXISTS `hotel_system`;
CREATE DATABASE `hotel_system`;

USE  `hotel_system`;

CREATE table booking( check_in DATE,
			check_out DATE,
			hotel_id INT(2),
			room_id INT(5),
			PRIMARY KEY(check_in, hotel_id, room_id));


CREATE TABLE hotel(hotel_id INT(2),
	hotel_name VARCHAR(100),
	location VARCHAR(100),
	PRIMARY KEY(hotel_id));

CREATE TABLE room(room_id INT(5), hotel_id INT(2), room_type VARCHAR(100), price DOUBLE(10,4), availability boolean,
PRIMARY KEY (room_id, hotel_id));







