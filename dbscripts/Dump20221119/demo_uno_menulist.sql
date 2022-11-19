-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: demo
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `uno_menulist`
--

DROP TABLE IF EXISTS `uno_menulist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `uno_menulist` (
  `nmId` int NOT NULL AUTO_INCREMENT,
  `vcModule` varchar(100) DEFAULT NULL,
  `vcField1Name` varchar(100) DEFAULT NULL,
  `vcField1Key` varchar(500) DEFAULT NULL,
  `vcField1Value` varchar(500) DEFAULT NULL,
  `vcField2Name` varchar(100) DEFAULT NULL,
  `vcField2Key` varchar(100) DEFAULT NULL,
  `vcField2Value` varchar(500) DEFAULT NULL,
  `vcField3Name` varchar(100) DEFAULT NULL,
  `vcField3Key` varchar(100) DEFAULT NULL,
  `vcField3Value` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`nmId`),
  KEY `mnu_f1nme_idx` (`vcField1Name`),
  KEY `mnu_f1k_idx` (`vcField1Key`),
  KEY `mnu_mdf1nme_idx` (`vcModule`,`vcField1Name`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `uno_menulist`
--

LOCK TABLES `uno_menulist` WRITE;
/*!40000 ALTER TABLE `uno_menulist` DISABLE KEYS */;
INSERT INTO `uno_menulist` VALUES (1,'Actionitem','Status','Assigned','1',NULL,NULL,NULL,NULL,NULL,NULL),(2,'Actionitem','Status','In Progress','2',NULL,NULL,NULL,NULL,NULL,NULL),(3,'Actionitem','Status','Pending','3',NULL,NULL,NULL,NULL,NULL,NULL),(4,'Actionitem','Status','Completed','4',NULL,NULL,NULL,NULL,NULL,NULL),(5,'Actionitem','Status','Cancelled','5',NULL,NULL,NULL,NULL,NULL,NULL),(6,'Actionitem-template','Status','Active','6',NULL,NULL,NULL,NULL,NULL,NULL),(7,'Actionitem-template','Status','Inactive','7',NULL,NULL,NULL,NULL,NULL,NULL),(8,'Actionitem','Impact','Critical','1',NULL,NULL,NULL,NULL,NULL,NULL),(9,'Actionitem','Impact','High','2',NULL,NULL,NULL,NULL,NULL,NULL),(10,'Actionitem','Impact','Medium','3',NULL,NULL,NULL,NULL,NULL,NULL),(11,'Actionitem','Impact','Low','4',NULL,NULL,NULL,NULL,NULL,NULL),(12,'Actionitem','Priority','Critical','1',NULL,NULL,NULL,NULL,NULL,NULL),(13,'Actionitem','Priority','High','2',NULL,NULL,NULL,NULL,NULL,NULL),(14,'Actionitem','Priority','Medium','3',NULL,NULL,NULL,NULL,NULL,NULL),(15,'Actionitem','Priority','Low','4',NULL,NULL,NULL,NULL,NULL,NULL),(16,'Actionitem','Urgency','Critical','1',NULL,NULL,NULL,NULL,NULL,NULL),(17,'Actionitem','Urgency','High','2',NULL,NULL,NULL,NULL,NULL,NULL),(18,'Actionitem','Urgency','Medium','3',NULL,NULL,NULL,NULL,NULL,NULL),(19,'Actionitem','Urgency','Low','4',NULL,NULL,NULL,NULL,NULL,NULL),(20,'Actionitem-meeting','Type','Meeting Definition','1',NULL,NULL,NULL,NULL,NULL,NULL),(21,'Actionitem-meeting','Type','Meeting Occurrence','2',NULL,NULL,NULL,NULL,NULL,NULL),(22,'Actionitem','Type','General','3',NULL,NULL,NULL,NULL,NULL,NULL),(23,'Actionitem','Type','Email','4',NULL,NULL,NULL,NULL,NULL,NULL),(24,'Actionitem','Type','Escalation','5',NULL,NULL,NULL,NULL,NULL,NULL),(25,'Actionitem-meeting','Type','Minutes','6',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `uno_menulist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-19 10:48:30
