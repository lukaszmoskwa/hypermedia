CREATE DATABASE  IF NOT EXISTS `Hypermedia` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `Hypermedia`;
-- MySQL dump 10.13  Distrib 5.7.12, for Linux (i686)
--
-- Host: localhost    Database: Hypermedia
-- ------------------------------------------------------
-- Server version	5.7.12-0ubuntu1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Assistance`
--

DROP TABLE IF EXISTS `Assistance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Assistance` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Highlight` int(11) DEFAULT NULL,
  `Category` varchar(45) DEFAULT NULL,
  `SubCategory` varchar(45) DEFAULT NULL,
  `Name` varchar(45) DEFAULT NULL,
  `Description` longtext,
  `FAQ` longtext,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Assistance`
--

LOCK TABLES `Assistance` WRITE;
/*!40000 ALTER TABLE `Assistance` DISABLE KEYS */;
INSERT INTO `Assistance` VALUES (1,1,'Technical Support','Smartphone and Tablet','Connect Online with your mobile device','Normally marketed by TIM phones are already prepared for the Internet connection automatically, otherwise you run the service configuration procedure.\nHere are the steps to take to find out whether your phone is configured: <br><br>\n\n     If you have a TIM mobile phone, simply click on the icon of the Internet browser;\n     If you do not have a TIM mobile phone, simply click on the icon of the Internet browser and type the \"wap.tim.it\" address. <br><br>\n\nIf you fail to connect in these ways, your phone needs to be configured.','<b>Q: How to retrive back your password if you forgot it?</b><br>\nA: Check this link www.tim.it/password-forget and follow the instructions to retrive the password<br>\n<br>\n<b>Q: How to open google?</b><br>\nA: Go on google.it<br>\n<br>\n<b>Q: How to turn off your connection</b><br>\nA: Turn off your mobile device. It\'s safer.<br>'),(2,0,'Technical Support','Smartphone and Tablet','Tim Application Store',NULL,NULL),(3,0,'Technical Support','Smartphone and Tablet','Mail configuration iPad',NULL,NULL),(4,0,'Technical Support','Smartphone and Tablet','Mail configuration iPhone',NULL,NULL),(5,0,'Technical Support','ADSL','First Installation',NULL,NULL),(6,0,'Technical Support','ADSL','Frequent issues',NULL,NULL),(7,0,'Technical Support','Mail','Mail Management',NULL,NULL),(8,0,'Technical Support','Mail','Contacts Management',NULL,NULL),(9,0,'Technical Support','Mail','Registration submit issues',NULL,NULL),(10,1,'','','MyTIM: New client area',NULL,NULL),(11,1,NULL,NULL,'Modem Fibra - new installation video',NULL,NULL),(12,1,NULL,NULL,'Posta - be careful for fake email',NULL,NULL),(13,1,NULL,NULL,'Configure your browser',NULL,NULL);
/*!40000 ALTER TABLE `Assistance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Devices`
--

DROP TABLE IF EXISTS `Devices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Devices` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Category` varchar(45) DEFAULT NULL,
  `Name` varchar(45) NOT NULL,
  `ImageURL` varchar(45) DEFAULT NULL,
  `TechSpec` longtext,
  `Description` longtext,
  `Price` varchar(45) DEFAULT NULL,
  `OldPrice` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Devices`
--

LOCK TABLES `Devices` WRITE;
/*!40000 ALTER TABLE `Devices` DISABLE KEYS */;
INSERT INTO `Devices` VALUES (1,'Smartphone','LG v10','Device_LG.png','<b>Dimensions:</b> <br>\n159,6x79,3x8,6 mm <br>\n<br>\n<b>Weight</b> <br>\n192 gr. <br>\n<br>\n<b>Autonomy</b> <br>\nStand-by fino a 100 ore <br>\nConversazione fino a 240 min. <br>\n<br>\n<b>Connectivity</b> <br>\n4G cat6/HSDPA 42/UMTS/EDGE/GPRS <br>\nFrequenze 850/900/1800/1900/2100 <br>\nWi-Fi - Bluetooth - Micro USB - NFC <br>\nGPS <br>\n<br>\n<b>Integrated Display</b> <br>\n5.7\" 16 Milioni colori Touch <br>\nCamera <br>\n16 Mpixel/Flash <br>\n<br>\n<b>Memory</b> <br>\n32GB <br>\nSlot Memory Card Micro SD up to 2TB <br>\n<br>\n<b>Processor</b> <br>\nHexaCore 1.8 Ghz','4GPLUS <br>\nOS Android 5.1 <br>\nDisplay 5.7\" secondario 2.1\" <br>\nProcessor Snapdragon 808 <br>\nHexaCore 1.8 Ghz <br>','19$ /mo','25$ /mo'),(2,'Tablet','Apple iPad Pro 9.7\" 32GB','Device_TabletApple.png','Sistema Operativo iOS 9 <br>\nDisplay Retina da 9,7\" (diagonale) con True Tone e rivestimento antiriflesso <br>\nChip A9X di terza generazione con architettura a 64 bit di livello desktop <br>\nSensore di impronte digitali Touch ID <br>\nFotocamera iSight da 12MP con video a 4K <br>\n<br>\n<b>Display</b> <br>\nRetina Display 9,7\" (diagonale) con True Tone <br>\ne rivestimento antiriflesso <br>\n<br>\n<b>Sensors</b> <br>\nTouch ID <br>\n<br>\n<b>Processor</b> <br>\nChip A9X 64 bit of desktop level <br>\n<br>\n<b>Camera</b> <br>\niSight da 12MP con video a 4K <br>\n<br>\n<b>Videocamera</b> <br>\nFaceTime HD (foto da 5MP) <br>\n<br>\n<b>Connectivity</b> <br>\n4G LTE Advanced1, Wi-Fi 802.11ac con tecnologia MIMO <br>\n<br>\n<b>Battery</b> <br>\nUp to 10 hours of autonomy','Display Retina 9,7\" (diagonal) with True Tone e rivestimento antiriflesso <br>\nChip A9  64 bit desktop level <br>\nSensor Touch ID <br>\nCamera iSight da 12MP with video 4K <br>\nVideocamera FaceTime HD (foto to 5MP)','2\'999.99$',NULL),(3,'Smartphone','Huawei Mate S','Device_Huawei.png',NULL,NULL,NULL,NULL),(4,'Smartphone','Lumia 930','Device_Lumia.png','1',NULL,NULL,'1'),(5,'Smartphone','Samsung GS6','Device_SAMSUNGs6.png',NULL,NULL,NULL,NULL),(6,'Smartphone','Samsung GS7 Edge','Device_SAMSUNGs7.png',NULL,NULL,NULL,NULL),(7,'Tablet','Huawei MediaPad 10 LINK+','device-tab-huawei-mediapad-10-link-plus-1.png','1',NULL,NULL,'1'),(8,'Tablet','Huawei Mediapad T1 10 LTE','device-tab-huawei-t1-10-white-1.png',NULL,NULL,NULL,NULL),(9,'Tablet','Alcatel ONE TOUCH Pixi3 8 ','device-tabalcatel-pixi3-8-black-1.png','1',NULL,NULL,'1');
/*!40000 ALTER TABLE `Devices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DevicesAssistance`
--

DROP TABLE IF EXISTS `DevicesAssistance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DevicesAssistance` (
  `IDDevices` int(10) unsigned NOT NULL,
  `IDAssistance` int(10) unsigned NOT NULL,
  PRIMARY KEY (`IDDevices`,`IDAssistance`),
  KEY `IDAssistance_idx` (`IDAssistance`),
  CONSTRAINT `IDAssistance` FOREIGN KEY (`IDAssistance`) REFERENCES `Assistance` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `IDDevices2` FOREIGN KEY (`IDDevices`) REFERENCES `Devices` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DevicesAssistance`
--

LOCK TABLES `DevicesAssistance` WRITE;
/*!40000 ALTER TABLE `DevicesAssistance` DISABLE KEYS */;
INSERT INTO `DevicesAssistance` VALUES (1,1),(2,1),(1,2),(2,2),(2,3);
/*!40000 ALTER TABLE `DevicesAssistance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DevicesSmartLife`
--

DROP TABLE IF EXISTS `DevicesSmartLife`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DevicesSmartLife` (
  `IDDevices` int(10) unsigned NOT NULL,
  `IDSmartLife` int(10) unsigned NOT NULL,
  PRIMARY KEY (`IDDevices`,`IDSmartLife`),
  KEY `IDSmartLife_idx` (`IDSmartLife`),
  CONSTRAINT `IDDevices` FOREIGN KEY (`IDDevices`) REFERENCES `Devices` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `IDSmartLife` FOREIGN KEY (`IDSmartLife`) REFERENCES `SmartLife` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DevicesSmartLife`
--

LOCK TABLES `DevicesSmartLife` WRITE;
/*!40000 ALTER TABLE `DevicesSmartLife` DISABLE KEYS */;
INSERT INTO `DevicesSmartLife` VALUES (2,1),(7,1),(1,2),(2,2),(5,2),(9,2),(1,4),(2,4);
/*!40000 ALTER TABLE `DevicesSmartLife` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SmartLife`
--

DROP TABLE IF EXISTS `SmartLife`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SmartLife` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Category` varchar(45) DEFAULT NULL,
  `Name` varchar(45) DEFAULT NULL,
  `ImageURL` varchar(45) DEFAULT NULL,
  `Description` longtext,
  `ActivationAndRules` longtext,
  `Price` varchar(45) DEFAULT NULL,
  `OldPrice` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SmartLife`
--

LOCK TABLES `SmartLife` WRITE;
/*!40000 ALTER TABLE `SmartLife` DISABLE KEYS */;
INSERT INTO `SmartLife` VALUES (1,'TV and Entertainment','Tim Reading','31-iPad-eBook-Reader.jpg','By TIMreading offer Promo News you can read on your phone all the news of one of these newspapers: the Mobile Republic, Corriere Mobile, the Mobile Messenger Mobile and Mattino Gazzettino Mobile.\n\nRemains so to date on the latest news, events of the day, news stories, sports and many more insights with the best content of the daily edition of the newspaper and web site.\n\nThe offer is a weekly ticket, with the first 4 weeks at 50%','To activate this service, you have to put the code that will arrive on your e-mail, when you\'ll buy and activate one of the device that support this service . Using your TIM account you can access on the TIMreading app, and choose the eBooks you prefer. ','42.90$ /mo','50$ /mo'),(2,'TV and Entertainment','Serie A TIM','C_54_articolo_2633_imgarticolo.jpg','With serie A TIM service, you can see and be\nupdated of all things that happen in Italian Football\nLeague','To activate this service, you have to put the code that will\narrive on your e-mail, when you\'ll buy and activate one\nof the devices that support this service. Using your\nTIM account you can access on the SerieATIM app,\nand enjoy the contets. ','29.90$ /mo','35$ /mo'),(3,'TV and Entertainment','Tim Tv','tvsamsung.png',NULL,NULL,NULL,NULL),(4,'TV and Entertainment','Tim Music','mc3basica.jpg',NULL,NULL,NULL,NULL),(5,'TV and Entertainment','Tim Game','Gaymer.png',NULL,NULL,NULL,NULL),(6,'eBook','Il linguaggio Java','java.jpg',NULL,NULL,'29.99$',NULL),(7,'eBook','Il linguaggio C','illinguaggioc.jpg',NULL,NULL,'13.37$',NULL),(8,'eBook','Fondamenti di controlli automatici','automatica.jpg',NULL,NULL,'45.82$',NULL),(9,'Newspaper','Il Sole 24 Ore','cropped-sole24ore2.png',NULL,NULL,'29.90$ /mo',NULL),(10,'Newspaper','Il Corriere della Sera','corsera.png',NULL,NULL,'29.90$ /mo',NULL),(11,'Newspaper','La Gazzetta dello Sport','lagazzetta.png',NULL,NULL,'29.90$ /mo',NULL),(12,'Newspaper','La Nazione','LA-NAZIONE.png',NULL,NULL,'29.90$ /mo',NULL),(13,'Magazine','I Love MAGS','ilovemags_logga.png',NULL,NULL,'0.90$ /mo',NULL),(14,'Magazine','Success','diCaprio.jpg',NULL,NULL,'19.90$ /mo',NULL),(15,'Magazine','Time','einstein.jpg',NULL,NULL,'24.90$ /mo',NULL);
/*!40000 ALTER TABLE `SmartLife` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-06-25 10:59:49
