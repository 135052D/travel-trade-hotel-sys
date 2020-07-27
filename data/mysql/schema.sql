DROP DATABASE IF EXISTS `common_admin_hotel`;
CREATE DATABASE `common_admin_hotel`;

DROP TABLE IF EXISTS `hotel`;
CREATE TABLE `hotel` (
  `hotel_id` int NOT NULL AUTO_INCREMENT,
  `hotel_name` varchar(255) DEFAULT NULL,
   PRIMARY KEY (`hotel_id`)

)

DROP TABLE IF EXISTS `customer`;
CREATE TABLE `hotel` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `checked_in` datetime DEFAULT NULL,
  `checked_out` datetime DEFAULT NULL,
   PRIMARY KEY (`customer_id`)
)

DROP TABLE IF EXISTS `room`;
CREATE TABLE `hotel` (
  `room_id` int NOT NULL AUTO_INCREMENT,
  `price` double DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,

   PRIMARY KEY (`room_id`),
   CONSTRAINT `FK_hotel` FOREIGN KEY (`hotel_id`) REFERENCES `hotel` (`hotel_id`),
   CONSTRAINT `FK_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`)
)






