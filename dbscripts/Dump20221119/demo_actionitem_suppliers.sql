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
-- Table structure for table `actionitem_suppliers`
--

DROP TABLE IF EXISTS `actionitem_suppliers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actionitem_suppliers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `actionitemcode` varchar(20) NOT NULL,
  `sp_company_name` varchar(100) DEFAULT NULL,
  `sp_company_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actionitem_suppliers`
--

LOCK TABLES `actionitem_suppliers` WRITE;
/*!40000 ALTER TABLE `actionitem_suppliers` DISABLE KEYS */;
INSERT INTO `actionitem_suppliers` VALUES (4,'ACI110000000192','HCL Technologies Ltd',4),(5,'ACI110000000194','HCL Technologies Ltd',4),(6,'ACI110000000195','HCL Technologies Ltd',4),(7,'ACI110000000196','HCL Technologies Ltd',4),(8,'ACI110000000197','HCL Technologies Ltd',4),(9,'ACI110000000199','HCL Technologies Ltd',4),(10,'ACI110000000200','HCL Technologies Ltd',4),(11,'ACI110000000201','HCL Technologies Ltd',4),(12,'ACI110000000202','HCL Technologies Ltd',4),(13,'ACI110000000203','HCL Technologies Ltd',4),(14,'ACI110000000204','HCL Technologies Ltd',4);
/*!40000 ALTER TABLE `actionitem_suppliers` ENABLE KEYS */;
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
