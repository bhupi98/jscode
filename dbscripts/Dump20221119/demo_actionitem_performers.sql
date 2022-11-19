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
-- Table structure for table `actionitem_performers`
--

DROP TABLE IF EXISTS `actionitem_performers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actionitem_performers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `actionitemcode` varchar(20) NOT NULL,
  `performer_name` varchar(100) DEFAULT NULL,
  `performer_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actionitem_performers`
--

LOCK TABLES `actionitem_performers` WRITE;
/*!40000 ALTER TABLE `actionitem_performers` DISABLE KEYS */;
INSERT INTO `actionitem_performers` VALUES (1,'ACI110000000189','Ashish  Sinfgh','Ashish'),(2,'ACI110000000180','Ashish  Sinfgh','Ashish'),(3,'ACI110000000190','Ashish  Sinfgh','Ashish'),(4,'ACI110000000190','Bhupender','Bhupi'),(5,'ACI110000000191','Ashish  Sinfgh','Ashish'),(6,'ACI110000000191','Bhupender','Bhupi'),(7,'ACI110000000192','Ashish  Sinfgh','Ashish'),(8,'ACI110000000192','Bhupender','Bhupi'),(9,'ACI110000000193','Ashish  Sinfgh1','Ashish1'),(10,'ACI110000000193','Bhupender1','Bhupi2'),(11,'ACI110000000194','Ashish  Sinfgh1','Ashish1'),(12,'ACI110000000194','Bhupender1','Bhupi2'),(13,'ACI110000000195','Ashish  Sinfgh1','Ashish1'),(14,'ACI110000000195','Bhupender1','Bhupi2'),(15,'ACI110000000196','Ashish  Sinfgh1','Ashish1'),(16,'ACI110000000196','Bhupender1','Bhupi2'),(17,'ACI110000000197','Ashish  Sinfgh1','Ashish1'),(18,'ACI110000000197','Bhupender1','Bhupi2'),(19,'ACI110000000199','Ashish  Sinfgh1','Ashish1'),(20,'ACI110000000199','Bhupender1','Bhupi2'),(21,'ACI110000000200','Ashish  Sinfgh1','Ashish1'),(22,'ACI110000000200','Bhupender1','Bhupi2'),(23,'ACI110000000201','Ashish  Sinfgh1','Ashish1'),(24,'ACI110000000201','Bhupender1','Bhupi2'),(25,'ACI110000000202','Ashish  Sinfgh1','Ashish1'),(26,'ACI110000000202','Bhupender1','Bhupi2'),(27,'ACI110000000203','Ashish  Sinfgh1','Ashish1'),(28,'ACI110000000203','Bhupender1','Bhupi2'),(29,'ACI110000000204','Ashish  Sinfgh1','Ashish1'),(30,'ACI110000000204','Bhupender1','Bhupi2');
/*!40000 ALTER TABLE `actionitem_performers` ENABLE KEYS */;
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
