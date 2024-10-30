-- MySQL dump 10.13  Distrib 8.4.0, for Win64 (x86_64)
--
-- Host: db-mysql-hrms-do-user-17987673-0.i.db.ondigitalocean.com    Database: hrms
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '688d0999-8540-11ef-9103-4a6a3b2083d6:1-2746';

--
-- Temporary view structure for view `admin_name`
--

DROP TABLE IF EXISTS `admin_name`;
/*!50001 DROP VIEW IF EXISTS `admin_name`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `admin_name` AS SELECT 
 1 AS `employee_id`,
 1 AS `username`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `branch`
--

DROP TABLE IF EXISTS `branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `branch` (
  `branch_id` char(36) NOT NULL DEFAULT (uuid()),
  `country` varchar(50) NOT NULL,
  `address` varchar(250) DEFAULT NULL,
  `organization_id` char(36) DEFAULT NULL,
  `branch_name` varchar(100) DEFAULT NULL,
  `phone_number` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`branch_id`),
  KEY `organization_id` (`organization_id`),
  CONSTRAINT `branch_ibfk_1` FOREIGN KEY (`organization_id`) REFERENCES `organization` (`organization_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branch`
--

LOCK TABLES `branch` WRITE;
/*!40000 ALTER TABLE `branch` DISABLE KEYS */;
INSERT INTO `branch` VALUES ('0fcfed2e-8b5b-11ef-acee-4a6a3b2083d6','Sri Lanka','123, Union Place, Colombo 02, Sri Lanka','2d62d36d-8afa-11ef-acee-4a6a3b2083d6','Jupiter Apparels Sri Lanka','+94 11 2345688'),('0fd6b9d2-8b5b-11ef-acee-4a6a3b2083d6','Bangladesh','No. 12, Block B, Bashundhara R/A, Dhaka, Bangladesh','2d62d36d-8afa-11ef-acee-4a6a3b2083d6','Jupiter Apparels Bangladesh','+880 1 712345678'),('0fda7a24-8b5b-11ef-acee-4a6a3b2083d6','Pakistan','No. 21, F-10/2, Islamabad, Pakistan','2d62d36d-8afa-11ef-acee-4a6a3b2083d6','Jupiter Apparels Pakistan','+92 300 1234567');
/*!40000 ALTER TABLE `branch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_detail`
--

DROP TABLE IF EXISTS `contact_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_detail` (
  `employee_id` char(36) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  PRIMARY KEY (`employee_id`,`phone_number`),
  CONSTRAINT `contact_detail_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_detail`
--

LOCK TABLES `contact_detail` WRITE;
/*!40000 ALTER TABLE `contact_detail` DISABLE KEYS */;
INSERT INTO `contact_detail` VALUES ('04649a5f-96e6-11ef-acee-4a6a3b2083d6','0763467893'),('04649a5f-96e6-11ef-acee-4a6a3b2083d6','0784523781'),('078ade06-96e5-11ef-acee-4a6a3b2083d6','0705612120'),('078ade06-96e5-11ef-acee-4a6a3b2083d6','0712334567'),('086e0492-9527-11ef-acee-4a6a3b2083d6','01123456785'),('086e0492-9527-11ef-acee-4a6a3b2083d6','45697889'),('1915d681-967d-11ef-acee-4a6a3b2083d6','0716548224'),('1915d681-967d-11ef-acee-4a6a3b2083d6','12345678'),('1ea16ae8-96b1-11ef-acee-4a6a3b2083d6','0715355175'),('1ea16ae8-96b1-11ef-acee-4a6a3b2083d6','0716505808'),('2b031440-96ae-11ef-acee-4a6a3b2083d6','0115642685'),('2b031440-96ae-11ef-acee-4a6a3b2083d6','0784517459'),('2c0ae69f-96e7-11ef-acee-4a6a3b2083d6','0715355175'),('2c0ae69f-96e7-11ef-acee-4a6a3b2083d6','0912234567'),('2fa3df88-96d7-11ef-acee-4a6a3b2083d6','0708969763'),('2fa3df88-96d7-11ef-acee-4a6a3b2083d6','0712323456'),('326fb214-96bd-11ef-acee-4a6a3b2083d6','0761541254'),('326fb214-96bd-11ef-acee-4a6a3b2083d6','0781541254'),('45fa21d5-96d3-11ef-acee-4a6a3b2083d6','01123456785'),('45fa21d5-96d3-11ef-acee-4a6a3b2083d6','587451584512'),('4c6e8cf7-96e6-11ef-acee-4a6a3b2083d6','0123458878'),('4c6e8cf7-96e6-11ef-acee-4a6a3b2083d6','012456666'),('4f8816aa-96a6-11ef-acee-4a6a3b2083d6','0704517170'),('4f8816aa-96a6-11ef-acee-4a6a3b2083d6','0721212560'),('59962c85-96e5-11ef-acee-4a6a3b2083d6','8451246'),('59962c85-96e5-11ef-acee-4a6a3b2083d6','89'),('665107d0-96a2-11ef-acee-4a6a3b2083d6','0754047072'),('665107d0-96a2-11ef-acee-4a6a3b2083d6','0784535231'),('6d32b3ef-96a6-11ef-acee-4a6a3b2083d6','01123456785'),('6ed0b90c-96a4-11ef-acee-4a6a3b2083d6','01123456785'),('79167dbd-96d6-11ef-acee-4a6a3b2083d6','0705618180'),('79167dbd-96d6-11ef-acee-4a6a3b2083d6','0712323980'),('812fd419-96e7-11ef-acee-4a6a3b2083d6','0123654789'),('812fd419-96e7-11ef-acee-4a6a3b2083d6','0771236548'),('828f1a7d-96c3-11ef-acee-4a6a3b2083d6','032156546'),('828f1a7d-96c3-11ef-acee-4a6a3b2083d6','646136526'),('910399bf-9488-11ef-acee-4a6a3b2083d6','0716535221'),('a54f1c6e-952c-11ef-acee-4a6a3b2083d6','0787057255'),('bd399922-95ee-11ef-acee-4a6a3b2083d6','076555555'),('c0aa0d0a-96d2-11ef-acee-4a6a3b2083d6','11845124854'),('c3808039-96a7-11ef-acee-4a6a3b2083d6','0472243567'),('c3808039-96a7-11ef-acee-4a6a3b2083d6','0717647267'),('d9015df1-95ea-11ef-acee-4a6a3b2083d6','0768458000'),('e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','1456789456'),('e464fbf7-96e5-11ef-acee-4a6a3b2083d6','8451246'),('e464fbf7-96e5-11ef-acee-4a6a3b2083d6','8451548'),('ea0905f7-96d3-11ef-acee-4a6a3b2083d6','425412'),('f96540df-9699-11ef-acee-4a6a3b2083d6','0704518180'),('f96540df-9699-11ef-acee-4a6a3b2083d6','0912250674');
/*!40000 ALTER TABLE `contact_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `custom_attribute`
--

DROP TABLE IF EXISTS `custom_attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `custom_attribute` (
  `attribute_id` varchar(36) NOT NULL DEFAULT (uuid()),
  `attribute_name` varchar(50) NOT NULL,
  PRIMARY KEY (`attribute_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `custom_attribute`
--

LOCK TABLES `custom_attribute` WRITE;
/*!40000 ALTER TABLE `custom_attribute` DISABLE KEYS */;
INSERT INTO `custom_attribute` VALUES ('56f66670-968f-11ef-acee-4a6a3b2083d6','Nationality'),('c4fdca11-968f-11ef-acee-4a6a3b2083d6','Blood Type');
/*!40000 ALTER TABLE `custom_attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `dept_id` char(36) NOT NULL DEFAULT (uuid()),
  `name` varchar(50) NOT NULL,
  `manager_id` char(36) DEFAULT NULL,
  `branch_id` char(36) DEFAULT NULL,
  PRIMARY KEY (`dept_id`),
  KEY `branch_id` (`branch_id`),
  KEY `manager_id` (`manager_id`),
  CONSTRAINT `department_ibfk_1` FOREIGN KEY (`branch_id`) REFERENCES `branch` (`branch_id`),
  CONSTRAINT `department_ibfk_2` FOREIGN KEY (`manager_id`) REFERENCES `employee` (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES ('6616aec2-8b5b-11ef-acee-4a6a3b2083d6','IT',NULL,'0fcfed2e-8b5b-11ef-acee-4a6a3b2083d6'),('6616d1d0-8b5b-11ef-acee-4a6a3b2083d6','HR',NULL,'0fcfed2e-8b5b-11ef-acee-4a6a3b2083d6'),('6616d2ed-8b5b-11ef-acee-4a6a3b2083d6','Marketing',NULL,'0fcfed2e-8b5b-11ef-acee-4a6a3b2083d6'),('6616d3f2-8b5b-11ef-acee-4a6a3b2083d6','Finance',NULL,'0fcfed2e-8b5b-11ef-acee-4a6a3b2083d6'),('6616d4ac-8b5b-11ef-acee-4a6a3b2083d6','Production',NULL,'0fcfed2e-8b5b-11ef-acee-4a6a3b2083d6'),('66176a58-8b5b-11ef-acee-4a6a3b2083d6','Supply Chain',NULL,'0fcfed2e-8b5b-11ef-acee-4a6a3b2083d6'),('66176de2-8b5b-11ef-acee-4a6a3b2083d6','Merchandising',NULL,'0fcfed2e-8b5b-11ef-acee-4a6a3b2083d6'),('66176ecb-8b5b-11ef-acee-4a6a3b2083d6','Maintenance',NULL,'0fcfed2e-8b5b-11ef-acee-4a6a3b2083d6'),('66176fcd-8b5b-11ef-acee-4a6a3b2083d6','Warehouse',NULL,'0fcfed2e-8b5b-11ef-acee-4a6a3b2083d6');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dependent`
--

DROP TABLE IF EXISTS `dependent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dependent` (
  `employee_id` char(36) NOT NULL,
  `name` varchar(50) NOT NULL,
  `relationship` varchar(30) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`employee_id`,`name`),
  CONSTRAINT `dependent_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dependent`
--

LOCK TABLES `dependent` WRITE;
/*!40000 ALTER TABLE `dependent` DISABLE KEYS */;
INSERT INTO `dependent` VALUES ('04649a5f-96e6-11ef-acee-4a6a3b2083d6','Dewmina Sadaruwan','Son','2012-10-30','male',NULL),('086e0492-9527-11ef-acee-4a6a3b2083d6','sapumal','son','2017-02-15','male','20122588'),('1ea16ae8-96b1-11ef-acee-4a6a3b2083d6','Chamathsara Navodi','Daughter','2020-10-25','female',NULL),('2fa3df88-96d7-11ef-acee-4a6a3b2083d6','Asiri Rathnayaka','Daughter','2022-09-17','female',NULL),('326fb214-96bd-11ef-acee-4a6a3b2083d6','dep_name','Dep_relation','2005-05-10','male','07896542345'),('45fa21d5-96d3-11ef-acee-4a6a3b2083d6','akindu','son','1989-01-31','male','1254874512054'),('4c6e8cf7-96e6-11ef-acee-4a6a3b2083d6','akalanka','Brother','2005-12-27','male','0147854125'),('910399bf-9488-11ef-acee-4a6a3b2083d6','amila','brother','2024-10-15','male','0704455666'),('e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','kumara','son','2020-02-27','male ',''),('e464fbf7-96e5-11ef-acee-4a6a3b2083d6','malaka','son','2021-02-03','male',NULL),('ea0905f7-96d3-11ef-acee-4a6a3b2083d6','hansaja','son','2022-02-02','male',NULL),('f96540df-9699-11ef-acee-4a6a3b2083d6','Semini Raleesa','Daughter','2016-10-12','female','-');
/*!40000 ALTER TABLE `dependent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emergency_contact`
--

DROP TABLE IF EXISTS `emergency_contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emergency_contact` (
  `contact_id` char(36) NOT NULL DEFAULT (uuid()),
  `employee_id` char(36) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `relationship` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`contact_id`),
  KEY `emergency_contact_ibfk_1` (`employee_id`),
  CONSTRAINT `emergency_contact_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emergency_contact`
--

LOCK TABLES `emergency_contact` WRITE;
/*!40000 ALTER TABLE `emergency_contact` DISABLE KEYS */;
INSERT INTO `emergency_contact` VALUES ('0464d991-96e6-11ef-acee-4a6a3b2083d6','04649a5f-96e6-11ef-acee-4a6a3b2083d6','Rusiru Sadathana','0912234568','Husband'),('078b5a5a-96e5-11ef-acee-4a6a3b2083d6','078ade06-96e5-11ef-acee-4a6a3b2083d6','Harini Amarasooriya','0742376892','Sister'),('0f28b87f-968e-11ef-acee-4a6a3b2083d6','e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','amara','112336554778','father'),('1ea1d497-96b1-11ef-acee-4a6a3b2083d6','1ea16ae8-96b1-11ef-acee-4a6a3b2083d6','SuniL Senarath','0715355175','Husband'),('2b047e26-96ae-11ef-acee-4a6a3b2083d6','2b031440-96ae-11ef-acee-4a6a3b2083d6','Kumari Fernando','0783416178','Mother'),('2c0b4e32-96e7-11ef-acee-4a6a3b2083d6','2c0ae69f-96e7-11ef-acee-4a6a3b2083d6','Anura Perera','0714567239','Father'),('2fa44d27-96d7-11ef-acee-4a6a3b2083d6','2fa3df88-96d7-11ef-acee-4a6a3b2083d6','Harini Amarasooriya','0782327896','Wife'),('45fab9e4-96d3-11ef-acee-4a6a3b2083d6','45fa21d5-96d3-11ef-acee-4a6a3b2083d6','Appuhami','4845154','Husband'),('4c6ebed8-96e6-11ef-acee-4a6a3b2083d6','4c6e8cf7-96e6-11ef-acee-4a6a3b2083d6','kumara','075698562','Father'),('4f890851-96a6-11ef-acee-4a6a3b2083d6','4f8816aa-96a6-11ef-acee-4a6a3b2083d6','Sunil Yapa','0723478190','Father'),('5ab5eecb-96bd-11ef-acee-4a6a3b2083d6','326fb214-96bd-11ef-acee-4a6a3b2083d6','Iresha','0778426277','Mother'),('6652953a-96a2-11ef-acee-4a6a3b2083d6','665107d0-96a2-11ef-acee-4a6a3b2083d6','Dilrukshi Kumudini','0717505808','Mother'),('6ed0f6b8-96a4-11ef-acee-4a6a3b2083d6','6ed0b90c-96a4-11ef-acee-4a6a3b2083d6','Rashmika','0787057255','Brother'),('791b912e-96d6-11ef-acee-4a6a3b2083d6','79167dbd-96d6-11ef-acee-4a6a3b2083d6','Sadaru Wijesiri','0705629780','Brother'),('8ac84109-96ca-11ef-acee-4a6a3b2083d6','086e0492-9527-11ef-acee-4a6a3b2083d6','sumathipala','0763084616','grandFather'),('8e1c179d-963a-11ef-acee-4a6a3b2083d6','bd399922-95ee-11ef-acee-4a6a3b2083d6','em-ravi','077777745','father'),('91066160-9488-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','Jeewan','0714564521','0714564520'),('a54f3967-952c-11ef-acee-4a6a3b2083d6','a54f1c6e-952c-11ef-acee-4a6a3b2083d6','sumathipala','0763045689','grandFather'),('c0aacb23-96d2-11ef-acee-4a6a3b2083d6','c0aa0d0a-96d2-11ef-acee-4a6a3b2083d6','susanthika','48745487451','mother'),('c380e4f7-96a7-11ef-acee-4a6a3b2083d6','c3808039-96a7-11ef-acee-4a6a3b2083d6','Pasindi Miyurangi','0782020896','Wife'),('e4652b01-96e5-11ef-acee-4a6a3b2083d6','e464fbf7-96e5-11ef-acee-4a6a3b2083d6','kumari','48155485120','Wife'),('ea096612-96d3-11ef-acee-4a6a3b2083d6','ea0905f7-96d3-11ef-acee-4a6a3b2083d6','gunarathne','25484514','father'),('f9664b90-9699-11ef-acee-4a6a3b2083d6','f96540df-9699-11ef-acee-4a6a3b2083d6','Nisan Minsara','0705369135','Husband');
/*!40000 ALTER TABLE `emergency_contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `employee_id` char(36) NOT NULL DEFAULT (uuid()),
  `NIC` varchar(20) DEFAULT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `date_of_birth` date NOT NULL,
  `marital_state` varchar(10) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `address` varchar(250) DEFAULT NULL,
  `job_title_id` char(36) DEFAULT NULL,
  `pay_grade_id` char(36) DEFAULT NULL,
  `employment_state_id` char(36) DEFAULT NULL,
  `supervisor_id` char(36) DEFAULT NULL,
  `dept_id` char(36) DEFAULT NULL,
  `hired_date` date DEFAULT NULL,
  `termination_date` date DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  UNIQUE KEY `NIC` (`NIC`),
  UNIQUE KEY `email` (`email`),
  KEY `supervisor_id` (`supervisor_id`),
  KEY `pay_grade_id` (`pay_grade_id`),
  KEY `dept_id` (`dept_id`),
  KEY `job_title_id` (`job_title_id`),
  KEY `employment_state_id` (`employment_state_id`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`supervisor_id`) REFERENCES `employee` (`employee_id`),
  CONSTRAINT `employee_ibfk_2` FOREIGN KEY (`pay_grade_id`) REFERENCES `pay_grade` (`pay_grade_id`),
  CONSTRAINT `employee_ibfk_3` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`),
  CONSTRAINT `employee_ibfk_4` FOREIGN KEY (`job_title_id`) REFERENCES `job_title` (`job_title_id`),
  CONSTRAINT `employee_ibfk_5` FOREIGN KEY (`employment_state_id`) REFERENCES `employment_state` (`employment_state_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES ('04649a5f-96e6-11ef-acee-4a6a3b2083d6','200145238967','Chamudi','Ransika','2001-11-20','Married','other','12/D,Karapitiya,Galle','2d787e1f-8afa-11ef-acee-4a6a3b2083d6','2d588b48-8afa-11ef-acee-4a6a3b2083d6','2d6cc7b9-8afa-11ef-acee-4a6a3b2083d6','1915d681-967d-11ef-acee-4a6a3b2083d6','66176de2-8b5b-11ef-acee-4a6a3b2083d6','2024-02-13',NULL,'ransikagh@gmail.com'),('078ade06-96e5-11ef-acee-4a6a3b2083d6','200267341288','Semini','Dinuradi','2002-03-20','Single','female','12/D,President Road,Matara','2d78791e-8afa-11ef-acee-4a6a3b2083d6','2d588f69-8afa-11ef-acee-4a6a3b2083d6','2d6cc6c7-8afa-11ef-acee-4a6a3b2083d6','6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','6616d1d0-8b5b-11ef-acee-4a6a3b2083d6','2023-01-03',NULL,'seminiiwe@gmail.com'),('086e0492-9527-11ef-acee-4a6a3b2083d6','12345689V','Rashmika','naveen','2002-11-28','Married','male','NO-38,keeriyagolla,haliela','2d788143-8afa-11ef-acee-4a6a3b2083d6','2d588b48-8afa-11ef-acee-4a6a3b2083d6','2d6cc612-8afa-11ef-acee-4a6a3b2083d6','6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','66176a58-8b5b-11ef-acee-4a6a3b2083d6','2022-02-16',NULL,'amaragune@gmail.com'),('1915d681-967d-11ef-acee-4a6a3b2083d6','2000547821','Saman','Kumara','2024-10-17','Single','male','No 1/10,School Junction,Dombawela,Mahwela','2d787c99-8afa-11ef-acee-4a6a3b2083d6','2d58a71c-8afa-11ef-acee-4a6a3b2083d6','2d6cc6c7-8afa-11ef-acee-4a6a3b2083d6','e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','6616d4ac-8b5b-11ef-acee-4a6a3b2083d6','2024-10-29',NULL,'SamanKumara@gmail.com'),('1ea16ae8-96b1-11ef-acee-4a6a3b2083d6','200156453899','Dilrukshi','Kumudini','2001-09-07','Married','female','137/B,Karambakatiya,Beliatta','2d787bd4-8afa-11ef-acee-4a6a3b2083d6','2d58a76b-8afa-11ef-acee-4a6a3b2083d6','2d6cc6c7-8afa-11ef-acee-4a6a3b2083d6','1915d681-967d-11ef-acee-4a6a3b2083d6','6616d2ed-8b5b-11ef-acee-4a6a3b2083d6','2023-09-01',NULL,'dilrukshiranasingha420@gmail.com'),('2b031440-96ae-11ef-acee-4a6a3b2083d6','200245241788','Hirun ','Chaminda','2002-09-09','Single','male','12/21,Karapitiya,Galle','2d787c99-8afa-11ef-acee-4a6a3b2083d6','2d58a76b-8afa-11ef-acee-4a6a3b2083d6','2d6cc6c7-8afa-11ef-acee-4a6a3b2083d6','6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','6616d3f2-8b5b-11ef-acee-4a6a3b2083d6','2023-10-10',NULL,'hirun24@gmail.com'),('2c0ae69f-96e7-11ef-acee-4a6a3b2083d6','200078785656','Dohara ','Prabhani','2000-04-19','Single','female','19/D,Kalegana,Galle','2d7881f5-8afa-11ef-acee-4a6a3b2083d6','2d58a611-8afa-11ef-acee-4a6a3b2083d6','2d6cc612-8afa-11ef-acee-4a6a3b2083d6','e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','66176ecb-8b5b-11ef-acee-4a6a3b2083d6','2023-11-14',NULL,'prabhani@gmail.com'),('2fa3df88-96d7-11ef-acee-4a6a3b2083d6','200056381978','Sunimal','Rathnayaka','2000-08-25','Married','other','23/F,Tangalle Road,Beliatta','ac5943af-9414-11ef-acee-4a6a3b2083d6','2d588f69-8afa-11ef-acee-4a6a3b2083d6','2d6cc612-8afa-11ef-acee-4a6a3b2083d6','6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','66176de2-8b5b-11ef-acee-4a6a3b2083d6','2023-03-08',NULL,'suni@gmail.com'),('326fb214-96bd-11ef-acee-4a6a3b2083d6','200213101540','Theekshana','Wijerathne','2002-05-10','Single','male','No 1/10,School Junction,Dombawela,Mahwela','2d787dd7-8afa-11ef-acee-4a6a3b2083d6','2d58a611-8afa-11ef-acee-4a6a3b2083d6','2d6cc044-8afa-11ef-acee-4a6a3b2083d6','e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','6616aec2-8b5b-11ef-acee-4a6a3b2083d6','2024-10-03','2025-02-13','theekshanawijerathna2@gmail.com'),('45fa21d5-96d3-11ef-acee-4a6a3b2083d6','5451264141','Seelawathi','Mahagedara','1965-11-03','Widowed','female','NO-12,Horowpathana','2d787d3c-8afa-11ef-acee-4a6a3b2083d6','2d58a71c-8afa-11ef-acee-4a6a3b2083d6','2d6cc6c7-8afa-11ef-acee-4a6a3b2083d6','6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','6616d4ac-8b5b-11ef-acee-4a6a3b2083d6','2014-02-05',NULL,'SeelawathiMahagedara125@gmail.com'),('4c6e8cf7-96e6-11ef-acee-4a6a3b2083d6','0121555555v','Uvindu','Sathsara','2002-11-14','Single','male','Wallawaya,Monaragala','2d787c99-8afa-11ef-acee-4a6a3b2083d6','2d58a71c-8afa-11ef-acee-4a6a3b2083d6','2d6cc044-8afa-11ef-acee-4a6a3b2083d6','6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','66176a58-8b5b-11ef-acee-4a6a3b2083d6','2019-01-02',NULL,'UvinduSathsara@gmail.com'),('4f8816aa-96a6-11ef-acee-4a6a3b2083d6','200067346576','Diniru ','Kumara','2000-12-12','Single','male','137/B,Walasmulla,Beliatta','7b9f3ff2-9412-11ef-acee-4a6a3b2083d6','2d588f69-8afa-11ef-acee-4a6a3b2083d6','2d6cc7b9-8afa-11ef-acee-4a6a3b2083d6','6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','66176ecb-8b5b-11ef-acee-4a6a3b2083d6','2024-01-10',NULL,'diniru2000@gmail.com'),('59962c85-96e5-11ef-acee-4a6a3b2083d6','463133521465134','Vishwa','Sankalpa','1997-02-05','Single','male','horowpathana,wiyalipedesa','2d788285-8afa-11ef-acee-4a6a3b2083d6','2d58a611-8afa-11ef-acee-4a6a3b2083d6','2d6cc7b9-8afa-11ef-acee-4a6a3b2083d6','e1d5b9a6-8b5b-11ef-acee-4a6a3b2083d6','6616d2ed-8b5b-11ef-acee-4a6a3b2083d6','2021-02-04',NULL,'VishwaSankalpa@gmail.com'),('665107d0-96a2-11ef-acee-4a6a3b2083d6','200279903422','Navodi','Yapa','2002-12-12','Single','female','32/B,Hirimbura,Galle','2d787e1f-8afa-11ef-acee-4a6a3b2083d6','2d58a611-8afa-11ef-acee-4a6a3b2083d6','2d6cc6c7-8afa-11ef-acee-4a6a3b2083d6','1915d681-967d-11ef-acee-4a6a3b2083d6','6616d3f2-8b5b-11ef-acee-4a6a3b2083d6','2023-11-25',NULL,'navodisy@gmail.com'),('6bf363e8-8b5d-11ef-acee-4a6a3b2083d6','941234567V','Kamal','Perera','1985-10-30','Married','male','No. 10, Galle Road, Colombo','2d788143-8afa-11ef-acee-4a6a3b2083d6','2d588f69-8afa-11ef-acee-4a6a3b2083d6','2d6cc6c7-8afa-11ef-acee-4a6a3b2083d6','e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','66176a58-8b5b-11ef-acee-4a6a3b2083d6','2010-08-01',NULL,'kamal.perera@example.lk'),('6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','921345678V','Nimali','Silva','1990-03-15','Single','female','No. 42, High Level Road, Kandy','2d787e1f-8afa-11ef-acee-4a6a3b2083d6','2d588b48-8afa-11ef-acee-4a6a3b2083d6','2d6cc6c7-8afa-11ef-acee-4a6a3b2083d6','e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','6616d4ac-8b5b-11ef-acee-4a6a3b2083d6','2015-02-20',NULL,'nimali.silva@example.lk'),('6bf389a5-8b5d-11ef-acee-4a6a3b2083d6','911456789V','Sunil','Fernando','1987-11-21','Married','male','No. 78, Lake Road, Negombo','2d787e1f-8afa-11ef-acee-4a6a3b2083d6','2d588b48-8afa-11ef-acee-4a6a3b2083d6','2d6cc6c7-8afa-11ef-acee-4a6a3b2083d6','e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','6616d4ac-8b5b-11ef-acee-4a6a3b2083d6','2012-06-12',NULL,'sunil.fernando@example.lk'),('6bf38b67-8b5d-11ef-acee-4a6a3b2083d6','951234567V','Amarawathi','Rathnayake','1993-07-23','Married','female','No. 20, Temple Road, Galle','2d7882f3-8afa-11ef-acee-4a6a3b2083d6','2d588f69-8afa-11ef-acee-4a6a3b2083d6','2d6cc71a-8afa-11ef-acee-4a6a3b2083d6','e1d5b9a6-8b5b-11ef-acee-4a6a3b2083d6','66176fcd-8b5b-11ef-acee-4a6a3b2083d6','2017-10-10',NULL,'amara.rathnayake@example.lk'),('6d32b3ef-96a6-11ef-acee-4a6a3b2083d6','01123456786v','Anura','Kumara','1989-01-25','Married','male','Colomo 4,Colombo','2d787179-8afa-11ef-acee-4a6a3b2083d6','2d58a76b-8afa-11ef-acee-4a6a3b2083d6','2d6cc6c7-8afa-11ef-acee-4a6a3b2083d6','1915d681-967d-11ef-acee-4a6a3b2083d6','6616d1d0-8b5b-11ef-acee-4a6a3b2083d6','2015-02-04',NULL,'AnuraKumara@gmail.com'),('6ed0b90c-96a4-11ef-acee-4a6a3b2083d6','21345689V','Hasika','Ishani','1991-01-09','Single','female','NO-38,keeriyagolla,haliela','7b9f3ff2-9412-11ef-acee-4a6a3b2083d6','2d58a611-8afa-11ef-acee-4a6a3b2083d6','2d6cc7b9-8afa-11ef-acee-4a6a3b2083d6','e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','66176de2-8b5b-11ef-acee-4a6a3b2083d6','2024-02-07',NULL,'HasikaIshani@gmail.com'),('79167dbd-96d6-11ef-acee-4a6a3b2083d6','199967453611','Ranil','Wijewardhana','1999-11-10','Divorced','male','23/65,Baddegama Road,Hirimbura,Galle','2d7882f3-8afa-11ef-acee-4a6a3b2083d6','2d58a71c-8afa-11ef-acee-4a6a3b2083d6','2d6cc7b9-8afa-11ef-acee-4a6a3b2083d6','e1d5b9a6-8b5b-11ef-acee-4a6a3b2083d6','66176fcd-8b5b-11ef-acee-4a6a3b2083d6','2023-08-08',NULL,'ranild@gmail.com'),('812fd419-96e7-11ef-acee-4a6a3b2083d6','200214901816','Harsha','Dankotuwa','2024-10-10','Single','male','No 1/10,School Junction,Dombawela,Mahwela','2d787d3c-8afa-11ef-acee-4a6a3b2083d6','2d58a611-8afa-11ef-acee-4a6a3b2083d6','2d6cc044-8afa-11ef-acee-4a6a3b2083d6','e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','66176fcd-8b5b-11ef-acee-4a6a3b2083d6','2024-10-16','2024-10-25','hdankotuwa@gmail.com'),('828f1a7d-96c3-11ef-acee-4a6a3b2083d6','112233445566','Yasintha','Lakshan','2006-11-28','Single','male','NO-38,keeriyagolla,haliela','ac5943af-9414-11ef-acee-4a6a3b2083d6','2d588f69-8afa-11ef-acee-4a6a3b2083d6','2d6cc3ef-8afa-11ef-acee-4a6a3b2083d6','1915d681-967d-11ef-acee-4a6a3b2083d6','66176ecb-8b5b-11ef-acee-4a6a3b2083d6','2018-06-13',NULL,'YasinthaLakshan@gmail.com'),('910399bf-9488-11ef-acee-4a6a3b2083d6','200234701350','Dineth','Danurdha','2002-12-12','Single','male','Ihala Gedara Waththa,Kapugama,Devinuwara','2d787dd7-8afa-11ef-acee-4a6a3b2083d6','2d58a611-8afa-11ef-acee-4a6a3b2083d6','2d6cc6c7-8afa-11ef-acee-4a6a3b2083d6','e1d5b9a6-8b5b-11ef-acee-4a6a3b2083d6','6616aec2-8b5b-11ef-acee-4a6a3b2083d6','2024-10-22','2025-01-02','dd@email.com'),('a54f1c6e-952c-11ef-acee-4a6a3b2083d6','200233301166','rashmika','naveen Tharindu','2002-11-28','Single','male','NO-38,keeriyagolla,haliela','2d787dd7-8afa-11ef-acee-4a6a3b2083d6','2d58a611-8afa-11ef-acee-4a6a3b2083d6','2d6cc6c7-8afa-11ef-acee-4a6a3b2083d6','6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','6616d1d0-8b5b-11ef-acee-4a6a3b2083d6','2023-02-01',NULL,'rashmikanaveen@gmail.com'),('bd399922-95ee-11ef-acee-4a6a3b2083d6','200200200200','Ravin','W','2002-11-20','Single','male','asdsd','2d788143-8afa-11ef-acee-4a6a3b2083d6','2d588b48-8afa-11ef-acee-4a6a3b2083d6','2d6cc044-8afa-11ef-acee-4a6a3b2083d6','6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','6616d4ac-8b5b-11ef-acee-4a6a3b2083d6','2024-10-30',NULL,'raviw@example.lk'),('c0aa0d0a-96d2-11ef-acee-4a6a3b2083d6','213544354','Harsha','Lakshan','1990-02-01','Single','male','pansalapara,Dikkapitiya,Walimada','2d787bd4-8afa-11ef-acee-4a6a3b2083d6','2d588f69-8afa-11ef-acee-4a6a3b2083d6','2d6cc612-8afa-11ef-acee-4a6a3b2083d6','e1d5b9a6-8b5b-11ef-acee-4a6a3b2083d6','66176fcd-8b5b-11ef-acee-4a6a3b2083d6','2024-10-17',NULL,'HarshaLakshan@gmail.com'),('c3808039-96a7-11ef-acee-4a6a3b2083d6','199967384499','Gihan ','Samaranayaka','1999-02-28','Married','male','22/20,Temple Road,Beliatta','2d7882f3-8afa-11ef-acee-4a6a3b2083d6','2d58a611-8afa-11ef-acee-4a6a3b2083d6','2d6cc612-8afa-11ef-acee-4a6a3b2083d6','e1d5b9a6-8b5b-11ef-acee-4a6a3b2083d6','66176fcd-8b5b-11ef-acee-4a6a3b2083d6','2023-08-08',NULL,'gihan22@gmail.com'),('d9015df1-95ea-11ef-acee-4a6a3b2083d6','220220220','Ravindu','W','2002-11-20','Single','male','address, address lane, address city','7b9f3ff2-9412-11ef-acee-4a6a3b2083d6','2d588b48-8afa-11ef-acee-4a6a3b2083d6','2d6cc044-8afa-11ef-acee-4a6a3b2083d6','6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','6616aec2-8b5b-11ef-acee-4a6a3b2083d6','2024-10-29',NULL,'ravindu@example.lk'),('e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','1234567894V','Raju ','Kamalanath','1991-12-31','Married','male','No. 90, Mahaweli Road, Kaluthara','2d787179-8afa-11ef-acee-4a6a3b2083d6','2d58a71c-8afa-11ef-acee-4a6a3b2083d6','2d6cc670-8afa-11ef-acee-4a6a3b2083d6','e1d5b9a6-8b5b-11ef-acee-4a6a3b2083d6','6616d1d0-8b5b-11ef-acee-4a6a3b2083d6','2008-05-25',NULL,'raju.k@example.lk'),('e1d5b9a6-8b5b-11ef-acee-4a6a3b2083d6','941234557V','Roy','Perera','1985-05-01','Married','male','No. 15, Galle Road, Colombo','2d787d3c-8afa-11ef-acee-4a6a3b2083d6','2d58a76b-8afa-11ef-acee-4a6a3b2083d6','2d6cc6c7-8afa-11ef-acee-4a6a3b2083d6','6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','6616d4ac-8b5b-11ef-acee-4a6a3b2083d6','2008-08-01',NULL,'roy.perera@example.lk'),('e464fbf7-96e5-11ef-acee-4a6a3b2083d6','84844466','Kavindu','Bandara','1996-06-05','Divorced','male','Galenbidunuwawa','2d787c99-8afa-11ef-acee-4a6a3b2083d6','2d588f69-8afa-11ef-acee-4a6a3b2083d6','2d6cc6c7-8afa-11ef-acee-4a6a3b2083d6','6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','6616d2ed-8b5b-11ef-acee-4a6a3b2083d6','2019-01-30',NULL,'VishwaBandara@gmail.com'),('ea0905f7-96d3-11ef-acee-4a6a3b2083d6','6597845169','Nipun','Sachintha','2003-01-14','Married','male','Hali-ela,badulla','2d787dd7-8afa-11ef-acee-4a6a3b2083d6','2d588f69-8afa-11ef-acee-4a6a3b2083d6','2d6cc6c7-8afa-11ef-acee-4a6a3b2083d6','e1d5b9a6-8b5b-11ef-acee-4a6a3b2083d6','6616aec2-8b5b-11ef-acee-4a6a3b2083d6','2023-07-21',NULL,'NipunSachintha@gmail.com'),('f96540df-9699-11ef-acee-4a6a3b2083d6','200156784522','Hashini','Seanarath','2001-11-05','Married','female','25/20,Baddegama,Galle','2d7881f5-8afa-11ef-acee-4a6a3b2083d6','2d588b48-8afa-11ef-acee-4a6a3b2083d6','2d6cc6c7-8afa-11ef-acee-4a6a3b2083d6','6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','6616d3f2-8b5b-11ef-acee-4a6a3b2083d6','2024-02-07',NULL,'hashini@jupiter.com');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`doadmin`@`%`*/ /*!50003 TRIGGER `set_employee_leave_balance_records` AFTER INSERT ON `employee` FOR EACH ROW BEGIN
    DECLARE leave_year YEAR;
    SET leave_year = YEAR(CURDATE());

    -- Insert leave balance records for each leave type according to the employee's pay grade
    INSERT INTO leave_balance (employee_id, leave_type_id, year, balance)
    SELECT NEW.employee_id, lt.leave_type_id, leave_year, mlc.max_leave_count
    FROM leave_type lt
    JOIN max_leave_count mlc ON lt.leave_type_id = mlc.leave_type_id
    WHERE mlc.pay_grade_id = NEW.pay_grade_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`doadmin`@`%`*/ /*!50003 TRIGGER `notification_on_employee_information_update` AFTER UPDATE ON `employee` FOR EACH ROW BEGIN
    -- Get employee's user_id
    DECLARE employee_user_id CHAR(36);
    SET employee_user_id = (SELECT user_id FROM user WHERE employee_id = NEW.employee_id);
    SET time_zone = '+05:30';  -- UTC
    IF employee_user_id IS NOT NULL THEN
		-- Call create_notification if the admin / HR Manager updated the details
		CALL create_notification(
			employee_user_id,              -- user_id for the employee
			'Your profile details have been updated by the HR Manager.',  -- Notification message
			'unread',                      -- Status of the notification
			'alert',              -- Notification type
			current_timestamp()                          -- Current date and time
		);
	END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `employee_custom_attribute`
--

DROP TABLE IF EXISTS `employee_custom_attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee_custom_attribute` (
  `employee_id` char(36) NOT NULL,
  `key1` char(36) DEFAULT NULL,
  `value1` varchar(100) DEFAULT NULL,
  `key2` char(36) DEFAULT NULL,
  `value2` varchar(100) DEFAULT NULL,
  `key3` char(36) DEFAULT NULL,
  `value3` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  KEY `fk_key1_custom_attribute` (`key1`),
  KEY `fk_key2_custom_attribute` (`key2`),
  KEY `fk_key3_custom_attribute` (`key3`),
  CONSTRAINT `employee_custom_attribute_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_key1_custom_attribute` FOREIGN KEY (`key1`) REFERENCES `custom_attribute` (`attribute_id`) ON DELETE SET NULL,
  CONSTRAINT `fk_key2_custom_attribute` FOREIGN KEY (`key2`) REFERENCES `custom_attribute` (`attribute_id`) ON DELETE SET NULL,
  CONSTRAINT `fk_key3_custom_attribute` FOREIGN KEY (`key3`) REFERENCES `custom_attribute` (`attribute_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_custom_attribute`
--

LOCK TABLES `employee_custom_attribute` WRITE;
/*!40000 ALTER TABLE `employee_custom_attribute` DISABLE KEYS */;
INSERT INTO `employee_custom_attribute` VALUES ('04649a5f-96e6-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','O-',NULL,NULL),('078ade06-96e5-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','AB+',NULL,NULL),('086e0492-9527-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','B+',NULL,NULL),('1915d681-967d-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','B+',NULL,NULL),('1ea16ae8-96b1-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','AB-',NULL,NULL),('2b031440-96ae-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','AB-',NULL,NULL),('2c0ae69f-96e7-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','A-',NULL,NULL),('2fa3df88-96d7-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','A+',NULL,NULL),('326fb214-96bd-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','B+',NULL,NULL),('45fa21d5-96d3-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sinhala','c4fdca11-968f-11ef-acee-4a6a3b2083d6','A',NULL,NULL),('4c6e8cf7-96e6-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sinhala','c4fdca11-968f-11ef-acee-4a6a3b2083d6','B',NULL,NULL),('4f8816aa-96a6-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','B-',NULL,NULL),('59962c85-96e5-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sinhala','c4fdca11-968f-11ef-acee-4a6a3b2083d6','A+',NULL,NULL),('665107d0-96a2-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','AB-',NULL,NULL),('6bf363e8-8b5d-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','B+',NULL,NULL),('6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','B+',NULL,NULL),('6bf389a5-8b5d-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','B+',NULL,NULL),('6bf38b67-8b5d-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','B+',NULL,NULL),('6d32b3ef-96a6-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Srilankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','O',NULL,NULL),('6ed0b90c-96a4-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sinhala','c4fdca11-968f-11ef-acee-4a6a3b2083d6','AB',NULL,NULL),('79167dbd-96d6-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','A-',NULL,NULL),('812fd419-96e7-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','B+',NULL,NULL),('828f1a7d-96c3-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','','c4fdca11-968f-11ef-acee-4a6a3b2083d6','',NULL,NULL),('910399bf-9488-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','B+',NULL,NULL),('a54f1c6e-952c-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','B+',NULL,NULL),('bd399922-95ee-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','B+',NULL,NULL),('c0aa0d0a-96d2-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sinhala','c4fdca11-968f-11ef-acee-4a6a3b2083d6','O',NULL,NULL),('c3808039-96a7-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','A+',NULL,NULL),('d9015df1-95ea-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','B+',NULL,NULL),('e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','B+',NULL,NULL),('e1d5b9a6-8b5b-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','B+',NULL,NULL),('e464fbf7-96e5-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sinhala','c4fdca11-968f-11ef-acee-4a6a3b2083d6','AB',NULL,NULL),('ea0905f7-96d3-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sinhala','c4fdca11-968f-11ef-acee-4a6a3b2083d6','O',NULL,NULL),('f96540df-9699-11ef-acee-4a6a3b2083d6','56f66670-968f-11ef-acee-4a6a3b2083d6','Sri Lankan','c4fdca11-968f-11ef-acee-4a6a3b2083d6','O+',NULL,NULL);
/*!40000 ALTER TABLE `employee_custom_attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `employee_custom_attributes_view`
--

DROP TABLE IF EXISTS `employee_custom_attributes_view`;
/*!50001 DROP VIEW IF EXISTS `employee_custom_attributes_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `employee_custom_attributes_view` AS SELECT 
 1 AS `employee_id`,
 1 AS `key1_id`,
 1 AS `key1_name`,
 1 AS `value1`,
 1 AS `key2_id`,
 1 AS `key2_name`,
 1 AS `value2`,
 1 AS `key3_id`,
 1 AS `key3_name`,
 1 AS `value3`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `employment_state`
--

DROP TABLE IF EXISTS `employment_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employment_state` (
  `employment_state_id` char(36) NOT NULL DEFAULT (uuid()),
  `employment_type` varchar(50) NOT NULL,
  `work_schedule` varchar(50) NOT NULL,
  PRIMARY KEY (`employment_state_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employment_state`
--

LOCK TABLES `employment_state` WRITE;
/*!40000 ALTER TABLE `employment_state` DISABLE KEYS */;
INSERT INTO `employment_state` VALUES ('2d6cc044-8afa-11ef-acee-4a6a3b2083d6','Intern','Full Time'),('2d6cc3ef-8afa-11ef-acee-4a6a3b2083d6','Intern','Part Time'),('2d6cc612-8afa-11ef-acee-4a6a3b2083d6','Contract','Full Time'),('2d6cc670-8afa-11ef-acee-4a6a3b2083d6','Contract','Part Time'),('2d6cc6c7-8afa-11ef-acee-4a6a3b2083d6','Permanent','Full Time'),('2d6cc71a-8afa-11ef-acee-4a6a3b2083d6','Permanent','Part Time'),('2d6cc76b-8afa-11ef-acee-4a6a3b2083d6','Freelance','Full Time'),('2d6cc7b9-8afa-11ef-acee-4a6a3b2083d6','Freelance','Part Time');
/*!40000 ALTER TABLE `employment_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `hr_managers`
--

DROP TABLE IF EXISTS `hr_managers`;
/*!50001 DROP VIEW IF EXISTS `hr_managers`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `hr_managers` AS SELECT 
 1 AS `user_id`,
 1 AS `username`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `inquiry`
--

DROP TABLE IF EXISTS `inquiry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inquiry` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `type` varchar(20) NOT NULL,
  `reply_status` binary(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inquiry`
--

LOCK TABLES `inquiry` WRITE;
/*!40000 ALTER TABLE `inquiry` DISABLE KEYS */;
INSERT INTO `inquiry` VALUES (5,'adwawdw','theekshanawijerathna2@gmail.com','awdadad','awdawdadaw','login',_binary '0'),(6,'awdawdadad','theekshanawijerathna2@gmail.com','adawd','asdawdad','login',_binary '0'),(7,'Theekshana','sonoloj949@aleitar.com','test1','test1','In Site',_binary '0');
/*!40000 ALTER TABLE `inquiry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_title`
--

DROP TABLE IF EXISTS `job_title`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_title` (
  `job_title_id` char(36) NOT NULL DEFAULT (uuid()),
  `title` varchar(30) NOT NULL,
  PRIMARY KEY (`job_title_id`),
  UNIQUE KEY `title` (`title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_title`
--

LOCK TABLES `job_title` WRITE;
/*!40000 ALTER TABLE `job_title` DISABLE KEYS */;
INSERT INTO `job_title` VALUES ('2d787cf1-8afa-11ef-acee-4a6a3b2083d6','Accountant'),('2d787179-8afa-11ef-acee-4a6a3b2083d6','CEO'),('2d787c49-8afa-11ef-acee-4a6a3b2083d6','Fashion Designer'),('2d78791e-8afa-11ef-acee-4a6a3b2083d6','HR Manager'),('2d787dd7-8afa-11ef-acee-4a6a3b2083d6','IT Manager'),('2d787bd4-8afa-11ef-acee-4a6a3b2083d6','Marketing Manager'),('2d788143-8afa-11ef-acee-4a6a3b2083d6','Packaging Assistant'),('4d5da6b3-9413-11ef-acee-4a6a3b2083d6','Pattern Maker'),('2d787d3c-8afa-11ef-acee-4a6a3b2083d6','Project Manager'),('2d7881f5-8afa-11ef-acee-4a6a3b2083d6','Quality Control Inspector'),('2d788285-8afa-11ef-acee-4a6a3b2083d6','Retail Assistant'),('2d787c99-8afa-11ef-acee-4a6a3b2083d6','Sales Manager'),('ac5943af-9414-11ef-acee-4a6a3b2083d6','Sample Coordinator'),('2d787e1f-8afa-11ef-acee-4a6a3b2083d6','Sewing Machine Operator'),('2d787d85-8afa-11ef-acee-4a6a3b2083d6','Supply Chain Manager'),('7b9f3ff2-9412-11ef-acee-4a6a3b2083d6','Technical Designer'),('9f589ca2-9413-11ef-acee-4a6a3b2083d6','Textile Designer'),('2d7882f3-8afa-11ef-acee-4a6a3b2083d6','Warehouse Worker');
/*!40000 ALTER TABLE `job_title` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leave_balance`
--

DROP TABLE IF EXISTS `leave_balance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leave_balance` (
  `employee_id` char(36) NOT NULL,
  `leave_type_id` char(36) NOT NULL,
  `year` year NOT NULL,
  `balance` int DEFAULT NULL,
  PRIMARY KEY (`employee_id`,`leave_type_id`,`year`),
  KEY `leave_type_id` (`leave_type_id`),
  CONSTRAINT `leave_balance_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE CASCADE,
  CONSTRAINT `leave_balance_ibfk_2` FOREIGN KEY (`leave_type_id`) REFERENCES `leave_type` (`leave_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leave_balance`
--

LOCK TABLES `leave_balance` WRITE;
/*!40000 ALTER TABLE `leave_balance` DISABLE KEYS */;
INSERT INTO `leave_balance` VALUES ('04649a5f-96e6-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,20),('04649a5f-96e6-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,12),('04649a5f-96e6-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,90),('04649a5f-96e6-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('078ade06-96e5-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,18),('078ade06-96e5-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,10),('078ade06-96e5-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,80),('078ade06-96e5-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('086e0492-9527-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,20),('086e0492-9527-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,12),('086e0492-9527-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,90),('086e0492-9527-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('1915d681-967d-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,12),('1915d681-967d-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,6),('1915d681-967d-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,70),('1915d681-967d-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('1ea16ae8-96b1-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,10),('1ea16ae8-96b1-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,5),('1ea16ae8-96b1-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,60),('1ea16ae8-96b1-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('2b031440-96ae-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,10),('2b031440-96ae-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,5),('2b031440-96ae-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,60),('2b031440-96ae-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('2c0ae69f-96e7-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,15),('2c0ae69f-96e7-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,8),('2c0ae69f-96e7-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,75),('2c0ae69f-96e7-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('2fa3df88-96d7-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,18),('2fa3df88-96d7-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,10),('2fa3df88-96d7-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,80),('2fa3df88-96d7-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('326fb214-96bd-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,15),('326fb214-96bd-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,8),('326fb214-96bd-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,75),('326fb214-96bd-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('45fa21d5-96d3-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,12),('45fa21d5-96d3-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,6),('45fa21d5-96d3-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,70),('45fa21d5-96d3-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('4c6e8cf7-96e6-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,12),('4c6e8cf7-96e6-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,6),('4c6e8cf7-96e6-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,70),('4c6e8cf7-96e6-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('4f8816aa-96a6-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,18),('4f8816aa-96a6-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,10),('4f8816aa-96a6-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,80),('4f8816aa-96a6-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('59962c85-96e5-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,15),('59962c85-96e5-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,8),('59962c85-96e5-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,75),('59962c85-96e5-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('665107d0-96a2-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,15),('665107d0-96a2-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,8),('665107d0-96a2-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,75),('665107d0-96a2-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('6bf363e8-8b5d-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,18),('6bf363e8-8b5d-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,10),('6bf363e8-8b5d-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,80),('6bf363e8-8b5d-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,20),('6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,12),('6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,90),('6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('6bf389a5-8b5d-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,20),('6bf389a5-8b5d-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,12),('6bf389a5-8b5d-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,90),('6bf389a5-8b5d-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('6bf38b67-8b5d-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,18),('6bf38b67-8b5d-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,10),('6bf38b67-8b5d-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,80),('6bf38b67-8b5d-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('6d32b3ef-96a6-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,18),('6d32b3ef-96a6-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,10),('6d32b3ef-96a6-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,80),('6d32b3ef-96a6-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('79167dbd-96d6-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,12),('79167dbd-96d6-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,6),('79167dbd-96d6-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,70),('79167dbd-96d6-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('812fd419-96e7-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,15),('812fd419-96e7-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,8),('812fd419-96e7-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,75),('812fd419-96e7-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('828f1a7d-96c3-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,18),('828f1a7d-96c3-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,10),('828f1a7d-96c3-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,80),('828f1a7d-96c3-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('910399bf-9488-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,2),('910399bf-9488-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,6),('910399bf-9488-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,75),('910399bf-9488-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,49),('a54f1c6e-952c-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,15),('a54f1c6e-952c-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,8),('a54f1c6e-952c-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,75),('a54f1c6e-952c-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('bd399922-95ee-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,18),('bd399922-95ee-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,9),('bd399922-95ee-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,90),('bd399922-95ee-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,47),('c0aa0d0a-96d2-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,18),('c0aa0d0a-96d2-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,10),('c0aa0d0a-96d2-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,80),('c0aa0d0a-96d2-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('c3808039-96a7-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,15),('c3808039-96a7-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,8),('c3808039-96a7-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,75),('c3808039-96a7-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('d9015df1-95ea-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,20),('d9015df1-95ea-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,12),('d9015df1-95ea-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,90),('d9015df1-95ea-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,12),('e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,6),('e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,70),('e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('e1d5b9a6-8b5b-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,10),('e1d5b9a6-8b5b-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,5),('e1d5b9a6-8b5b-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,60),('e1d5b9a6-8b5b-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('e464fbf7-96e5-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,18),('e464fbf7-96e5-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,10),('e464fbf7-96e5-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,80),('e464fbf7-96e5-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50),('ea0905f7-96d3-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',2024,18),('ea0905f7-96d3-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',2024,10),('ea0905f7-96d3-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',2024,80),('ea0905f7-96d3-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',2024,50);
/*!40000 ALTER TABLE `leave_balance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leave_record`
--

DROP TABLE IF EXISTS `leave_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leave_record` (
  `leave_record_id` char(36) NOT NULL DEFAULT (uuid()),
  `employee_id` char(36) DEFAULT NULL,
  `leave_type_id` char(36) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `status` varchar(20) DEFAULT 'Pending',
  `applied_date` date DEFAULT NULL,
  `approved_date` date DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`leave_record_id`),
  KEY `employee_id` (`employee_id`),
  KEY `leave_type_id` (`leave_type_id`),
  CONSTRAINT `leave_record_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`),
  CONSTRAINT `leave_record_ibfk_2` FOREIGN KEY (`leave_type_id`) REFERENCES `leave_type` (`leave_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leave_record`
--

LOCK TABLES `leave_record` WRITE;
/*!40000 ALTER TABLE `leave_record` DISABLE KEYS */;
INSERT INTO `leave_record` VALUES ('0570de99-9385-11ef-acee-4a6a3b2083d6','6bf389a5-8b5d-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-28','2024-12-28','Approved','2024-10-26','2024-10-28',NULL),('07300c7a-96b9-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-11-01','2024-11-30','Rejected','2024-10-30',NULL,'Leave country'),('09fbef69-962d-11ef-acee-4a6a3b2083d6','bd399922-95ee-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-11-05','2024-11-06','Approved','2024-10-29','2024-10-29',NULL),('0a3b6e4c-9428-11ef-acee-4a6a3b2083d6','e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-28','2024-11-05','Rejected','2024-10-27',NULL,NULL),('0eb1862c-96be-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-31','2024-11-27','Rejected','2024-10-30',NULL,'123'),('230e8f3d-9660-11ef-acee-4a6a3b2083d6','6bf363e8-8b5d-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-30','2024-10-31','Pending','2024-10-30',NULL,NULL),('27dac725-96be-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-01','2024-10-18','Rejected','2024-10-30',NULL,'456\n'),('2a926df3-96b9-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-11-03','2024-12-09','Rejected','2024-10-30',NULL,'Abroad education tour'),('2f2271c5-96c0-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-30','2024-10-31','Approved','2024-10-30','2024-10-30','trip'),('3369e226-953f-11ef-acee-4a6a3b2083d6','6bf363e8-8b5d-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6','2024-10-28','2024-10-29','Approved','2024-10-28','2024-10-28',NULL),('49da5d55-9304-11ef-acee-4a6a3b2083d6','e1d5b9a6-8b5b-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6','2024-11-01','2024-11-05','Pending','2024-10-25',NULL,NULL),('4a8b0212-9553-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-28','2024-10-29','Approved','2024-10-28','2024-10-29',NULL),('4c306432-942b-11ef-acee-4a6a3b2083d6','e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6','2024-10-15','2024-10-22','Pending','2024-10-27',NULL,NULL),('575204bc-91ba-11ef-acee-4a6a3b2083d6','6bf38b67-8b5d-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6','2024-10-24','2024-10-30','Approved','2024-10-23','2024-10-24',NULL),('613d3fb8-96bd-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-30','2024-10-31','Rejected','2024-10-30',NULL,'asd'),('686e1088-969b-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6','2024-10-30','2024-10-31','Approved','2024-10-30','2024-10-30',NULL),('6f6ccd36-969e-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-30','2024-10-31','Approved','2024-10-30','2024-10-30','I have a function to go'),('7446e5c2-9638-11ef-acee-4a6a3b2083d6','bd399922-95ee-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6','2024-10-31','2024-10-31','Approved','2024-10-29','2024-10-29',NULL),('77755bde-96b6-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-31','2024-11-01','Rejected','2024-10-30',NULL,'Sick'),('77cd1914-96b9-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-11-01','2024-12-24','Rejected','2024-10-30',NULL,'Sick leave'),('7a8e68d4-96c0-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-30','2024-11-21','Rejected','2024-10-30',NULL,'trip1'),('839072c2-96be-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-31','2026-06-10','Rejected','2024-10-30',NULL,'8888'),('8cb6f1c4-955e-11ef-acee-4a6a3b2083d6','6bf363e8-8b5d-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-30','2024-11-02','Approved','2024-10-28','2024-10-28',NULL),('925f76fb-96ce-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6','2024-10-30','2024-10-31','Approved','2024-10-30','2024-10-30','Illa\n'),('92a47fa5-96ce-11ef-acee-4a6a3b2083d6','6bf389a5-8b5d-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-31','2024-10-31','Pending','2024-10-30',NULL,'party'),('a24c0d2d-961d-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6','2024-10-17','2024-10-18','Rejected','2024-10-29',NULL,NULL),('a743bce3-95ef-11ef-acee-4a6a3b2083d6','bd399922-95ee-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6','2024-10-30','2024-10-31','Approved','2024-10-29','2024-10-29',NULL),('ab178c32-908a-11ef-acee-4a6a3b2083d6','6bf363e8-8b5d-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-25','2024-10-30','Approved','2024-09-25','2024-09-30',NULL),('acb0f302-93d0-11ef-acee-4a6a3b2083d6','6bf363e8-8b5d-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6','2024-10-16','2024-10-25','Approved','2024-10-26','2024-10-28',NULL),('ae6bb618-9385-11ef-acee-4a6a3b2083d6','6bf363e8-8b5d-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-28','2024-10-29','Rejected','2024-10-26',NULL,NULL),('b2d86201-90a6-11ef-acee-4a6a3b2083d6','6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6','2024-10-01','2024-10-05','Pending','2024-09-25','2024-09-30',NULL),('b5d726b0-96bd-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-11-01','2024-12-18','Rejected','2024-10-30',NULL,'wwe'),('b66d0b27-930e-11ef-acee-4a6a3b2083d6','6bf363e8-8b5d-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6','2024-10-29','2024-11-01','Rejected','2024-10-25',NULL,NULL),('b84a2fa5-942c-11ef-acee-4a6a3b2083d6','6bf389a5-8b5d-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-28','2024-10-29','Rejected','2024-10-27',NULL,NULL),('bbf29548-9384-11ef-acee-4a6a3b2083d6','6bf389a5-8b5d-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-27','2024-11-03','Approved','2024-10-26','2024-10-28',NULL),('be20779b-962a-11ef-acee-4a6a3b2083d6','bd399922-95ee-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6','2024-11-01','2024-11-03','Approved','2024-10-29','2024-10-29',NULL),('c24a57a3-96cb-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-09-01','2024-09-02','Approved','2024-10-30','2024-10-30','SIck8'),('c7ecff95-90a6-11ef-acee-4a6a3b2083d6','6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6','2024-10-01','2024-10-05','Approved','2024-09-25','2024-09-30',NULL),('d522adda-96b8-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-11-03','2024-11-04','Rejected','2024-10-30',NULL,'Abroad'),('e1b5cdc3-962e-11ef-acee-4a6a3b2083d6','bd399922-95ee-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6','2024-11-10','2024-11-10','Rejected','2024-10-29',NULL,NULL),('e38b62bc-96cd-11ef-acee-4a6a3b2083d6','e1d5b9a6-8b5b-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-10-31','2024-11-01','Pending','2024-10-30',NULL,'urgent\n '),('e7a3b77f-96ca-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-11-13','2024-11-14','Approved','2024-10-30','2024-10-30','Sick6'),('ee6cf1d0-96b6-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6','2024-11-01','2024-11-02','Rejected','2024-10-30',NULL,'Leave country'),('fa609012-9488-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6','2024-10-17','2024-10-15','Approved','2024-10-27','2024-10-29',NULL);
/*!40000 ALTER TABLE `leave_record` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`doadmin`@`%`*/ /*!50003 TRIGGER `notification_on_leave_request_submission` AFTER INSERT ON `leave_record` FOR EACH ROW BEGIN
    DECLARE supervisor_id CHAR(36);

    -- Fetch supervisor ID using the function
    SET supervisor_id = (SELECT get_supervisor_user_id_of_employee(NEW.employee_id));

    -- Check if the supervisor ID was found
    IF supervisor_id IS NOT NULL THEN
        SET time_zone = '+05:30';  -- UTC
        -- Call the create_notification procedure to notify the supervisor
        CALL create_notification(
            supervisor_id,                                   -- Supervisor's user_id
            'There is a new leave request waiting for your approval',
            'unread',                                        -- Status of the notification
            'new request',                      -- Notification type
            NOW()                                            -- Current date and time
        );
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`doadmin`@`%`*/ /*!50003 TRIGGER `UpdateEmployeeLeaveCount` AFTER UPDATE ON `leave_record` FOR EACH ROW BEGIN
    IF NEW.status = 'Approved' THEN
        
        SET @leave_balance := 0;

        SELECT balance INTO @leave_balance
        FROM leave_balance
        WHERE employee_id = NEW.employee_id
          AND leave_type_id = NEW.leave_type_id
          AND year = YEAR(CURDATE());

       
        IF @leave_balance IS NOT NULL THEN
            SET @leave_balance := @leave_balance - DATEDIFF(NEW.end_date, NEW.start_date) - 1;

            UPDATE leave_balance
            SET balance = @leave_balance
            WHERE employee_id = NEW.employee_id
              AND leave_type_id = NEW.leave_type_id
              AND year = YEAR(CURDATE());
        END IF;
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`doadmin`@`%`*/ /*!50003 TRIGGER `notification_on_leave_request_approval` AFTER UPDATE ON `leave_record` FOR EACH ROW BEGIN
    DECLARE employee_user_id CHAR(36);

    -- Get employee's user_id
    SET employee_user_id = (SELECT user_id FROM user WHERE employee_id = NEW.employee_id);

	IF employee_user_id IS NOT NULL THEN
		-- Check for status change to 'Approved'
		IF NEW.status = 'Approved' AND OLD.status <> 'Approved' THEN
			SET time_zone = '+05:30';  -- UTC
            -- Notify employee of approval
			CALL create_notification(
				employee_user_id,
				'Your leave request has been approved.',
				'unread',
				'leave status',
				NOW()
			);
		
		-- Check for status change to 'Rejected'
		ELSEIF NEW.status = 'Rejected' AND OLD.status <> 'Rejected' THEN
			-- Notify employee of rejection
			CALL create_notification(
				employee_user_id,
				'Your leave request has been rejected.',
				'unread',
				'leave status',
				NOW()
			);

		END IF;
	END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `leave_type`
--

DROP TABLE IF EXISTS `leave_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leave_type` (
  `leave_type_id` char(36) NOT NULL DEFAULT (uuid()),
  `type` varchar(30) NOT NULL,
  PRIMARY KEY (`leave_type_id`),
  UNIQUE KEY `type` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leave_type`
--

LOCK TABLES `leave_type` WRITE;
/*!40000 ALTER TABLE `leave_type` DISABLE KEYS */;
INSERT INTO `leave_type` VALUES ('2d48bec3-8afa-11ef-acee-4a6a3b2083d6','Annual'),('2d4c95f9-8afa-11ef-acee-4a6a3b2083d6','Casual'),('2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6','Maternity'),('2d4c9d14-8afa-11ef-acee-4a6a3b2083d6','No-pay');
/*!40000 ALTER TABLE `leave_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_attempts`
--

DROP TABLE IF EXISTS `login_attempts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_attempts` (
  `email` varchar(255) NOT NULL,
  `attempt_time` timestamp NOT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`email`,`attempt_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_attempts`
--

LOCK TABLES `login_attempts` WRITE;
/*!40000 ALTER TABLE `login_attempts` DISABLE KEYS */;
INSERT INTO `login_attempts` VALUES ('dd@email.com','2024-10-27 17:28:45','Success'),('dd@email.com','2024-10-27 17:30:50','Success'),('dd@email.com','2024-10-28 17:37:00','Success'),('dd@email.com','2024-10-28 17:38:13','Success'),('dd@email.com','2024-10-29 15:12:00','Success'),('dd@email.com','2024-10-29 15:13:35','Success'),('dd@email.com','2024-10-29 16:27:57','Success'),('dd@email.com','2024-10-29 17:23:01','Success'),('dd@email.com','2024-10-29 17:28:03','Success'),('dd@email.com','2024-10-30 08:44:55','Success'),('dd@email.com','2024-10-30 10:19:35','Success'),('dd@email.com','2024-10-30 10:38:52','Success'),('dd@email.com','2024-10-30 11:49:13','Success'),('dd@email.com','2024-10-30 12:24:01','Success'),('dd@email.com','2024-10-30 12:29:37','Success'),('dd@email.com','2024-10-30 12:43:15','Success'),('dd@email.com','2024-10-30 12:46:40','Success'),('dd@email.com','2024-10-30 12:51:03','Success'),('dd@email.com','2024-10-30 12:53:43','Success'),('dd@email.com','2024-10-30 13:04:59','Success'),('dd@email.com','2024-10-30 13:08:58','Success'),('dd@email.com','2024-10-30 13:13:44','Success'),('dd@email.com','2024-10-30 13:32:59','Success'),('dd@email.com','2024-10-30 14:37:20','Success'),('dd@email.com','2024-10-30 14:49:52','Success'),('dd@email.com','2024-10-30 14:52:47','Success'),('dd@email.com','2024-10-30 15:04:01','Success'),('dd@email.com','2024-10-30 17:38:26','Success'),('dd@email.com','2024-10-30 17:59:59','Success'),('john.doe@jupiter.com','2024-10-30 15:04:05','Invalid credentials'),('john.doe@jupiter.com','2024-10-30 17:38:24','Invalid credentials'),('kamal.perera@example.l','2024-10-28 13:23:56','Invalid credentials'),('kamal.perera@example.lk','2024-10-27 17:09:03','Success'),('kamal.perera@example.lk','2024-10-28 03:39:00','Success'),('kamal.perera@example.lk','2024-10-28 12:48:29','Success'),('kamal.perera@example.lk','2024-10-28 12:50:35','Success'),('kamal.perera@example.lk','2024-10-28 12:52:40','Success'),('kamal.perera@example.lk','2024-10-28 12:54:29','Success'),('kamal.perera@example.lk','2024-10-28 12:56:53','Success'),('kamal.perera@example.lk','2024-10-28 13:03:07','Success'),('kamal.perera@example.lk','2024-10-28 13:13:36','Success'),('kamal.perera@example.lk','2024-10-28 13:14:01','Success'),('kamal.perera@example.lk','2024-10-28 13:46:52','Success'),('kamal.perera@example.lk','2024-10-28 14:06:35','Success'),('kamal.perera@example.lk','2024-10-28 14:12:36','Success'),('kamal.perera@example.lk','2024-10-28 14:15:57','Success'),('kamal.perera@example.lk','2024-10-28 14:16:28','Success'),('kamal.perera@example.lk','2024-10-28 14:17:59','Success'),('kamal.perera@example.lk','2024-10-28 14:28:00','Success'),('kamal.perera@example.lk','2024-10-28 14:30:17','Success'),('kamal.perera@example.lk','2024-10-28 14:33:52','Success'),('kamal.perera@example.lk','2024-10-28 14:41:34','Success'),('kamal.perera@example.lk','2024-10-28 14:45:38','Success'),('kamal.perera@example.lk','2024-10-28 14:54:04','Success'),('kamal.perera@example.lk','2024-10-28 15:08:04','Success'),('kamal.perera@example.lk','2024-10-28 15:13:16','Success'),('kamal.perera@example.lk','2024-10-28 15:17:47','Success'),('kamal.perera@example.lk','2024-10-28 15:19:06','Success'),('kamal.perera@example.lk','2024-10-28 15:30:15','Success'),('kamal.perera@example.lk','2024-10-28 17:19:09','Success'),('kamal.perera@example.lk','2024-10-28 17:48:14','Success'),('kamal.perera@example.lk','2024-10-28 17:48:21','Success'),('kamal.perera@example.lk','2024-10-28 17:48:26','Success'),('kamal.perera@example.lk','2024-10-28 18:12:34','Success'),('kamal.perera@example.lk','2024-10-28 18:53:17','Success'),('kamal.perera@example.lk','2024-10-28 18:54:39','Success'),('kamal.perera@example.lk','2024-10-28 19:00:32','Success'),('kamal.perera@example.lk','2024-10-28 19:53:32','Success'),('kamal.perera@example.lk','2024-10-28 19:53:55','Success'),('kamal.perera@example.lk','2024-10-29 02:20:13','Success'),('kamal.perera@example.lk','2024-10-29 02:22:22','Success'),('kamal.perera@example.lk','2024-10-29 03:24:02','Success'),('kamal.perera@example.lk','2024-10-29 04:07:13','Success'),('kamal.perera@example.lk','2024-10-29 10:27:52','Success'),('kamal.perera@example.lk','2024-10-29 11:10:44','Success'),('kamal.perera@example.lk','2024-10-29 11:44:44','Success'),('kamal.perera@example.lk','2024-10-29 12:14:24','Success'),('kamal.perera@example.lk','2024-10-29 12:45:57','Success'),('kamal.perera@example.lk','2024-10-29 13:09:58','Success'),('kamal.perera@example.lk','2024-10-29 13:11:08','Success'),('kamal.perera@example.lk','2024-10-29 13:11:35','Success'),('kamal.perera@example.lk','2024-10-29 13:11:38','Success'),('kamal.perera@example.lk','2024-10-29 13:16:15','Success'),('kamal.perera@example.lk','2024-10-29 13:46:59','Success'),('kamal.perera@example.lk','2024-10-29 15:11:22','Success'),('kamal.perera@example.lk','2024-10-29 15:25:26','Success'),('kamal.perera@example.lk','2024-10-29 18:28:30','Success'),('kamal.perera@example.lk','2024-10-29 18:32:24','Success'),('kamal.perera@example.lk','2024-10-29 18:38:54','Success'),('kamal.perera@example.lk','2024-10-29 19:39:19','Success'),('kamal.perera@example.lk','2024-10-29 19:40:58','Success'),('kamal.perera@example.lk','2024-10-29 19:41:25','Success'),('kamal.perera@example.lk','2024-10-29 19:53:10','Success'),('kamal.perera@example.lk','2024-10-29 20:41:53','Success'),('kamal.perera@example.lk','2024-10-29 21:42:26','Success'),('kamal.perera@example.lk','2024-10-30 01:38:47','Success'),('kamal.perera@example.lk','2024-10-30 02:55:14','Success'),('kamal.perera@example.lk','2024-10-30 04:59:27','Success'),('kamal.perera@example.lk','2024-10-30 05:13:16','Success'),('kamal.perera@example.lk','2024-10-30 05:24:14','Success'),('kamal.perera@example.lk','2024-10-30 05:25:12','Success'),('kamal.perera@example.lk','2024-10-30 06:08:47','Success'),('kamal.perera@example.lk','2024-10-30 06:26:59','Success'),('kamal.perera@example.lk','2024-10-30 06:35:55','Success'),('kamal.perera@example.lk','2024-10-30 07:20:47','Success'),('kamal.perera@example.lk','2024-10-30 07:20:50','Success'),('kamal.perera@example.lk','2024-10-30 07:31:33','Success'),('kamal.perera@example.lk','2024-10-30 08:28:02','Success'),('kamal.perera@example.lk','2024-10-30 08:55:47','Success'),('kamal.perera@example.lk','2024-10-30 09:07:10','Success'),('kamal.perera@example.lk','2024-10-30 09:52:31','Success'),('kamal.perera@example.lk','2024-10-30 10:59:17','Success'),('kamal.perera@example.lk','2024-10-30 11:02:51','Success'),('kamal.perera@example.lk','2024-10-30 11:11:29','Success'),('kamal.perera@example.lk','2024-10-30 11:46:13','Success'),('kamal.perera@example.lk','2024-10-30 11:46:32','Success'),('kamal.perera@example.lk','2024-10-30 11:50:33','Success'),('kamal.perera@example.lk','2024-10-30 12:00:06','Success'),('kamal.perera@example.lk','2024-10-30 12:29:05','Success'),('kamal.perera@example.lk','2024-10-30 12:39:33','Success'),('kamal.perera@example.lk','2024-10-30 12:43:07','Success'),('kamal.perera@example.lk','2024-10-30 13:20:36','Success'),('kamal.perera@example.lk','2024-10-30 13:28:40','Success'),('kamal.perera@example.lk','2024-10-30 13:30:13','Success'),('kamal.perera@example.lk','2024-10-30 13:31:49','Success'),('kamal.perera@example.lk','2024-10-30 14:22:03','Success'),('kamal.perera@example.lk','2024-10-30 14:37:10','Success'),('kamal.perera@example.lk','2024-10-30 15:34:38','Success'),('kamal.perera@example.lk','2024-10-30 15:45:50','Success'),('kamal.perera@example.lk','2024-10-30 17:24:40','Success'),('kamal.perera@example.lk','2024-10-30 17:38:59','Success'),('nimali.silva@jupiter.com','2024-10-29 12:18:21','Success'),('nimali.silva@jupiter.com','2024-10-29 12:49:58','Success'),('nimali.silva@jupiter.com','2024-10-29 18:52:37','Success'),('nimali.silva@jupiter.com','2024-10-29 19:20:18','Success'),('nimali.silva@jupiter.com','2024-10-29 19:23:22','Success'),('nimali.silva@jupiter.com','2024-10-29 19:28:52','Success'),('nimali.silva@jupiter.com','2024-10-29 19:36:15','Success'),('nimali.silva@jupiter.com','2024-10-29 19:36:57','Success'),('nimali.silva@jupiter.com','2024-10-29 19:49:37','Success'),('nimali.silva@jupiter.com','2024-10-29 19:58:03','Success'),('nimali.silva@jupiter.com','2024-10-29 20:58:40','Success'),('nimali.silva@jupiter.com','2024-10-30 09:40:25','Success'),('nimali.silva@jupiter.com','2024-10-30 09:41:28','Success'),('raju.k@example.lk','2024-10-28 13:11:54','Invalid credentials'),('raju.k@example.lk','2024-10-28 18:43:43','Invalid credentials'),('raju.k@example.lk','2024-10-30 12:26:25','Invalid credentials'),('raju@example.lk','2024-10-28 18:43:53','Invalid credentials'),('raju@jupiter.com','2024-10-27 16:43:19','Success'),('raju@jupiter.com','2024-10-27 16:48:23','Success'),('raju@jupiter.com','2024-10-27 17:50:59','Success'),('raju@jupiter.com','2024-10-27 17:51:19','Success'),('raju@jupiter.com','2024-10-27 17:58:40','Success'),('raju@jupiter.com','2024-10-28 06:17:24','Success'),('raju@jupiter.com','2024-10-28 12:56:10','Success'),('raju@jupiter.com','2024-10-28 13:19:34','Success'),('raju@jupiter.com','2024-10-28 14:26:33','Success'),('raju@jupiter.com','2024-10-28 14:55:50','Success'),('raju@jupiter.com','2024-10-28 15:13:46','Success'),('raju@jupiter.com','2024-10-28 15:34:30','Success'),('raju@jupiter.com','2024-10-28 17:37:35','Success'),('raju@jupiter.com','2024-10-28 18:45:09','Success'),('raju@jupiter.com','2024-10-28 18:50:24','Success'),('raju@jupiter.com','2024-10-28 18:53:58','Success'),('raju@jupiter.com','2024-10-28 18:58:20','Success'),('raju@jupiter.com','2024-10-28 19:00:24','Success'),('raju@jupiter.com','2024-10-29 15:27:31','Success'),('raju@jupiter.com','2024-10-29 19:39:50','Success'),('raju@jupiter.com','2024-10-30 09:09:46','Success'),('raju@jupiter.com','2024-10-30 09:14:17','Success'),('raju@jupiter.com','2024-10-30 09:38:41','Success'),('raju@jupiter.com','2024-10-30 12:23:33','Success'),('raju@jupiter.com','2024-10-30 12:27:25','Success'),('raju@jupiter.com','2024-10-30 12:28:12','Success'),('raju@jupiter.com','2024-10-30 12:42:57','Success'),('raju@jupiter.com','2024-10-30 14:45:09','Success'),('raju@jupiter.com','2024-10-30 14:52:34','Success'),('Rashmikanaveen@jupiter.com','2024-10-28 13:12:59','Success'),('Rashmikanaveen@jupiter.com','2024-10-28 13:23:04','Success'),('Rashmikanaveen@jupiter.com','2024-10-28 13:24:04','Success'),('raviw@example.lk','2024-10-29 12:12:32','Invalid credentials'),('raviw@jupiter.com','2024-10-29 12:12:18','Invalid credentials'),('raviw@jupiter.com','2024-10-29 12:15:59','Success'),('raviw@jupiter.com','2024-10-29 18:53:25','Success'),('raviw@jupiter.com','2024-10-29 18:55:43','Success'),('raviw@jupiter.com','2024-10-29 18:57:09','Success'),('raviw@jupiter.com','2024-10-29 19:17:46','Success'),('raviw@jupiter.com','2024-10-29 19:22:37','Success'),('raviw@jupiter.com','2024-10-29 19:23:59','Success'),('raviw@jupiter.com','2024-10-29 19:28:45','Success'),('raviw@jupiter.com','2024-10-29 19:33:19','Success'),('raviw@jupiter.com','2024-10-29 19:37:02','Success'),('raviw@jupiter.com','2024-10-29 19:57:04','Success'),('raviw@jupiter.com','2024-10-29 19:58:50','Success'),('raviw@jupiter.com','2024-10-29 20:57:14','Success'),('raviw@jupiter.com','2024-10-29 20:59:12','Success'),('raviw@jupiter.com','2024-10-29 21:13:04','Success'),('raviw@jupiter.com','2024-10-29 21:19:55','Success'),('raviw@jupiter.com','2024-10-30 05:31:57','Success'),('raviw@jupiter.com','2024-10-30 07:02:00','Success'),('raviw@jupiter.com','2024-10-30 09:48:44','Success'),('roy.perera@example.com','2024-10-28 17:57:18','Invalid credentials'),('royperera@jupiter.com','2024-10-27 17:29:24','Success'),('royperera@jupiter.com','2024-10-27 18:12:59','Success'),('royperera@jupiter.com','2024-10-28 12:21:44','Success'),('royperera@jupiter.com','2024-10-28 12:22:10','Success'),('royperera@jupiter.com','2024-10-28 12:47:41','Success'),('royperera@jupiter.com','2024-10-28 17:37:51','Success'),('royperera@jupiter.com','2024-10-28 17:43:18','Success'),('royperera@jupiter.com','2024-10-28 17:48:40','Success'),('royperera@jupiter.com','2024-10-28 17:57:27','Success'),('royperera@jupiter.com','2024-10-28 18:42:47','Success'),('royperera@jupiter.com','2024-10-28 18:47:29','Success'),('royperera@jupiter.com','2024-10-29 11:00:09','Success'),('royperera@jupiter.com','2024-10-29 15:08:40','Success'),('royperera@jupiter.com','2024-10-29 15:12:39','Success'),('royperera@jupiter.com','2024-10-29 15:12:43','Success'),('royperera@jupiter.com','2024-10-29 15:12:59','Success'),('royperera@jupiter.com','2024-10-30 05:22:31','Success'),('royperera@jupiter.com','2024-10-30 09:11:36','Success'),('royperera@jupiter.com','2024-10-30 12:01:21','Success'),('royperera@jupiter.com','2024-10-30 12:21:57','Success'),('royperera@jupiter.com','2024-10-30 12:28:43','Success'),('royperera@jupiter.com','2024-10-30 12:29:01','Success'),('royperera@jupiter.com','2024-10-30 12:50:05','Success'),('royperera@jupiter.com','2024-10-30 12:52:44','Success'),('royperera@jupiter.com','2024-10-30 12:57:46','Success'),('royperera@jupiter.com','2024-10-30 13:13:10','Success'),('royperera@jupiter.com','2024-10-30 14:30:04','Success'),('royperera@jupiter.com','2024-10-30 14:30:50','Success'),('royperera@jupiter.com','2024-10-30 14:35:06','Success'),('royperera@jupiter.com','2024-10-30 14:36:00','Success'),('royperera@jupiter.com','2024-10-30 14:36:32','Success'),('royperera@jupiter.com','2024-10-30 14:36:48','Success'),('royperera@jupiter.com','2024-10-30 14:39:45','Success'),('royperera@jupiter.com','2024-10-30 14:46:25','Success'),('royperera@jupiter.com','2024-10-30 14:46:36','Success'),('royperera@jupiter.com','2024-10-30 14:52:32','Success'),('royperera@jupiter.com','2024-10-30 14:58:34','Success'),('royperera@jupiter.com','2024-10-30 18:05:55','Success'),('Saman.Silva@jupiter.com','2024-10-28 18:12:32','Invalid credentials'),('Saman.Silva@jupiter.com','2024-10-29 15:27:45','Invalid credentials'),('Saman.Silva@jupiter.com','2024-10-30 14:46:23','Invalid credentials'),('Saman.Silva@jupiter.com','2024-10-30 15:04:08','Invalid credentials'),('SamanKumara@jupiter.com','2024-10-30 05:10:46','Success'),('SamanKumara@jupiter.com','2024-10-30 05:22:11','Success'),('sunil.fernando@example.lk','2024-10-29 14:06:31','Invalid credentials'),('sunil.fernando@example.lk','2024-10-29 14:06:41','Invalid credentials'),('sunil.fernando@example.lk','2024-10-29 14:06:43','Invalid credentials'),('sunil.perera@example.lk','2024-10-29 13:26:34','Invalid credentials'),('sunil.perera@example.lk','2024-10-29 13:26:37','Invalid credentials'),('sunil.perera@example.lk','2024-10-29 13:26:38','Invalid credentials'),('sunil.perera@jupiter.lk','2024-10-29 13:26:48','Invalid credentials'),('sunil.perera@jupiter.lk','2024-10-29 13:26:49','Invalid credentials'),('sunilfernando@jupiter.com','2024-10-27 12:09:24','Success'),('sunilfernando@jupiter.com','2024-10-27 16:43:29','Success'),('sunilfernando@jupiter.com','2024-10-27 16:48:43','Success'),('sunilfernando@jupiter.com','2024-10-27 17:20:39','Success'),('sunilfernando@jupiter.com','2024-10-27 17:51:41','Success'),('sunilfernando@jupiter.com','2024-10-28 06:06:04','Success'),('sunilfernando@jupiter.com','2024-10-28 06:17:37','Success'),('sunilfernando@jupiter.com','2024-10-28 12:15:16','Success'),('sunilfernando@jupiter.com','2024-10-28 12:50:30','Success'),('sunilfernando@jupiter.com','2024-10-28 12:53:22','Success'),('sunilfernando@jupiter.com','2024-10-28 12:57:14','Success'),('sunilfernando@jupiter.com','2024-10-28 13:23:45','Success'),('sunilfernando@jupiter.com','2024-10-28 13:24:29','Success'),('sunilfernando@jupiter.com','2024-10-28 14:09:32','Success'),('sunilfernando@jupiter.com','2024-10-28 14:33:34','Success'),('sunilfernando@jupiter.com','2024-10-28 14:38:16','Success'),('sunilfernando@jupiter.com','2024-10-28 15:26:59','Success'),('sunilfernando@jupiter.com','2024-10-28 15:32:05','Success'),('sunilfernando@jupiter.com','2024-10-28 15:39:29','Success'),('sunilfernando@jupiter.com','2024-10-28 15:53:44','Success'),('sunilfernando@jupiter.com','2024-10-28 18:05:26','Success'),('sunilfernando@jupiter.com','2024-10-28 18:51:05','Success'),('sunilfernando@jupiter.com','2024-10-29 10:33:44','Success'),('sunilfernando@jupiter.com','2024-10-29 14:08:17','Success'),('sunilfernando@jupiter.com','2024-10-29 15:26:34','Success'),('sunilfernando@jupiter.com','2024-10-29 15:27:51','Success'),('sunilfernando@jupiter.com','2024-10-29 15:33:44','Success'),('sunilfernando@jupiter.com','2024-10-29 16:46:15','Success'),('sunilfernando@jupiter.com','2024-10-29 18:08:59','Success'),('sunilfernando@jupiter.com','2024-10-29 18:13:30','Success'),('sunilfernando@jupiter.com','2024-10-29 18:28:49','Success'),('sunilfernando@jupiter.com','2024-10-29 18:54:29','Success'),('sunilfernando@jupiter.com','2024-10-29 18:57:00','Success'),('sunilfernando@jupiter.com','2024-10-29 19:00:32','Success'),('sunilfernando@jupiter.com','2024-10-29 19:04:00','Success'),('sunilfernando@jupiter.com','2024-10-29 19:33:32','Success'),('sunilfernando@jupiter.com','2024-10-29 19:55:43','Success'),('sunilfernando@jupiter.com','2024-10-29 19:57:52','Success'),('sunilfernando@jupiter.com','2024-10-29 20:10:53','Success'),('sunilfernando@jupiter.com','2024-10-29 20:28:00','Success'),('sunilfernando@jupiter.com','2024-10-29 21:12:29','Success'),('sunilfernando@jupiter.com','2024-10-30 01:38:29','Success'),('sunilfernando@jupiter.com','2024-10-30 01:42:22','Success'),('sunilfernando@jupiter.com','2024-10-30 01:42:42','Success'),('sunilfernando@jupiter.com','2024-10-30 01:48:34','Success'),('sunilfernando@jupiter.com','2024-10-30 01:48:46','Success'),('sunilfernando@jupiter.com','2024-10-30 02:53:18','Success'),('sunilfernando@jupiter.com','2024-10-30 02:55:05','Success'),('sunilfernando@jupiter.com','2024-10-30 03:19:50','Success'),('sunilfernando@jupiter.com','2024-10-30 03:21:32','Success'),('sunilfernando@jupiter.com','2024-10-30 03:21:51','Success'),('sunilfernando@jupiter.com','2024-10-30 04:20:29','Success'),('sunilfernando@jupiter.com','2024-10-30 05:22:35','Success'),('sunilfernando@jupiter.com','2024-10-30 05:49:28','Success'),('sunilfernando@jupiter.com','2024-10-30 06:50:13','Success'),('sunilfernando@jupiter.com','2024-10-30 07:10:03','Success'),('sunilfernando@jupiter.com','2024-10-30 07:37:34','Success'),('sunilfernando@jupiter.com','2024-10-30 08:23:05','Success'),('sunilfernando@jupiter.com','2024-10-30 08:26:01','Success'),('sunilfernando@jupiter.com','2024-10-30 08:27:52','Success'),('sunilfernando@jupiter.com','2024-10-30 09:07:19','Success'),('sunilfernando@jupiter.com','2024-10-30 09:18:16','Success'),('sunilfernando@jupiter.com','2024-10-30 09:27:21','Success'),('sunilfernando@jupiter.com','2024-10-30 09:30:00','Success'),('sunilfernando@jupiter.com','2024-10-30 09:30:44','Success'),('sunilfernando@jupiter.com','2024-10-30 09:38:49','Success'),('sunilfernando@jupiter.com','2024-10-30 09:39:47','Success'),('sunilfernando@jupiter.com','2024-10-30 09:47:27','Success'),('sunilfernando@jupiter.com','2024-10-30 10:08:07','Success'),('sunilfernando@jupiter.com','2024-10-30 10:19:24','Success'),('sunilfernando@jupiter.com','2024-10-30 10:55:16','Success'),('sunilfernando@jupiter.com','2024-10-30 10:55:32','Success'),('sunilfernando@jupiter.com','2024-10-30 10:56:15','Success'),('sunilfernando@jupiter.com','2024-10-30 11:01:10','Success'),('sunilfernando@jupiter.com','2024-10-30 11:58:54','Success'),('sunilfernando@jupiter.com','2024-10-30 12:00:55','Success'),('sunilfernando@jupiter.com','2024-10-30 12:02:14','Success'),('sunilfernando@jupiter.com','2024-10-30 12:29:36','Success'),('sunilfernando@jupiter.com','2024-10-30 12:40:45','Success'),('sunilfernando@jupiter.com','2024-10-30 12:41:26','Success'),('sunilfernando@jupiter.com','2024-10-30 12:44:36','Success'),('sunilfernando@jupiter.com','2024-10-30 12:47:15','Success'),('sunilfernando@jupiter.com','2024-10-30 13:00:17','Success'),('sunilfernando@jupiter.com','2024-10-30 13:04:25','Success'),('sunilfernando@jupiter.com','2024-10-30 13:45:03','Success'),('sunilfernando@jupiter.com','2024-10-30 13:57:47','Success'),('sunilfernando@jupiter.com','2024-10-30 14:35:11','Success'),('sunilfernando@jupiter.com','2024-10-30 14:36:57','Success'),('sunilfernando@jupiter.com','2024-10-30 14:47:44','Success'),('sunilfernando@jupiter.com','2024-10-30 14:52:51','Success'),('sunilfernando@jupiter.com','2024-10-30 15:00:25','Success'),('sunilfernando@jupiter.com','2024-10-30 15:04:10','Success'),('sunilfernando@jupiter.com','2024-10-30 15:11:00','Success'),('sunilfernando@jupiter.com','2024-10-30 15:21:15','Success'),('sunilfernando@jupiter.com','2024-10-30 15:35:19','Success'),('sunilfernando@jupiter.com','2024-10-30 15:43:30','Success'),('sunilfernando@jupiter.com','2024-10-30 15:44:01','Success'),('sunilfernando@jupiter.com','2024-10-30 15:44:12','Success'),('sunilfernando@jupiter.com','2024-10-30 17:29:00','Success'),('sunilfernando@jupiter.com','2024-10-30 17:37:25','Success'),('sunilfernando@jupiter.com','2024-10-30 17:45:41','Success'),('sunilfernando@jupiter.com','2024-10-30 17:47:34','Success'),('sunilfernando@jupiter.com','2024-10-30 17:51:27','Success'),('sunilfernando@jupiter.com','2024-10-30 17:52:31','Success'),('sunilfernando@jupiter.com','2024-10-30 17:57:05','Success'),('sunilfernando@jupiter.com','2024-10-30 18:01:07','Success'),('sunilfernando@jupiter.com','2024-10-30 18:03:04','Success'),('sunilfernando@jupiter.com','2024-10-30 18:03:58','Success'),('theekshanawijerathna2@gmail.com','2024-10-30 12:44:13','Invalid credentials'),('theekshanawijerathna2@gmail.com','2024-10-30 17:59:34','Invalid credentials'),('theekshanawijerathna2@gmail.com','2024-10-30 17:59:40','Invalid credentials'),('theekshanawijerathna2@gmail.com','2024-10-30 17:59:42','Invalid credentials'),('theekshanawijerathna2@gmail.com','2024-10-30 17:59:44','Invalid credentials');
/*!40000 ALTER TABLE `login_attempts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `max_leave_count`
--

DROP TABLE IF EXISTS `max_leave_count`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `max_leave_count` (
  `pay_grade_id` char(36) NOT NULL,
  `leave_type_id` char(36) NOT NULL,
  `max_leave_count` int DEFAULT NULL,
  PRIMARY KEY (`pay_grade_id`,`leave_type_id`),
  KEY `leave_type_id` (`leave_type_id`),
  CONSTRAINT `max_leave_count_ibfk_1` FOREIGN KEY (`leave_type_id`) REFERENCES `leave_type` (`leave_type_id`),
  CONSTRAINT `max_leave_count_ibfk_2` FOREIGN KEY (`pay_grade_id`) REFERENCES `pay_grade` (`pay_grade_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `max_leave_count`
--

LOCK TABLES `max_leave_count` WRITE;
/*!40000 ALTER TABLE `max_leave_count` DISABLE KEYS */;
INSERT INTO `max_leave_count` VALUES ('2d588b48-8afa-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',20),('2d588b48-8afa-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',12),('2d588b48-8afa-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',90),('2d588b48-8afa-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',50),('2d588f69-8afa-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',18),('2d588f69-8afa-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',10),('2d588f69-8afa-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',80),('2d588f69-8afa-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',50),('2d58a611-8afa-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',15),('2d58a611-8afa-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',8),('2d58a611-8afa-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',75),('2d58a611-8afa-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',50),('2d58a71c-8afa-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',12),('2d58a71c-8afa-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',6),('2d58a71c-8afa-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',70),('2d58a71c-8afa-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',50),('2d58a76b-8afa-11ef-acee-4a6a3b2083d6','2d48bec3-8afa-11ef-acee-4a6a3b2083d6',10),('2d58a76b-8afa-11ef-acee-4a6a3b2083d6','2d4c95f9-8afa-11ef-acee-4a6a3b2083d6',5),('2d58a76b-8afa-11ef-acee-4a6a3b2083d6','2d4c9c3e-8afa-11ef-acee-4a6a3b2083d6',60),('2d58a76b-8afa-11ef-acee-4a6a3b2083d6','2d4c9d14-8afa-11ef-acee-4a6a3b2083d6',50);
/*!40000 ALTER TABLE `max_leave_count` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification` (
  `notification_id` char(36) NOT NULL DEFAULT (uuid()),
  `user_id` char(36) NOT NULL,
  `message` varchar(255) DEFAULT NULL,
  `status` varchar(12) DEFAULT NULL,
  `type` varchar(25) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`notification_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `notification_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
INSERT INTO `notification` VALUES ('0461de42-9687-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 11:50:11'),('05a70bae-968a-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','read','alert','2024-10-30 12:11:41'),('07302938-96b9-11ef-acee-4a6a3b2083d6','6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','unread','new request','2024-10-30 17:48:10'),('083dbb3d-9688-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 11:57:26'),('09d1b470-9636-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-29 20:40:30'),('09fc10ec-962d-11ef-acee-4a6a3b2083d6','12a353cf-9367-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','read','new request','2024-10-29 19:36:05'),('0eb1bd8b-96be-11ef-acee-4a6a3b2083d6','6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','unread','new request','2024-10-30 18:24:10'),('0f2817dd-968e-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','read','alert','2024-10-30 12:40:35'),('140fc627-9688-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 11:57:46'),('1d695ded-962d-11ef-acee-4a6a3b2083d6','81617c79-95ef-11ef-acee-4a6a3b2083d6','Your leave request has been approved.','read','leave status','2024-10-29 19:36:38'),('22faef99-9636-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-29 20:41:13'),('230ece10-9660-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','unread','new request','2024-10-30 07:11:52'),('27db064c-96be-11ef-acee-4a6a3b2083d6','6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','unread','new request','2024-10-30 18:24:52'),('2a929350-96b9-11ef-acee-4a6a3b2083d6','6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','unread','new request','2024-10-30 17:49:09'),('2f22a122-96c0-11ef-acee-4a6a3b2083d6','6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','unread','new request','2024-10-30 18:39:24'),('2f462979-9630-11ef-acee-4a6a3b2083d6','81617c79-95ef-11ef-acee-4a6a3b2083d6','Your leave request has been rejected.','unread','leave status','2024-10-29 19:58:36'),('304739e7-9688-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 11:58:34'),('40c659b5-9689-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 12:06:11'),('45820fa4-9636-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-29 20:42:11'),('4819e00a-962b-11ef-acee-4a6a3b2083d6','81617c79-95ef-11ef-acee-4a6a3b2083d6','Your leave request has been approved.','read','leave status','2024-10-29 19:23:30'),('491422ca-9688-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 11:59:15'),('4fc3bc71-9687-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 11:52:17'),('52cbd174-9689-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 12:06:41'),('5a858c5a-962a-11ef-acee-4a6a3b2083d6','81617c79-95ef-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','read','alert','2024-10-29 19:16:52'),('5c0533b2-9636-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-29 20:42:48'),('613d6cb0-96bd-11ef-acee-4a6a3b2083d6','6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','unread','new request','2024-10-30 18:19:19'),('6542dcdb-9689-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 12:07:12'),('6f6cf723-969e-11ef-acee-4a6a3b2083d6','6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','unread','new request','2024-10-30 14:37:49'),('736b5830-9689-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','read','alert','2024-10-30 12:07:36'),('74470383-9638-11ef-acee-4a6a3b2083d6','12a353cf-9367-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','read','new request','2024-10-29 20:57:48'),('749520bc-9636-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-29 20:43:30'),('777575d7-96b6-11ef-acee-4a6a3b2083d6','6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','unread','new request','2024-10-30 17:29:50'),('77cd2da5-96b9-11ef-acee-4a6a3b2083d6','6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','unread','new request','2024-10-30 17:51:19'),('7a8e9628-96c0-11ef-acee-4a6a3b2083d6','6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','unread','new request','2024-10-30 18:41:30'),('7dd98c8d-9689-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','read','alert','2024-10-30 12:07:53'),('831fec05-96c6-11ef-acee-4a6a3b2083d6','4183f727-8be8-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','read','alert','2024-10-30 19:24:41'),('839096d7-96be-11ef-acee-4a6a3b2083d6','6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','unread','new request','2024-10-30 18:27:26'),('859e7c8e-96bd-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your leave request has been rejected.','unread','leave status','2024-10-30 18:20:20'),('863eb47c-96bd-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your leave request has been rejected.','unread','leave status','2024-10-30 18:20:21'),('86dfa122-96bd-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your leave request has been rejected.','unread','leave status','2024-10-30 18:20:22'),('878495a8-96bd-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your leave request has been rejected.','unread','leave status','2024-10-30 18:20:23'),('88d1c75f-96bd-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your leave request has been rejected.','unread','leave status','2024-10-30 18:20:26'),('89e73269-96bd-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your leave request has been rejected.','unread','leave status','2024-10-30 18:20:27'),('8ba39f44-962d-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-29 19:39:43'),('8bf04395-9689-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','read','alert','2024-10-30 12:08:17'),('8e1bc6ea-963a-11ef-acee-4a6a3b2083d6','81617c79-95ef-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 02:42:50'),('925fa8a6-96ce-11ef-acee-4a6a3b2083d6','6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','read','new request','2024-10-30 20:22:23'),('92a4aac2-96ce-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','unread','new request','2024-10-30 20:22:23'),('92d42e0c-96ba-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your leave request has been approved.','read','leave status','2024-10-30 17:59:14'),('96fb2f29-96be-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your leave request has been rejected.','unread','leave status','2024-10-30 18:27:59'),('978eb4a9-96be-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your leave request has been rejected.','unread','leave status','2024-10-30 18:28:00'),('987501b0-96be-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your leave request has been rejected.','unread','leave status','2024-10-30 18:28:01'),('9bbdecfb-96a3-11ef-acee-4a6a3b2083d6','4bcfca9e-967d-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 15:14:50'),('9bceb503-96a3-11ef-acee-4a6a3b2083d6','4183f727-8be8-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','read','alert','2024-10-30 15:14:50'),('9bdcd863-96a3-11ef-acee-4a6a3b2083d6','12a353cf-9367-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 15:14:51'),('9be8bfe0-96a3-11ef-acee-4a6a3b2083d6','30fee1ea-8be9-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 15:14:51'),('9c12e0be-96a3-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','read','alert','2024-10-30 15:14:51'),('9c3eb9d1-96a3-11ef-acee-4a6a3b2083d6','81617c79-95ef-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 15:14:51'),('9c4d30ab-96a3-11ef-acee-4a6a3b2083d6','119cd586-95ed-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 15:14:51'),('9c55a331-96ce-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your leave request has been approved.','unread','leave status','2024-10-30 20:22:40'),('9c5c2a7f-96a3-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','read','alert','2024-10-30 15:14:51'),('9c6b12a1-96a3-11ef-acee-4a6a3b2083d6','6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 15:14:51'),('9f155573-9638-11ef-acee-4a6a3b2083d6','81617c79-95ef-11ef-acee-4a6a3b2083d6','Your leave request has been approved.','read','leave status','2024-10-29 20:59:00'),('aa9a2841-96b9-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your leave request has been rejected.','read','leave status','2024-10-30 17:52:44'),('ae8f8d1e-96b9-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your leave request has been rejected.','read','leave status','2024-10-30 17:52:51'),('b18d6c2f-9687-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 11:55:01'),('b5d75253-96bd-11ef-acee-4a6a3b2083d6','6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','unread','new request','2024-10-30 18:21:41'),('b86fbc01-9687-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 11:55:13'),('be208fa6-962a-11ef-acee-4a6a3b2083d6','12a353cf-9367-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','read','new request','2024-10-29 19:19:39'),('bf347b5f-96c0-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your leave request has been approved.','unread','leave status','2024-10-30 18:43:25'),('c24a83b9-96cb-11ef-acee-4a6a3b2083d6','6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','read','new request','2024-10-30 20:02:15'),('c30c3575-96b9-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your leave request has been approved.','read','leave status','2024-10-30 17:53:25'),('c5d54060-96c0-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your leave request has been rejected.','unread','leave status','2024-10-30 18:43:36'),('c6f58da4-968c-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','read','alert','2024-10-30 12:31:24'),('d522dc1e-96b8-11ef-acee-4a6a3b2083d6','6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','unread','new request','2024-10-30 17:46:46'),('d9c8c6a7-96cc-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your leave request has been approved.','unread','leave status','2024-10-30 20:10:04'),('e1b5e5e9-962e-11ef-acee-4a6a3b2083d6','12a353cf-9367-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','unread','new request','2024-10-29 19:49:17'),('e2dfe295-96c6-11ef-acee-4a6a3b2083d6','4183f727-8be8-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','read','alert','2024-10-30 19:27:22'),('e7a3d353-96ca-11ef-acee-4a6a3b2083d6','6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','read','new request','2024-10-30 19:56:08'),('e80ea76d-96bd-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your leave request has been rejected.','unread','leave status','2024-10-30 18:23:05'),('ebd749ab-96a1-11ef-acee-4a6a3b2083d6','4bcfca9e-967d-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 15:02:46'),('ec209f5e-96a1-11ef-acee-4a6a3b2083d6','e271682f-9488-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','read','alert','2024-10-30 15:02:46'),('ec95a676-96a1-11ef-acee-4a6a3b2083d6','81617c79-95ef-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 15:02:47'),('ecb143da-96a1-11ef-acee-4a6a3b2083d6','119cd586-95ed-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 15:02:47'),('ee6d222d-96b6-11ef-acee-4a6a3b2083d6','6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','There is a new leave request waiting for your approval','unread','new request','2024-10-30 17:33:10'),('f3ecb513-968d-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','read','alert','2024-10-30 12:39:49'),('f4839af5-9636-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-29 20:47:04'),('fe174a72-9687-11ef-acee-4a6a3b2083d6','1f58b05e-9278-11ef-acee-4a6a3b2083d6','Your profile details have been updated by the HR Manager.','unread','alert','2024-10-30 11:57:09');
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organization`
--

DROP TABLE IF EXISTS `organization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organization` (
  `organization_id` char(36) NOT NULL DEFAULT (uuid()),
  `name` varchar(100) NOT NULL,
  `address` varchar(250) DEFAULT NULL,
  `reg_number` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`organization_id`),
  UNIQUE KEY `reg_number` (`reg_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organization`
--

LOCK TABLES `organization` WRITE;
/*!40000 ALTER TABLE `organization` DISABLE KEYS */;
INSERT INTO `organization` VALUES ('2d62d36d-8afa-11ef-acee-4a6a3b2083d6','Jupiter Apparels','123, Union Place, Colombo, Sri Lanka','REG-987654321');
/*!40000 ALTER TABLE `organization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pay_grade`
--

DROP TABLE IF EXISTS `pay_grade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pay_grade` (
  `pay_grade_id` char(36) NOT NULL DEFAULT (uuid()),
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`pay_grade_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pay_grade`
--

LOCK TABLES `pay_grade` WRITE;
/*!40000 ALTER TABLE `pay_grade` DISABLE KEYS */;
INSERT INTO `pay_grade` VALUES ('2d588b48-8afa-11ef-acee-4a6a3b2083d6','Level-1'),('2d588f69-8afa-11ef-acee-4a6a3b2083d6','Level-2'),('2d58a611-8afa-11ef-acee-4a6a3b2083d6','Level-3'),('2d58a71c-8afa-11ef-acee-4a6a3b2083d6','Level-4'),('2d58a76b-8afa-11ef-acee-4a6a3b2083d6','Level-5');
/*!40000 ALTER TABLE `pay_grade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `pay_grade_leave_limits`
--

DROP TABLE IF EXISTS `pay_grade_leave_limits`;
/*!50001 DROP VIEW IF EXISTS `pay_grade_leave_limits`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `pay_grade_leave_limits` AS SELECT 
 1 AS `name`,
 1 AS `type`,
 1 AS `max_leave_count`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `report`
--

DROP TABLE IF EXISTS `report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `report` (
  `report_id` char(36) NOT NULL DEFAULT (uuid()),
  `user_id` char(36) DEFAULT NULL,
  `generated_date` datetime DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`report_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `report_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report`
--

LOCK TABLES `report` WRITE;
/*!40000 ALTER TABLE `report` DISABLE KEYS */;
/*!40000 ALTER TABLE `report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `role_id` char(36) NOT NULL DEFAULT (uuid()),
  `role_name` varchar(20) NOT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `role_name` (`role_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES ('2d839c7b-8afa-11ef-acee-4a6a3b2083d6','Admin'),('2d83a430-8afa-11ef-acee-4a6a3b2083d6','Developer'),('2d83a3ca-8afa-11ef-acee-4a6a3b2083d6','Employee'),('2d83a073-8afa-11ef-acee-4a6a3b2083d6','HR Manager'),('2d83a344-8afa-11ef-acee-4a6a3b2083d6','Supervisor');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `supervisors`
--

DROP TABLE IF EXISTS `supervisors`;
/*!50001 DROP VIEW IF EXISTS `supervisors`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `supervisors` AS SELECT 
 1 AS `id`,
 1 AS `name`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` char(36) NOT NULL DEFAULT (uuid()),
  `employee_id` char(36) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password_hash` varchar(255) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `company_email` (`email`),
  KEY `user_ibfk_1` (`employee_id`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('119cd586-95ed-11ef-acee-4a6a3b2083d6','d9015df1-95ea-11ef-acee-4a6a3b2083d6','RavinduW','$2b$10$yoDUezX6R71MZ2PTXdk/n.kNDG.ApbQj7Y9krRfT7i0N7mPNsh.eu','ravindu@jupiter.com'),('12a353cf-9367-11ef-acee-4a6a3b2083d6','6bf3854f-8b5d-11ef-acee-4a6a3b2083d6','Nimali Silva','$2b$10$utNcMfjShKl1rIXoh0E24eS/vq5A01wu1FWsy.CWxI0okZz/nEy2K','nimali.silva@jupiter.com'),('1f58b05e-9278-11ef-acee-4a6a3b2083d6','e1d57e09-8b5b-11ef-acee-4a6a3b2083d6','Raju Kamalanath','$2b$10$NuOiieXfA/QACa4uBQQn5OvMjgfRerUddBsCfa8t7R/.pSQrZ.Gvm','raju@jupiter.com'),('30fee1ea-8be9-11ef-acee-4a6a3b2083d6','6bf389a5-8b5d-11ef-acee-4a6a3b2083d6','Sunil Fernando','$2b$10$NNIaV.4Qe3vixjrgljDhhuxieVkgwMH4ZcvwC3emwyvk8h/fH9CIq','sunilfernando@jupiter.com'),('4183f727-8be8-11ef-acee-4a6a3b2083d6','6bf363e8-8b5d-11ef-acee-4a6a3b2083d6','Kamal Perera','$2b$10$UrOzCovTXbi8Vzs6NAx7Huxv5I8E9HvdJuvDKRv9V9d14P93/phxq','kamal.perera@example.lk'),('4bcfca9e-967d-11ef-acee-4a6a3b2083d6','1915d681-967d-11ef-acee-4a6a3b2083d6','Saman Kumara','$2b$10$6uTkXPoUrdpzySpAOw5so.GvrvTfZxd91g816j8QbO6m17TLUO/Ja','SamanKumara@jupiter.com'),('6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','e1d5b9a6-8b5b-11ef-acee-4a6a3b2083d6','Roy Perera','$2b$10$f/hLxVscVNCu5hNpf46B4O5TRpn/jjv3BrcnYOHzF6Pu4kvmr0kSW','royperera@jupiter.com'),('81617c79-95ef-11ef-acee-4a6a3b2083d6','bd399922-95ee-11ef-acee-4a6a3b2083d6','raviw','$2b$10$Ra1ZadG7XjpGtr1uWvs65OX.s0XLhbbCx0ZV/LxYFwGgtR9wYqTJe','raviw@jupiter.com'),('b235134f-96c3-11ef-acee-4a6a3b2083d6','828f1a7d-96c3-11ef-acee-4a6a3b2083d6','yasinthaLakshan','$2b$10$ZVjDFVH/p4X1gsQVSGSNoOAZqN6w4bqGd4TrZ/u6RKVhDf/la9OPy','yasinthaLakshan@jupiter.com'),('e271682f-9488-11ef-acee-4a6a3b2083d6','910399bf-9488-11ef-acee-4a6a3b2083d6','danurdha','$2b$10$YHBgpPreATSfqNa6Ki3RXuSDc/KVVli.ycWl3URlK9kHPdSvxHASy','dd@email.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_role` (
  `user_id` char(36) NOT NULL,
  `role_id` char(36) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `user_role_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `user_role_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES ('4183f727-8be8-11ef-acee-4a6a3b2083d6','2d839c7b-8afa-11ef-acee-4a6a3b2083d6'),('b235134f-96c3-11ef-acee-4a6a3b2083d6','2d839c7b-8afa-11ef-acee-4a6a3b2083d6'),('30fee1ea-8be9-11ef-acee-4a6a3b2083d6','2d83a073-8afa-11ef-acee-4a6a3b2083d6'),('12a353cf-9367-11ef-acee-4a6a3b2083d6','2d83a344-8afa-11ef-acee-4a6a3b2083d6'),('1f58b05e-9278-11ef-acee-4a6a3b2083d6','2d83a344-8afa-11ef-acee-4a6a3b2083d6'),('4bcfca9e-967d-11ef-acee-4a6a3b2083d6','2d83a344-8afa-11ef-acee-4a6a3b2083d6'),('6a727d2e-8cbe-11ef-acee-4a6a3b2083d6','2d83a344-8afa-11ef-acee-4a6a3b2083d6'),('119cd586-95ed-11ef-acee-4a6a3b2083d6','2d83a3ca-8afa-11ef-acee-4a6a3b2083d6'),('81617c79-95ef-11ef-acee-4a6a3b2083d6','2d83a3ca-8afa-11ef-acee-4a6a3b2083d6'),('e271682f-9488-11ef-acee-4a6a3b2083d6','2d83a3ca-8afa-11ef-acee-4a6a3b2083d6');
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'hrms'
--
/*!50003 DROP FUNCTION IF EXISTS `get_absent_employees_count` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" FUNCTION "get_absent_employees_count"() RETURNS int
    READS SQL DATA
BEGIN
    DECLARE absent_count INT;

    SELECT COUNT(DISTINCT employee_id) INTO absent_count
    FROM hrms.leave_record
    WHERE 
        status = 'approved' AND
        CURRENT_DATE() BETWEEN start_date AND end_date;

    RETURN absent_count;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `get_department_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" FUNCTION "get_department_id"(dep_name VARCHAR(50)) RETURNS char(36) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
    DECLARE dep_id CHAR(36);
    SELECT dept_id INTO dep_id FROM department WHERE name= dep_name LIMIT 1;
    RETURN dep_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `get_employment_state_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" FUNCTION "get_employment_state_id"(type VARCHAR(50),work_schedule VARCHAR(50)) RETURNS char(36) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
    DECLARE e_s_id CHAR(36);
        SELECT employment_state_id INTO e_s_id
        FROM employment_state
        WHERE employment_type=type AND employment_state.work_schedule=work_schedule;
    RETURN e_s_id;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `get_entry_count_in_employee_attribute` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" FUNCTION "get_entry_count_in_employee_attribute"() RETURNS int
BEGIN
    DECLARE entry_count INT;
    SET entry_count = (SELECT COUNT(*) FROM employee_custom_attribute);
    RETURN entry_count;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `get_leavetype_id_by_name` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" FUNCTION "get_leavetype_id_by_name"(leave_type_name VARCHAR(30)) RETURNS char(36) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
    DECLARE lt_id CHAR(36);
    
    SELECT lt.leave_type_id 
    INTO lt_id
    FROM leave_type lt
    WHERE lt.type = leave_type_name
    LIMIT 1;
    
    RETURN lt_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `get_paygrade_id_by_name` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" FUNCTION "get_paygrade_id_by_name"(pay_grade_name VARCHAR(50)) RETURNS char(36) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
    DECLARE pg_id CHAR(36);
    
    SELECT pg.pay_grade_id 
    INTO pg_id
    FROM pay_grade pg
    WHERE pg.name = pay_grade_name
    LIMIT 1;
    
    RETURN pg_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `get_pay_grade_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" FUNCTION "get_pay_grade_id"(payGrade VARCHAR(50)) RETURNS char(36) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
    DECLARE pg_id CHAR(36);
        SELECT pay_grade_id INTO pg_id
        FROM pay_grade
        WHERE name = payGrade;
    RETURN pg_id;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `get_role` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" FUNCTION "get_role"(userid CHAR(36)) RETURNS varchar(20) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
    DECLARE role_name VARCHAR(20);

    -- Select the role from the joined tables
    SELECT r.role_name INTO role_name
    FROM user_role ur
             INNER JOIN role r ON ur.role_id = r.role_id
    WHERE ur.user_id = userid;

    -- Return the role name, or NULL if not found
    RETURN role_name;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `get_supervisor_user_id_of_employee` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" FUNCTION "get_supervisor_user_id_of_employee"(emp_id CHAR(36)) RETURNS char(36) CHARSET utf8mb4
BEGIN
    DECLARE supervisor_user_id CHAR(36);

    -- Get the supervisor_id for the employee
    IF emp_id IS NOT NULL THEN
        SELECT user.user_id INTO supervisor_user_id
        FROM employee
        JOIN user ON employee.supervisor_id = user.employee_id
        WHERE employee.employee_id = emp_id;
    ELSE
        SET supervisor_user_id = NULL; -- No valid employee found
    END IF;

    RETURN supervisor_user_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `get_supervisor_user_id_of_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" FUNCTION "get_supervisor_user_id_of_user"(employee_user_id CHAR(36)) RETURNS char(36) CHARSET utf8mb4
BEGIN
    DECLARE employee_id_of_given_user CHAR(36);
    DECLARE supervisor_user_id CHAR(36);

    -- Get the employee_id for the given user_id
    SELECT employee.employee_id INTO employee_id_of_given_user
    FROM user
    JOIN employee ON user.employee_id = employee.employee_id
    WHERE user.user_id = employee_user_id;

    -- Get the supervisor_id for the employee
    IF employee_id_of_given_user IS NOT NULL THEN
        SELECT user.user_id INTO supervisor_user_id
        FROM employee
        JOIN user ON employee.supervisor_id = user.employee_id
        WHERE employee.employee_id = employee_id_of_given_user;
    ELSE
        SET supervisor_user_id = NULL; -- No valid employee found
    END IF;

    RETURN supervisor_user_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `get_total_employees_count` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" FUNCTION "get_total_employees_count"() RETURNS int
    READS SQL DATA
BEGIN
    DECLARE employee_count INT;

    SELECT COUNT(*) INTO employee_count
    FROM hrms.employee
    WHERE employee.termination_date IS NULL;

    RETURN employee_count;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `get_unread_notification_count` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" FUNCTION "get_unread_notification_count"(employee_user_id CHAR(36)) RETURNS int
    READS SQL DATA
BEGIN
    DECLARE notification_count INT;

    SELECT COUNT(*) INTO notification_count
    FROM hrms.notification
    WHERE notification.user_id = employee_user_id AND notification.status = 'unread'; 

    RETURN notification_count;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `get_userID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" FUNCTION "get_userID"(mail VARCHAR(255)) RETURNS char(36) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
    DECLARE U_ID CHAR(36);

    SELECT user.user_id INTO U_ID
    FROM user
    WHERE email=mail;

    RETURN U_ID;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `get_user_id_by_leave_record_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" FUNCTION "get_user_id_by_leave_record_id"(leave_id CHAR(36)) RETURNS char(36) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
    DECLARE output_user_id CHAR(36);

    SELECT user.user_id INTO output_user_id
    FROM leave_record lr
    JOIN employee ON lr.employee_id = employee.employee_id
    JOIN user ON employee.employee_id = user.employee_id
    WHERE lr.leave_record_id = leave_id; 

    RETURN output_user_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `add_Employee` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "add_Employee"(IN E_NIC VARCHAR(20), IN E_FIRST_NAME VARCHAR(50),
                                                 IN E_LAST_NAME VARCHAR(50), IN E_EMAIL VARCHAR(150), IN E_DOB DATE,
                                                 IN E_GENDER VARCHAR(10), IN E_ADDRESS VARCHAR(255),
                                                 IN E_MARITAL_STATUS VARCHAR(10), IN E_DEPARTMENT_ID CHAR(36),
                                                 IN E_SUPERVISOR_ID CHAR(36), IN E_JOB_TITLE_ID CHAR(36),
                                                 IN E_PAY_GRADE_ID VARCHAR(50), IN E_EMPLOYMENT_TYPE VARCHAR(50),
                                                 IN E_WORK_SCHEDULE VARCHAR(50), IN E_HIRED_DATE DATE,
                                                 IN E_TERMINATION DATE, IN E_CONTACT_NUMBER1 VARCHAR(20),
                                                 IN E_CONTACT_NUMBER2 VARCHAR(20),
                                                 IN EMERGENCY_CONTACT_NAME VARCHAR(50),
                                                 IN EMERGENCY_CONTACT_NUMBER VARCHAR(20),
                                                 IN EMERGENCY_CONTACT_RELATIONSHIP VARCHAR(20),
                                                 IN DEPENDANT_NAME VARCHAR(50), IN DEPENDANT_RELATIONSHIP VARCHAR(20),
                                                 IN DEPENDANT_DOB DATE, IN DEPENDANT_GENDER VARCHAR(10),
                                                 IN DEPENDENT_CONTACT_NUMBER VARCHAR(20))
BEGIN
    DECLARE error_message VARCHAR(255);
    DECLARE e_employment_state_id CHAR(36);
    DECLARE new_employee_id CHAR(36);

    START TRANSACTION;

    SET e_employment_state_id = get_employment_state_id(E_EMPLOYMENT_TYPE, E_WORK_SCHEDULE);
    SET new_employee_id = UUID();  -- Generate new UUID

    INSERT INTO employee(employee_id, NIC, first_name, last_name, date_of_birth, marital_state, gender, address, job_title_id, pay_grade_id, employment_state_id, supervisor_id, dept_id, hired_date, termination_date, email)
    VALUES (new_employee_id, E_NIC, E_FIRST_NAME, E_LAST_NAME, E_DOB, E_MARITAL_STATUS, E_GENDER, E_ADDRESS, E_JOB_TITLE_ID, E_PAY_GRADE_ID, e_employment_state_id, E_SUPERVISOR_ID, E_DEPARTMENT_ID, E_HIRED_DATE, E_TERMINATION, E_EMAIL);

    IF ROW_COUNT() = 1 THEN
        IF E_CONTACT_NUMBER1 IS NOT NULL THEN
            INSERT INTO contact_detail(employee_id, phone_number)
            VALUES (new_employee_id, E_CONTACT_NUMBER1);
        END IF;

        IF E_CONTACT_NUMBER2 IS NOT NULL THEN
            INSERT INTO contact_detail(employee_id, phone_number)
            VALUES (new_employee_id, E_CONTACT_NUMBER2);
        END IF;

        IF EMERGENCY_CONTACT_NAME IS NOT NULL AND EMERGENCY_CONTACT_NUMBER IS NOT NULL THEN
            INSERT INTO emergency_contact(employee_id, name, phone, relationship)
            VALUES (new_employee_id, EMERGENCY_CONTACT_NAME, EMERGENCY_CONTACT_NUMBER, EMERGENCY_CONTACT_RELATIONSHIP);
        END IF;

        IF DEPENDANT_NAME IS NOT NULL AND DEPENDANT_RELATIONSHIP IS NOT NULL THEN
            INSERT INTO dependent(employee_id, name, relationship, date_of_birth, gender, phone_number)
            VALUES(new_employee_id, DEPENDANT_NAME, DEPENDANT_RELATIONSHIP, DEPENDANT_DOB, DEPENDANT_GENDER, DEPENDENT_CONTACT_NUMBER);
        END IF;

        COMMIT;

        -- Return the new employee ID as a result
        SELECT new_employee_id AS employee_id;
    ELSE
        ROLLBACK;
        SET error_message = 'Failed to insert employee record.';
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = error_message;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `add_role` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "add_role"(
    IN userID CHAR(36),
    IN userRole VARCHAR(20)
)
BEGIN
    DECLARE r_id CHAR(36);
    DECLARE error_message VARCHAR(255);

    -- Get the role_id based on the role name
    SELECT role_id INTO r_id
    FROM role
    WHERE role_name = userRole
    LIMIT 1;

    -- Debug: Check if r_id is retrieved
    IF r_id IS NOT NULL THEN
        -- Insert into user_role table
        INSERT INTO user_role(user_id, role_id)
        VALUES (userID, r_id);
    ELSE
        -- Set the error message
        SET error_message = CONCAT('Role ', userRole, ' does not exist.');
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = error_message;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `approve_leave_record` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "approve_leave_record"(
    IN p_leave_record_id CHAR(36),  -- Input parameter for leave_record_id
    IN p_approved_date DATE         -- Input parameter for the approved date
)
BEGIN
    UPDATE leave_record
    SET 
        status = 'Approved',          -- Set the status to 'Approved'
        approved_date = p_approved_date -- Set the approved_date to the input date
    WHERE 
        leave_record_id = p_leave_record_id;  -- Match the provided leave_record_id
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "CreateUser"(IN p_employee_Id char(36), IN p_userName varchar(255),
                                               IN p_password_hash varchar(255), IN p_email varchar(255),
                                               IN p_role varchar(20))
BEGIN
    DECLARE userExists INT;
    DECLARE u_ID CHAR(36);
    DECLARE error_message VARCHAR(255);

    -- Start a transaction to ensure atomicity
    START TRANSACTION;

    -- Check if the user already exists based on email
    SELECT COUNT(*) INTO userExists
    FROM user
    WHERE employee_id = p_employee_Id OR email = p_email;
    
    IF userExists > 0 THEN
        -- User already exists, rollback the transaction and exit
        SELECT 'User already exists' AS result;
        ROLLBACK;

    ELSE
        -- Insert the new user into the users table
        INSERT INTO user (employee_id, username, password_hash, email)
        VALUES (p_employee_Id, p_userName, p_password_hash, p_email);

        -- Get the user ID using get_userID function
        SET u_ID = get_userID(p_email);

        -- Check if u_ID is valid (not NULL)
        IF u_ID IS NOT NULL THEN
            -- Add the role to the user by calling add_role
            CALL add_role(u_ID, p_role);

            -- Commit the transaction after successful role assignment
            COMMIT;
            SELECT 'User created successfully' AS result;
        ELSE
            -- Rollback if user ID couldn't be retrieved
            SET error_message = 'Error: Unable to retrieve user ID after insert.';
            ROLLBACK;
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = error_message;
        END IF;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `create_job_title` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "create_job_title"(IN p_title VARCHAR(30))
BEGIN
    INSERT INTO hrms.job_title(`title`)
    VALUES (p_title);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `create_notification` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "create_notification"(
    IN user_id CHAR(36),             -- Input parameter for user_id
    IN message VARCHAR(255),         -- Input parameter for the message
    IN status VARCHAR(12),           -- Input parameter for status, e.g., 'unread', 'read'
    IN type VARCHAR(25),             -- Input parameter for notification type    
    IN date DATETIME                 -- Input parameter for the date of the notification
    
)
BEGIN
    -- Check if the status is either 'read' or 'unread'
    IF status NOT IN ('read', 'unread') THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Invalid status value. Only "read" or "unread" are allowed.';
    ELSE
        -- Proceed with the insert if the status is valid
        INSERT INTO hrms.notification (user_id, message, status, type, date)
        VALUES (user_id, message, status, type, date);
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_notification_by_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "delete_notification_by_id"(IN id CHAR(36))
BEGIN
        DELETE FROM hrms.notification
        WHERE notification_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetCustomAttributesforGivenId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "GetCustomAttributesforGivenId"(IN IN_employee_id VARCHAR(36))
BEGIN
    SELECT 
        key1_id as id,
        key1_name AS key_name,
        value1 AS value
    FROM hrms.employee_custom_attributes_view
    WHERE employee_id = IN_employee_id AND key1_id IS NOT NULL
    UNION ALL
    SELECT 
        key2_id as id,
        key2_name AS key_name,
        value2 AS value
    FROM hrms.employee_custom_attributes_view
    WHERE employee_id = IN_employee_id AND key2_id IS NOT NULL
    UNION ALL
    SELECT 
        key3_id as id,
        key3_name AS key_name,
        value3 AS value
    FROM hrms.employee_custom_attributes_view
    WHERE employee_id = IN_employee_id AND key3_id IS NOT NULL;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetDepartmentsByCountry` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "GetDepartmentsByCountry"(IN CountryName VARCHAR(255))
BEGIN
    SELECT 
        name, 
        dept_id 
    FROM 
        hrms.department 
    WHERE 
        branch_id = (SELECT branch_id FROM branch WHERE country = CountryName);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetDependentDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "GetDependentDetails"(IN EmployeeID CHAR(36))
BEGIN
    SELECT 
        dependent.name as dependent_name,
        dependent.date_of_birth as dependent_birthday,
        dependent.gender as dependent_gender,
        dependent.phone_number as dependent_phone_number,
	dependent.relationship
    FROM 
        dependent
    WHERE 
        dependent.employee_id = EmployeeID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetEmergencyContacts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "GetEmergencyContacts"(IN Employee_id CHAR(36))
BEGIN
    SELECT name,contact_id, phone, relationship 
    FROM hrms.emergency_contact 
    WHERE emergency_contact.employee_id = Employee_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetEmployeeAttribute` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "GetEmployeeAttribute"(
    IN attribute_name VARCHAR(255)
)
BEGIN

    SELECT 
        e.employee_id,
        e.first_name,
        e.last_name,
        CASE ca.attribute_id
            WHEN ec.key1 THEN ec.value1
            WHEN ec.key2 THEN ec.value2
            WHEN ec.key3 THEN ec.value3
            ELSE NULL
        END AS attribute_value
    FROM 
        employee AS e
    JOIN 
        employee_custom_attribute AS ec ON e.employee_id = ec.employee_id
    JOIN
        custom_attribute AS ca ON ca.attribute_name = attribute_name
    WHERE 
        ca.attribute_id IN (ec.key1, ec.key2, ec.key3);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetEmployeeDataForView` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "GetEmployeeDataForView"(IN EmployeeID char(36))
BEGIN
SELECT 
    employee.employee_id as id,
    employee.first_name,
    employee.last_name,
    CONCAT(employee.first_name, ' ', employee.last_name) AS name, 
    employee.NIC,
    user.username,
    employee.date_of_birth as birthday,
    employee.gender,
    employee.job_title_id,
    job_title.title as job_title, 
    employee.pay_grade_id,
    pay_grade.name as pay_grade,
    employee.dept_id,
    hrms.department.name as department, 
    branch.country as branch,
    employee.hired_date,
    employee.employment_state_id,
    CONCAT(employment_state.employment_type, ' ', employment_state.work_schedule) as employment_status,
    
    employee.marital_state,
    contact_detail.phone_number,
    employee.email,
    employee.address,
    employee.supervisor_id,
    CONCAT(s.first_name, ' ', s.last_name) AS supervisor_name
    
FROM 
    employee 
    INNER JOIN job_title USING(job_title_id) 
    INNER JOIN department USING(dept_id)
    INNER JOIN employment_state USING(employment_state_id)
    INNER JOIN pay_grade USING(pay_grade_id)
    INNER JOIN branch USING(branch_id)
    LEFT outer JOIN user USING(employee_id)
    LEFT outer JOIN contact_detail USING(employee_id)
    LEFT OUTER JOIN employee s ON employee.supervisor_id = s.employee_id
    
WHERE 
        employee.employee_id =EmployeeID;


    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetEmployeeList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "GetEmployeeList"()
BEGIN
    SELECT 
        employee_id as id, 
        CONCAT(first_name, ' ', last_name) AS name, 
        job_title.title as job, 
        hrms.department.name as department, 
        gender, 
        hrms.user.username,
        employee.email
    FROM 
        employee 
        INNER JOIN job_title USING(job_title_id) 
        INNER JOIN department USING(dept_id) 
        left outer join user using(employee_id)
    ORDER BY 
        first_name, 
        last_name;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetEmployeeReport` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "GetEmployeeReport"(
    IN dept_name VARCHAR(255)  -- Changed to accept department name
)
BEGIN
    SELECT 
        e.employee_id,
        e.first_name,
        e.last_name,
        e.email,
        e.date_of_birth,
        e.gender,
        e.address,
        j.title AS job_title,
        d.name AS department_name,
        p.name AS pay_grade,
        es.employment_type
    FROM 
        employee e
    JOIN 
        job_title j ON e.job_title_id = j.job_title_id
    JOIN 
        department d ON e.dept_id = d.dept_id
    JOIN 
        pay_grade p ON e.pay_grade_id = p.pay_grade_id
    JOIN 
        employment_state es ON e.employment_state_id = es.employment_state_id
    WHERE 
        d.name = dept_name;  -- Compare with department name, not ID
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetLeaveBalance` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "GetLeaveBalance"(
    IN dept_name VARCHAR(50),
    IN leave_type_name VARCHAR(30)
)
BEGIN
    SELECT 
        e.employee_id AS employee_id,
        e.first_name AS name,
        
        lb.balance AS leaveBalance
    FROM 
        employee e
    JOIN 
        leave_balance lb ON e.employee_id = lb.employee_id
    JOIN 
        leave_type lt ON lb.leave_type_id = lt.leave_type_id
    JOIN 
        department d ON e.dept_id = d.dept_id
    WHERE 
        d.name = dept_name AND lt.type = leave_type_name;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetLeaveBalanceForDashboard` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "GetLeaveBalanceForDashboard"(
    IN p_employee_id CHAR(36)   -- Input parameter for employee_id
)
BEGIN
    SELECT 
        type,                  -- Select the leave type
        balance                -- Select the leave balance
    FROM 
        leave_balance lb          -- From leave_balance table
    JOIN 
        leave_type lt ON lt.leave_type_id = lb.leave_type_id  -- Join with leave_type table on leave_type_id
    WHERE 
        lb.employee_id = p_employee_id;  -- Match the provided employee_id
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetLeaveDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "GetLeaveDetails"(IN Employee_id CHAR(36))
BEGIN
    SELECT lr.start_date, lr.end_date, lt.type, lr.status
    FROM leave_record lr
    JOIN leave_type lt
    ON lr.leave_type_id = lt.leave_type_id
    WHERE lr.employee_id = Employee_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetLeaveReport` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "GetLeaveReport"(IN department VARCHAR(50))
BEGIN
    SELECT 
        e.first_name AS employee_name,
        jt.title AS job_title,
        lr.start_date AS leave_start_date,
        lt.type AS leave_type,
        lr.status AS leave_status
    FROM employee e
    JOIN job_title jt ON e.job_title_id = jt.job_title_id
    JOIN department d ON e.dept_id = d.dept_id
    JOIN leave_record lr ON e.employee_id = lr.employee_id
    JOIN leave_type lt ON lr.leave_type_id = lt.leave_type_id
    WHERE d.name = department
    ORDER BY e.first_name, lr.start_date;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetPayGradeNames` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "GetPayGradeNames"()
BEGIN
    SELECT * FROM hrms.pay_grade;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetSupervisors` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "GetSupervisors"()
BEGIN
    SELECT JSON_ARRAYAGG(
                   JSON_OBJECT('id', id, 'name', name)
           ) AS supervisors
    FROM supervisors;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_branch_details` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "get_branch_details"()
BEGIN
    SELECT * 
    FROM hrms.branch;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_custom_attributes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "get_custom_attributes"()
BEGIN
    SELECT *
    FROM custom_attribute;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_job_titles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "get_job_titles"()
BEGIN
    SELECT *
    FROM hrms.job_title
    ORDER BY title;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_leave_types` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "get_leave_types"()
BEGIN
    SELECT *
    FROM hrms.leave_type;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_notification_all` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "get_notification_all"()
BEGIN
	SELECT * 
	FROM hrms.notification;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_notification_by_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "get_notification_by_id"(IN id CHAR(36))
BEGIN
	SELECT * 
	FROM hrms.notification 
	WHERE hrms.notification.notification_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_notification_by_user_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "get_notification_by_user_id"(IN id CHAR(36))
BEGIN
	SELECT * 
	FROM hrms.notification
	WHERE hrms.notification.user_id = id
    ORDER BY notification.date DESC ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_organization_details` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "get_organization_details"()
BEGIN
    SELECT name, address, reg_number  
    FROM hrms.organization;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_pay_grade_leave_limits` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "get_pay_grade_leave_limits"()
BEGIN
    SELECT * FROM pay_grade_leave_limits;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_pending_leaves` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "get_pending_leaves"(IN sup_id CHAR(36))
BEGIN
    SELECT 
        lr.leave_record_id,
        e.first_name,
        lt.type ,
        lr.start_date,
        lr.end_date,
        lb.balance,
        lr.reason
    FROM 
        leave_record lr
    JOIN 
        employee e ON lr.employee_id = e.employee_id
    JOIN 
        leave_type lt ON lt.leave_type_id = lr.leave_type_id
    JOIN 
        leave_balance lb ON lb.employee_id = lr.employee_id 
        AND lb.leave_type_id = lr.leave_type_id
    WHERE 
        lr.status = 'Pending'
        AND e.supervisor_id = sup_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_profile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "get_profile"(IN e_id char(36))
BEGIN
    -- Variable declarations
    DECLARE R_USER_NAME VARCHAR(50);
    DECLARE R_FIRST_NAME VARCHAR(50);
    DECLARE R_LAST_NAME VARCHAR(50);
    DECLARE R_NIC VARCHAR(20);
    DECLARE R_EMAIL VARCHAR(150);
    DECLARE R_DEPARTMENT VARCHAR(50);
    DECLARE R_DOB DATE;
    DECLARE R_MARITAL_STATE VARCHAR(10);
    DECLARE R_GENDER VARCHAR(10);
    DECLARE R_ADDRESS VARCHAR(255);
    DECLARE R_JOBTITLE VARCHAR(30);
    DECLARE R_PAYGRADE VARCHAR(50);
    DECLARE R_SUPERVISOR_NAME VARCHAR(50);
    DECLARE R_SUPERVISOR_ID CHAR(36);
    DECLARE R_EMPLOYMENT_TYPE VARCHAR(50);
    DECLARE R_WORK_SCHEDULE VARCHAR(50);
    DECLARE R_EMERGENCY_CONTACT_NAME VARCHAR(50);
    DECLARE R_EMERGENCY_CONTACT_PHONE VARCHAR(20);
    DECLARE R_EMERGENCY_CONTACT_RELATIONSHIP VARCHAR(20);
    DECLARE R_DEPENDANT_NAME VARCHAR(50);
    DECLARE R_PHONE1 VARCHAR(20);
    DECLARE R_PHONE2 VARCHAR(20);

    -- Custom attributes variable
    DECLARE R_CUSTOM_ATTRIBUTES JSON DEFAULT JSON_ARRAY();

    -- Fetch Employee details
    SELECT u.username, e.first_name, e.last_name, e.nic, e.email, d.name, e.date_of_birth, e.supervisor_id,
           e.marital_state, e.gender, e.address, jt.title, pg.name, es.employment_type,
           es.work_schedule
    INTO R_USER_NAME, R_FIRST_NAME, R_LAST_NAME, R_NIC, R_EMAIL, R_DEPARTMENT, R_DOB, R_SUPERVISOR_ID,
        R_MARITAL_STATE, R_GENDER, R_ADDRESS, R_JOBTITLE, R_PAYGRADE, R_EMPLOYMENT_TYPE,
        R_WORK_SCHEDULE
    FROM employee e
             JOIN user u ON u.employee_id = e.employee_id
             JOIN department d ON d.dept_id = e.dept_id
             JOIN job_title jt ON jt.job_title_id = e.job_title_id
             JOIN pay_grade pg ON pg.pay_grade_id = e.pay_grade_id
             JOIN employment_state es ON es.employment_state_id = e.employment_state_id
    WHERE e.employee_id = e_id;

    -- Fetch Emergency Contact details
    SELECT ec.name, ec.phone, ec.relationship
    INTO R_EMERGENCY_CONTACT_NAME, R_EMERGENCY_CONTACT_PHONE, R_EMERGENCY_CONTACT_RELATIONSHIP
    FROM emergency_contact ec
    WHERE ec.employee_id = e_id
    LIMIT 1;

    -- Fetch Dependent details (if any)
    SELECT d.name
    INTO R_DEPENDANT_NAME
    FROM dependent d
    WHERE d.employee_id = e_id
    LIMIT 1;

    -- Fetch supervisor
    SELECT s.name INTO R_SUPERVISOR_NAME
    FROM supervisors s
    WHERE s.id = R_SUPERVISOR_ID;

    -- Fetch phone numbers
    SET R_PHONE1 = (SELECT phone_number FROM contact_detail WHERE employee_id = e_id LIMIT 1);
    SET R_PHONE2 = (SELECT phone_number FROM contact_detail WHERE employee_id = e_id LIMIT 1 OFFSET 1);

    -- Fetch custom attributes from the view
    SELECT (
                   JSON_OBJECT(
                           'key1_id', COALESCE(key1_id,''),
                           'key1_name',COALESCE(key1_name,''),
                           'value1', COALESCE(value1, ''),
                           'key2_id', COALESCE(key2_id,''),
                           'key2_name', COALESCE(key2_name,''),
                           'value2', COALESCE(value2, ''),
                           'key3_id', COALESCE(key3_id,''),
                           'key3_name', COALESCE(key3_name,''),
                           'value3', COALESCE(value3, '')
                   )
           ) INTO R_CUSTOM_ATTRIBUTES
    FROM employee_custom_attributes_view
    WHERE employee_id = e_id;

    -- Construct JSON result
    SELECT JSON_OBJECT(
                   'user_name', R_USER_NAME,
                   'first_name', R_FIRST_NAME,
                   'last_name', R_LAST_NAME,
                   'nic', R_NIC,
                   'email', R_EMAIL,
                   'department', R_DEPARTMENT,
                   'date_of_birth', R_DOB,
                   'marital_state', R_MARITAL_STATE,
                   'gender', R_GENDER,
                   'address', R_ADDRESS,
                   'job_title', R_JOBTITLE,
                   'pay_grade', R_PAYGRADE,
                   'supervisor', R_SUPERVISOR_NAME,
                   'employment_type', R_EMPLOYMENT_TYPE,
                   'work_schedule', R_WORK_SCHEDULE,
                   'emergency_contact', JSON_OBJECT(
                           'name', R_EMERGENCY_CONTACT_NAME,
                           'phone', R_EMERGENCY_CONTACT_PHONE,
                           'relationship', R_EMERGENCY_CONTACT_RELATIONSHIP
                                        ),
                   'dependent', JSON_OBJECT(
                           'name', R_DEPENDANT_NAME
                                ),
                   'contact_numbers', JSON_OBJECT(
                           'primary', R_PHONE1,
                           'secondary', R_PHONE2
                                      ),
                   'custom_attributes', R_CUSTOM_ATTRIBUTES
           ) AS profile;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_remaining_leave_count` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "get_remaining_leave_count"(IN _id CHAR(36), IN _year INT)
BEGIN
    SELECT lt.type, lb.balance 
    FROM hrms.`leave_type` lt
    JOIN hrms.`leave_balance` lb USING (`leave_type_id`)
    WHERE lb.`employee_id` = _id AND lb.year = _year;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_role_count` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "get_role_count"()
BEGIN
    SELECT role.role_name, COUNT(user_role.user_id) AS role_count  
    FROM hrms.user_role
    RIGHT OUTER JOIN hrms.role USING (role_id)
    GROUP BY role.role_name;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_upcoming_leaves` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "get_upcoming_leaves"(IN emp_id CHAR(36))
BEGIN
    SELECT lt.type, lr.start_date, lr.end_date, lr.status  
    FROM leave_type lt JOIN leave_record lr USING(leave_type_id)
    WHERE lr.employee_id = emp_id AND lr.start_date >= CURRENT_DATE();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertDependent` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "InsertDependent"(
    IN p_employee_id VARCHAR(36),
    IN p_name VARCHAR(255),
    IN p_relationship VARCHAR(255),
    IN p_date_of_birth DATE,
    IN p_gender VARCHAR(10),
    IN p_phone_number VARCHAR(15)
)
BEGIN
    INSERT INTO dependent (employee_id, name, relationship, date_of_birth, gender, phone_number)
    VALUES (p_employee_id, p_name, p_relationship, p_date_of_birth, p_gender, p_phone_number);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertEmergencyContact` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "InsertEmergencyContact"(
    IN p_employee_id VARCHAR(36),
    IN p_name VARCHAR(255),
    IN p_phone VARCHAR(15),
    IN p_relationship VARCHAR(255)
)
BEGIN
    INSERT INTO emergency_contact (employee_id, name, phone, relationship)
    VALUES (p_employee_id, p_name, p_phone, p_relationship);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertPhoneNumber` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "InsertPhoneNumber"(
    IN p_employee_id VARCHAR(36),
    IN p_phone_number VARCHAR(15)
)
BEGIN
    INSERT INTO contact_detail (employee_id, phone_number)
    VALUES (p_employee_id, p_phone_number);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insert_custom_attribute` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "insert_custom_attribute"(IN attributeKey varchar(50), IN defaultValue varchar(100))
BEGIN
    DECLARE custom_attribute_id CHAR(36);
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            -- Rollback in case of an error
            ROLLBACK;
        END;

    -- Generate a UUID for the new custom attribute ID
    SET custom_attribute_id = UUID();

    -- Begin transaction
    START TRANSACTION;

    -- Insert the new custom attribute
    INSERT INTO custom_attribute(attribute_id, attribute_name)
    VALUES (custom_attribute_id, attributeKey);

    -- Attempt to update the first available key-value pair in sequence
    -- Try key1 and value1 first
    UPDATE employee_custom_attribute
    SET key1 = custom_attribute_id, value1 = defaultValue
    WHERE key1 IS NULL;
    

    -- If no rows were affected, try key2 and value2
    IF ROW_COUNT() = 0 THEN
        UPDATE employee_custom_attribute
        SET key2 = custom_attribute_id, value2 = defaultValue
        WHERE key2 IS NULL;
       
    END IF;

    -- If no rows were affected, try key3 and value3
    IF ROW_COUNT() = 0 THEN
        UPDATE employee_custom_attribute
        SET key3 = custom_attribute_id, value3 = defaultValue
        WHERE key3 IS NULL;
      
    END IF;

    -- Commit the transaction if no error
    COMMIT;
    SELECT custom_attribute_id AS attribute_id, attributeKey AS attribute_name;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insert_custom_attributes_for_employee` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "insert_custom_attributes_for_employee"(
    IN IN_employee_id CHAR(36),
    IN IN_key CHAR(36),
    IN IN_value VARCHAR(100)
)
BEGIN
    -- Check if the employee_id exists; insert if not
    IF NOT EXISTS (SELECT 1 FROM employee_custom_attribute WHERE employee_id = IN_employee_id) THEN
        INSERT INTO employee_custom_attribute(employee_id) VALUES (IN_employee_id);
    END IF;

    -- Determine which key column (`key1`, `key2`, `key3`) has the input key in any existing rows
    IF EXISTS (SELECT 1 FROM employee_custom_attribute WHERE key1 = IN_key) THEN
        -- If key1 column contains the input key, set value1 for this employee
        UPDATE employee_custom_attribute
        SET key1=IN_key,value1 = IN_value
        WHERE employee_id = IN_employee_id;

    ELSEIF EXISTS (SELECT 1 FROM employee_custom_attribute WHERE key2 = IN_key) THEN
        -- If key2 column contains the input key, set value2 for this employee
        UPDATE employee_custom_attribute
        SET key2=IN_key,value2 = IN_value
        WHERE employee_id = IN_employee_id;

    ELSEIF EXISTS (SELECT 1 FROM employee_custom_attribute WHERE key3 = IN_key) THEN
        -- If key3 column contains the input key, set value3 for this employee
        UPDATE employee_custom_attribute
        SET key3=IN_key,value3 = IN_value
        WHERE employee_id = IN_employee_id;


    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insert_first_custom_attribute` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "insert_first_custom_attribute"(
    IN C_ATTRIBUTE_NAME VARCHAR(50),
    IN DEFAULT_VALUE VARCHAR(100)
)
BEGIN
    DECLARE custom_attribute_id CHAR(36);

    -- Generate a unique ID for the custom attribute
    SET custom_attribute_id = UUID();


    INSERT INTO custom_attribute(attribute_id, attribute_name)
    VALUES (custom_attribute_id, C_ATTRIBUTE_NAME);


    INSERT INTO employee_custom_attribute (employee_id, key1, value1)
    SELECT employee_id, custom_attribute_id, DEFAULT_VALUE
    FROM employee;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insert_inquiry` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "insert_inquiry"(
    IN I_NAME VARCHAR(100),
    IN I_EMAIL VARCHAR(100),
    IN I_SUBJECT VARCHAR(100),
    IN I_DESCRIPTION VARCHAR(255),
    IN I_TYPE VARCHAR(20),
    IN I_REPLY_STATUS BINARY
)
BEGIN
    INSERT INTO inquiry( name, email, subject, description, type, reply_status)
        VALUES (I_NAME,I_EMAIL,I_SUBJECT,I_DESCRIPTION,I_TYPE,I_REPLY_STATUS);
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insert_leave_record` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "insert_leave_record"(
    IN p_employee_id CHAR(36),      -- Input parameter for employee_id
    IN p_leave_type_id VARCHAR(50),    -- Input parameter for leave type (name, not ID)
    IN p_start_date DATE,           -- Input parameter for start date
    IN p_end_date DATE,             -- Input parameter for end date
    IN p_applied_date DATE,          -- Input parameter for applied date
    IN p_reason  VARCHAR(255)
)
BEGIN
    -- DECLARE v_leave_type_id CHAR(36);

    -- Get the leave_type_id from the leave_type table based on the type name
    -- SELECT leave_type_id INTO v_leave_type_id
    -- FROM leave_type
    -- WHERE type = p_leave_type
    -- LIMIT 1;

    -- Insert the new leave record
    INSERT INTO leave_record (
        leave_record_id,
        employee_id,
        leave_type_id,
        start_date,
        end_date,
        status,
        applied_date,
        approved_date,
        reason
    ) VALUES (
        UUID(),                       -- Generate a new UUID for leave_record_id
        p_employee_id,                -- Use the provided employee_id
        p_leave_type_id,              -- Use the leave_type_id retrieved from leave_type table
        p_start_date,                 -- Use the provided start date
        p_end_date,                   -- Use the provided end date
        'Pending',                    -- Set status as 'Pending'
        p_applied_date,               -- Use the provided applied date
        NULL,                         -- Set approved_date as NULL by default
        p_reason
    );
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `leave_balance` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "leave_balance"(
    IN p_employee_id CHAR(36),     -- Input parameter for employee_id
    IN TypeID    CHAR(36)            -- Input parameter for leave type
)
BEGIN
    SELECT 
        lt.type,                  -- Select the leave type
        lb.balance                -- Select the leave balance
    FROM 
        leave_balance lb          -- From leave_balance table
    JOIN 
        leave_type lt ON lt.leave_type_id = lb.leave_type_id  -- Join with leave_type table on leave_type_id
    WHERE 
        lb.employee_id = p_employee_id AND  -- Match the provided employee_id
        lt.leave_type_id = TypeID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `reject_leave_record` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "reject_leave_record"(
    IN p_leave_record_id CHAR(36)  -- Input parameter for leave_record_id
             -- Input parameter for the rejected date
)
BEGIN
    UPDATE leave_record
    SET 
        status = 'Rejected'             -- Set the status to 'Rejected'
    WHERE 
        leave_record_id = p_leave_record_id;  -- Match the provided leave_record_id
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `remove_custom_attribute` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "remove_custom_attribute"(IN C_ATTRIBUTE_ID CHAR(36))
BEGIN
    -- Start transaction to ensure atomicity
    START TRANSACTION;

    -- Update employee_custom_attribute to nullify keys and values where they match the custom attribute ID
    UPDATE employee_custom_attribute
    SET key1 = NULL, value1 = NULL
    WHERE key1 = C_ATTRIBUTE_ID;

    UPDATE employee_custom_attribute
    SET key2 = NULL, value2 = NULL
    WHERE key2 = C_ATTRIBUTE_ID;

    UPDATE employee_custom_attribute
    SET key3 = NULL, value3 = NULL
    WHERE key3 = C_ATTRIBUTE_ID;

    -- Delete the custom attribute from custom_attribute table
    DELETE FROM custom_attribute
    WHERE attribute_id = C_ATTRIBUTE_ID;

    -- Commit the transaction
    COMMIT;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdatecustomAttributes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "UpdatecustomAttributes"(
    IN p_employee_id VARCHAR(36),
    IN In_custom_Attributes JSON
)
BEGIN
    DECLARE p_value1 VARCHAR(100);
    DECLARE p_value2 VARCHAR(100);
    DECLARE p_value3 VARCHAR(100);

    IF JSON_LENGTH(In_custom_Attributes) = 1 THEN
        SET p_value1 = JSON_UNQUOTE(JSON_EXTRACT(In_custom_Attributes, '$[0].value'));
        UPDATE employee_custom_attribute 
        SET value1 = p_value1
        WHERE employee_id = p_employee_id;
    END IF;

    IF JSON_LENGTH(In_custom_Attributes) = 2 THEN
        SET p_value1 = JSON_UNQUOTE(JSON_EXTRACT(In_custom_Attributes, '$[0].value'));
        SET p_value2 = JSON_UNQUOTE(JSON_EXTRACT(In_custom_Attributes, '$[1].value'));
        UPDATE employee_custom_attribute 
        SET value1 = p_value1,
            value2 = p_value2
        WHERE employee_id = p_employee_id;
    END IF;

    IF JSON_LENGTH(In_custom_Attributes) = 3 THEN
        SET p_value1 = JSON_UNQUOTE(JSON_EXTRACT(In_custom_Attributes, '$[0].value'));
        SET p_value2 = JSON_UNQUOTE(JSON_EXTRACT(In_custom_Attributes, '$[1].value'));
        SET p_value3 = JSON_UNQUOTE(JSON_EXTRACT(In_custom_Attributes, '$[2].value'));
        UPDATE employee_custom_attribute 
        SET value1 = p_value1,
            value2 = p_value2,
            value3 = p_value3
        WHERE employee_id = p_employee_id;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateEmployeeDataInDataBase` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "UpdateEmployeeDataInDataBase"(
    IN p_employee_id VARCHAR(36),
    IN p_first_name VARCHAR(255),
    IN p_last_name VARCHAR(255),
    IN p_NIC VARCHAR(255),
    IN p_date_of_birth DATE,
    IN p_dept_id VARCHAR(36),
    IN p_job_title_id VARCHAR(36),
    IN p_pay_grade_id VARCHAR(36),
    IN p_employment_state_id VARCHAR(36),
    IN p_address VARCHAR(255),
    IN p_marital_state VARCHAR(255),
    IN p_phone_numbers JSON,
    IN p_dependents JSON,
    IN p_emergency_contacts JSON
)
BEGIN
    -- Declare all variables at the beginning
    DECLARE phone_number VARCHAR(15);
    DECLARE dep_name VARCHAR(255);
    DECLARE dep_relationship VARCHAR(255);
    DECLARE dep_date_of_birth_str VARCHAR(10); -- Change to VARCHAR to extract from JSON
    DECLARE dep_date_of_birth DATE;
    DECLARE dep_gender VARCHAR(10);
    DECLARE dep_phone_number VARCHAR(15);
    DECLARE em_name VARCHAR(255);
    DECLARE em_phone VARCHAR(15);
    DECLARE em_relationship VARCHAR(255);
    DECLARE i INT DEFAULT 0;

    -- Update the main employee data
    UPDATE employee
    SET first_name = p_first_name,
        last_name = p_last_name,
        NIC = p_NIC,
        date_of_birth = p_date_of_birth,
        dept_id = p_dept_id,
        job_title_id = p_job_title_id,
        pay_grade_id = p_pay_grade_id,
        employment_state_id = p_employment_state_id,
        address = p_address,
        marital_state = p_marital_state
    WHERE employee_id = p_employee_id;

    -- Delete existing related data
    DELETE FROM contact_detail WHERE employee_id = p_employee_id;
    DELETE FROM dependent WHERE employee_id = p_employee_id;
    DELETE FROM emergency_contact WHERE employee_id = p_employee_id;

    -- Insert new phone numbers
    IF JSON_LENGTH(p_phone_numbers) > 0 THEN
        SET i = 0;
        WHILE i < JSON_LENGTH(p_phone_numbers) DO
            SET phone_number = JSON_UNQUOTE(JSON_EXTRACT(p_phone_numbers, CONCAT('$[', i, ']')));
            IF phone_number IS NOT NULL AND phone_number != '' THEN
                INSERT INTO contact_detail (employee_id, phone_number) VALUES (p_employee_id, phone_number);
            END IF;
            SET i = i + 1;
        END WHILE;
    END IF;

    -- Insert new dependents
    IF JSON_LENGTH(p_dependents) > 0 THEN
        SET i = 0;
        WHILE i < JSON_LENGTH(p_dependents) DO
            SET dep_name = JSON_UNQUOTE(JSON_EXTRACT(p_dependents, CONCAT('$[', i, '].name')));
            SET dep_relationship = JSON_UNQUOTE(JSON_EXTRACT(p_dependents, CONCAT('$[', i, '].relationship')));
            SET dep_date_of_birth_str = JSON_UNQUOTE(JSON_EXTRACT(p_dependents, CONCAT('$[', i, '].date_of_birth')));
            SET dep_gender = JSON_UNQUOTE(JSON_EXTRACT(p_dependents, CONCAT('$[', i, '].gender')));
            SET dep_phone_number = JSON_UNQUOTE(JSON_EXTRACT(p_dependents, CONCAT('$[', i, '].phone_number')));
            
            -- Validate dependent details
            IF dep_name IS NOT NULL AND dep_name != '' AND
               dep_relationship IS NOT NULL AND dep_relationship != '' AND
               dep_date_of_birth_str IS NOT NULL AND dep_date_of_birth_str != '' AND
               dep_gender IS NOT NULL AND dep_gender != '' THEN

                -- Ensure valid date format
                SET dep_date_of_birth = STR_TO_DATE(dep_date_of_birth_str, '%Y-%m-%d');
                IF dep_date_of_birth IS NOT NULL THEN
                    INSERT INTO dependent (employee_id, name, relationship, date_of_birth, gender, phone_number)
                    VALUES (p_employee_id, dep_name, dep_relationship, dep_date_of_birth, dep_gender, dep_phone_number);
                ELSE
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Invalid date format for dependent date of birth';
                END IF;
            END IF;
            SET i = i + 1;
        END WHILE;
    END IF;

    -- Insert new emergency contacts
    IF JSON_LENGTH(p_emergency_contacts) > 0 THEN
        SET i = 0;
        WHILE i < JSON_LENGTH(p_emergency_contacts) DO
            SET em_name = JSON_UNQUOTE(JSON_EXTRACT(p_emergency_contacts, CONCAT('$[', i, '].name')));
            SET em_phone = JSON_UNQUOTE(JSON_EXTRACT(p_emergency_contacts, CONCAT('$[', i, '].phone')));
            SET em_relationship = JSON_UNQUOTE(JSON_EXTRACT(p_emergency_contacts, CONCAT('$[', i, '].relationship')));
            
            IF em_name IS NOT NULL AND em_name != '' AND
               em_phone IS NOT NULL AND em_phone != '' THEN
                INSERT INTO emergency_contact (employee_id, name, phone, relationship)
                VALUES (p_employee_id, em_name, em_phone, em_relationship);
            END IF;
            SET i = i + 1;
        END WHILE;
    END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_branch_details` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "update_branch_details"(
    IN p_branch_id CHAR(36),
    IN p_country VARCHAR(50),
    IN p_address VARCHAR(250),
    IN p_organization_id CHAR(36),
    IN p_branch_name VARCHAR(100),
    IN p_phone_number VARCHAR(25)
)
BEGIN
    UPDATE branch
    SET 
        country = p_country,
        address = p_address,
        organization_id = p_organization_id,
        branch_name = p_branch_name,
        phone_number = p_phone_number
    WHERE branch_id = p_branch_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_max_leave_count` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "update_max_leave_count"(
    IN p_pay_grade_name VARCHAR(50),  -- Pay grade name as input
    IN p_leave_type_name VARCHAR(30),  -- Leave type name as input
    IN p_new_count INT                  -- New max leave count as input
)
BEGIN
    DECLARE v_pay_grade_id CHAR(36);   -- Variable to hold pay grade ID
    DECLARE v_leave_type_id CHAR(36);   -- Variable to hold leave type ID

    -- Get the pay grade ID using the function
    SET v_pay_grade_id = get_paygrade_id_by_name(p_pay_grade_name);
    
    -- Get the leave type ID using the function
    SET v_leave_type_id = get_leavetype_id_by_name(p_leave_type_name);
    
    -- Update the max_leave_count in the table
    UPDATE max_leave_count
    SET max_leave_count = p_new_count
    WHERE pay_grade_id = v_pay_grade_id AND leave_type_id = v_leave_type_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_notification_status` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "update_notification_status"(IN id CHAR(36), IN new_status VARCHAR(12))
BEGIN
    DECLARE notification_exists INT;

    -- Check if the notification_id exists
    SELECT COUNT(*)
    INTO notification_exists
    FROM hrms.notification
    WHERE notification_id = id;

    -- Check if the new_status is either 'read' or 'unread'
    IF notification_exists = 0 THEN
        -- Raise an error if the notification_id does not exist
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Notification ID does not exist.';
    ELSEIF new_status IN ('read', 'unread') THEN
        -- Proceed with the update if both conditions are met
        UPDATE hrms.notification
        SET status = new_status
        WHERE notification_id = id;
    ELSE
        -- Raise an error for invalid status
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Invalid status value. Only "read" or "unread" are allowed.';
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `user_login` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ONLY_FULL_GROUP_BY,ANSI,STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER="doadmin"@"%" PROCEDURE "user_login"(IN p_email varchar(255))
BEGIN
    DECLARE emp_id CHAR(36);
    DECLARE login_status VARCHAR(255);
    DECLARE stored_password_hash VARCHAR(255);
    DECLARE role VARCHAR(20);
    DECLARE u_id CHAR(36);

    -- Get the stored password hash
    SELECT user.password_hash INTO stored_password_hash
    FROM user
    WHERE email = p_email;

    -- Check if the user exists
    IF stored_password_hash IS NOT NULL THEN
        SELECT employee_id, user_id INTO emp_id, u_id
        FROM user
        WHERE email = p_email;

        -- Get the role
        SET role = get_role(u_id);


        -- Set the login status
        SET login_status = 'Success';
    ELSE
        -- Set the login status
        SET login_status = 'Invalid credentials';
        SET emp_id = NULL;
    END IF;

    -- Log the login attempt
    INSERT INTO login_attempts (email, attempt_time, status)
    VALUES (p_email, NOW(), login_status);

    -- Return the result as a JSON object
    SELECT JSON_OBJECT('employee_id', emp_id, 'role', role, 'password', stored_password_hash, 'login_status', login_status,'user_id',u_id) AS result;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `admin_name`
--

/*!50001 DROP VIEW IF EXISTS `admin_name`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`doadmin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `admin_name` AS select `user`.`employee_id` AS `employee_id`,`user`.`username` AS `username` from ((`user` join `user_role` on((`user`.`user_id` = `user_role`.`user_id`))) join `role` on((`user_role`.`role_id` = `role`.`role_id`))) where (`role`.`role_name` = 'Admin') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `employee_custom_attributes_view`
--

/*!50001 DROP VIEW IF EXISTS `employee_custom_attributes_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`doadmin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `employee_custom_attributes_view` AS select `e`.`employee_id` AS `employee_id`,`ca1`.`attribute_id` AS `key1_id`,`ca1`.`attribute_name` AS `key1_name`,`eca`.`value1` AS `value1`,`ca2`.`attribute_id` AS `key2_id`,`ca2`.`attribute_name` AS `key2_name`,`eca`.`value2` AS `value2`,`ca3`.`attribute_id` AS `key3_id`,`ca3`.`attribute_name` AS `key3_name`,`eca`.`value3` AS `value3` from ((((`employee` `e` left join `employee_custom_attribute` `eca` on((`e`.`employee_id` = `eca`.`employee_id`))) left join `custom_attribute` `ca1` on((`eca`.`key1` = `ca1`.`attribute_id`))) left join `custom_attribute` `ca2` on((`eca`.`key2` = `ca2`.`attribute_id`))) left join `custom_attribute` `ca3` on((`eca`.`key3` = `ca3`.`attribute_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `hr_managers`
--

/*!50001 DROP VIEW IF EXISTS `hr_managers`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`doadmin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `hr_managers` AS select `user`.`user_id` AS `user_id`,`user`.`username` AS `username` from `user` where `user`.`user_id` in (select `user_role`.`user_id` from (`user_role` join `role` on((`user_role`.`role_id` = `role`.`role_id`))) where (`role`.`role_name` = 'HR Manager')) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `pay_grade_leave_limits`
--

/*!50001 DROP VIEW IF EXISTS `pay_grade_leave_limits`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`doadmin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `pay_grade_leave_limits` AS select `pg`.`name` AS `name`,`lt`.`type` AS `type`,`mlc`.`max_leave_count` AS `max_leave_count` from ((`pay_grade` `pg` join `max_leave_count` `mlc` on((`pg`.`pay_grade_id` = `mlc`.`pay_grade_id`))) join `leave_type` `lt` on((`mlc`.`leave_type_id` = `lt`.`leave_type_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `supervisors`
--

/*!50001 DROP VIEW IF EXISTS `supervisors`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`doadmin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `supervisors` AS select `u`.`employee_id` AS `id`,`u`.`username` AS `name` from `user` `u` where `u`.`user_id` in (select `user_role`.`user_id` from (`user_role` join `role` on((`user_role`.`role_id` = `role`.`role_id`))) where (`role`.`role_name` = 'Supervisor')) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-30 23:39:41
