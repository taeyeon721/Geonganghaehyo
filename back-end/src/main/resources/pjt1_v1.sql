-- MariaDB dump 10.19  Distrib 10.6.11-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: springboot
-- ------------------------------------------------------
-- Server version	10.6.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accident_archive`
--

DROP TABLE IF EXISTS `accident_archive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accident_archive` (
                                    `email` varchar(50) NOT NULL,
                                    `image_url` varchar(50) DEFAULT NULL,
                                    `accident_date` datetime DEFAULT NULL,
                                    PRIMARY KEY (`email`),
                                    CONSTRAINT `FK_manager_TO_accident_archive_1` FOREIGN KEY (`email`) REFERENCES `manager` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accident_archive`
--

LOCK TABLES `accident_archive` WRITE;
/*!40000 ALTER TABLE `accident_archive` DISABLE KEYS */;
/*!40000 ALTER TABLE `accident_archive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_list`
--

DROP TABLE IF EXISTS `game_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game_list` (
                             `game_name` varchar(20) NOT NULL,
                             PRIMARY KEY (`game_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_list`
--

LOCK TABLES `game_list` WRITE;
/*!40000 ALTER TABLE `game_list` DISABLE KEYS */;
INSERT INTO `game_list` VALUES ('rsp');
/*!40000 ALTER TABLE `game_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_record`
--

DROP TABLE IF EXISTS `game_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game_record` (
                               `game_time` datetime NOT NULL,
                               `email` varchar(50) NOT NULL,
                               `game_name` varchar(20) NOT NULL,
                               `game_score` int(100) DEFAULT NULL,
                               PRIMARY KEY (`game_time`,`email`,`game_name`),
                               KEY `FK_manager_TO_game_record_1` (`email`),
                               KEY `FK_game_list_TO_game_record_1` (`game_name`),
                               CONSTRAINT `FK_game_list_TO_game_record_1` FOREIGN KEY (`game_name`) REFERENCES `game_list` (`game_name`),
                               CONSTRAINT `FK_manager_TO_game_record_1` FOREIGN KEY (`email`) REFERENCES `manager` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_record`
--

LOCK TABLES `game_record` WRITE;
/*!40000 ALTER TABLE `game_record` DISABLE KEYS */;
INSERT INTO `game_record` VALUES ('2023-02-09 15:10:36','test@naver.com','rsp',100);
/*!40000 ALTER TABLE `game_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gym_list`
--

DROP TABLE IF EXISTS `gym_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gym_list` (
                            `gym_name` varchar(20) NOT NULL,
                            PRIMARY KEY (`gym_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gym_list`
--

LOCK TABLES `gym_list` WRITE;
/*!40000 ALTER TABLE `gym_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `gym_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gym_record`
--

DROP TABLE IF EXISTS `gym_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gym_record` (
                              `gym_time` datetime NOT NULL,
                              `email` varchar(50) NOT NULL,
                              `gym_name` varchar(20) NOT NULL,
                              PRIMARY KEY (`gym_time`,`email`,`gym_name`),
                              KEY `FK_manager_TO_gym_record_1` (`email`),
                              KEY `FK_gym_list_TO_gym_record_1` (`gym_name`),
                              CONSTRAINT `FK_gym_list_TO_gym_record_1` FOREIGN KEY (`gym_name`) REFERENCES `gym_list` (`gym_name`),
                              CONSTRAINT `FK_manager_TO_gym_record_1` FOREIGN KEY (`email`) REFERENCES `manager` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gym_record`
--

LOCK TABLES `gym_record` WRITE;
/*!40000 ALTER TABLE `gym_record` DISABLE KEYS */;
/*!40000 ALTER TABLE `gym_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manager`
--

DROP TABLE IF EXISTS `manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manager` (
                           `email` varchar(50) NOT NULL,
                           `password` varchar(100) NOT NULL,
                           `gender` varchar(10) DEFAULT NULL,
                           `age` int(200) DEFAULT NULL,
                           `tel_no` varchar(50) DEFAULT NULL,
                           `name` varchar(10) NOT NULL,
                           `user_name` varchar(10) NOT NULL,
                           `role` varchar(20) NOT NULL,
                           PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manager`
--

LOCK TABLES `manager` WRITE;
/*!40000 ALTER TABLE `manager` DISABLE KEYS */;
INSERT INTO `manager` VALUES ('admin02@ssafy.com','$2a$10$47wQjZn9NPbJHk.ndkT6N.Hhfk41hTc58TAU6sCN8WCWeZpS0qzcG','male',27,'01055554444','pkw','ssafy','ADMIN'),('scv74502@naver.com','$2a$10$Hf1z5CxIcKG5mXFkZxL6FuMmkV2nKdU2nUa.bn2UOEbOK3ddpxrWy','male',27,'01055554444','pkw','ssafy','MANAGER'),('test@naver.com','test',NULL,NULL,NULL,'test','test','MANAGER');
/*!40000 ALTER TABLE `manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message` (
                           `msg_id` varchar(50) NOT NULL,
                           `email` varchar(50) NOT NULL,
                           `is_sound` tinyint(1) DEFAULT NULL,
                           `content` text DEFAULT NULL,
                           `time` datetime DEFAULT NULL,
                           PRIMARY KEY (`msg_id`,`email`),
                           KEY `FK_manager_TO_message_1` (`email`),
                           CONSTRAINT `FK_manager_TO_message_1` FOREIGN KEY (`email`) REFERENCES `manager` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES ('0f72a053-057b-4c91-b28f-efe68e070127','test@naver.com',1,'https://www.naver.com','2023-02-14 10:58:02'),('1fe46bbb-7a07-460c-96c1-1e1d06b494b3','test@naver.com',0,'테스트 보내기','2023-02-14 10:57:46'),('9a73036a-7f9c-4bb2-a82c-40c5a5ff5cf8','test@naver.com',0,'김규리','2023-02-14 10:58:22'),('a7f15d0c-1984-4b70-b54c-f8d436098c40','test@naver.com',1,'https://www.gogole.com','2023-02-14 10:58:12'),('bcabf6c4-09a8-4164-b002-745fde2a421f','test@naver.com',0,'김태연','2023-02-14 10:58:30'),('df01c0bf-d46b-4798-a767-dc6b9c62eeed','test@naver.com',0,'김승준','2023-02-14 10:58:27');
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `normal_quiz`
--

DROP TABLE IF EXISTS `normal_quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `normal_quiz` (
                               `no` int(100) NOT NULL,
                               `question` varchar(200) DEFAULT NULL,
                               `answer` varchar(50) DEFAULT NULL,
                               `decoy` varchar(50) DEFAULT NULL,
                               `isImage` tinyint(1) DEFAULT NULL,
                               PRIMARY KEY (`no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `normal_quiz`
--

LOCK TABLES `normal_quiz` WRITE;
/*!40000 ALTER TABLE `normal_quiz` DISABLE KEYS */;
/*!40000 ALTER TABLE `normal_quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `set_top`
--

DROP TABLE IF EXISTS `set_top`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `set_top` (
                           `set_top_id` varchar(50) NOT NULL,
                           `name` varchar(20) NOT NULL,
                           `tel_no` varchar(30) NOT NULL,
                           `email` varchar(50) DEFAULT NULL,
                           PRIMARY KEY (`set_top_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `set_top`
--

LOCK TABLES `set_top` WRITE;
/*!40000 ALTER TABLE `set_top` DISABLE KEYS */;
INSERT INTO `set_top` VALUES ('48546545645645665','pkw','01055554444','scv74502@naver.com'),('sdfsdfr2434','pkw','01055554444','admin02@ssafy.com');
/*!40000 ALTER TABLE `set_top` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `token` (
                         `email` varchar(50) NOT NULL,
                         `refreshtoken` varchar(500) NOT NULL,
                         PRIMARY KEY (`email`),
                         CONSTRAINT `FK_manager_TO_token_1` FOREIGN KEY (`email`) REFERENCES `manager` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES ('admin02@ssafy.com','eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluMDJAc3NhZnkuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjc2MzYwNDA0LCJleHAiOjE2Nzc1NzAwMDR9.1h2FFeKte8LYzZJ_x6jfqdASws6zv1wlsbvFFl4k0zA'),('test@naver.com','eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3RAbmF2ZXIuY29tIiwicm9sZSI6Ik1BTkFHRVIiLCJpYXQiOjE2NzYzMzk4MTksImV4cCI6MTY3NzU0OTQxOX0.a8HEFNncDKK2CS0d4jQwuI9x_LzsOLazHzy9oJX1m1c');
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_quiz`
--

DROP TABLE IF EXISTS `user_quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_quiz` (
                             `quiz_id` varchar(100) NOT NULL,
                             `email` varchar(50) NOT NULL,
                             `question` varchar(50) NOT NULL,
                             `answer` varchar(50) NOT NULL,
                             `decoy` varchar(50) NOT NULL,
                             `is_image` tinyint(1) DEFAULT NULL,
                             PRIMARY KEY (`quiz_id`,`email`),
                             KEY `FK_manager_TO_user_quiz_1` (`email`),
                             CONSTRAINT `FK_manager_TO_user_quiz_1` FOREIGN KEY (`email`) REFERENCES `manager` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_quiz`
--

LOCK TABLES `user_quiz` WRITE;
/*!40000 ALTER TABLE `user_quiz` DISABLE KEYS */;
INSERT INTO `user_quiz` VALUES ('95c796c6-bdb6-474d-8aa9-5eec0332a243','test@naver.com','당고는 강아지인가요?','yes!!!!','no!!!!',0),('c95ac474-fe3a-458a-a4b7-be4b7082f11b','test@naver.com','당고는 강아지인가요?','yes!','no!',0),('cb02f0bf-94b9-4239-a763-1de8ed74e3f5','test@naver.com','당고는 강아지인가요?','yes!!!!','no!!!!',0);
/*!40000 ALTER TABLE `user_quiz` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-14 17:45:02
