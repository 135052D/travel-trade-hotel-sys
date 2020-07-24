DROP DATABASE IF EXISTS `common_admin_travel`;
CREATE DATABASE `common_admin_travel`;
USE `common_admin_travel`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `usename` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)

)