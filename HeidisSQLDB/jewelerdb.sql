-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.6.9-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- jewelerdb 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `jewelerdb` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `jewelerdb`;

-- 테이블 jewelerdb.job 구조 내보내기
CREATE TABLE IF NOT EXISTS `job` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_name` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `job_idx` tinyint(4) NOT NULL DEFAULT 0,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `FK_job_user` (`user_id`),
  CONSTRAINT `FK_job_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- 테이블 데이터 jewelerdb.job:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `job` DISABLE KEYS */;
INSERT IGNORE INTO `job` (`id`, `job_name`, `job_idx`, `user_id`) VALUES
	(1, '프로젝트 관리', 0, 18),
	(2, '서비스·게임 기획', 1, 18),
	(3, '빅데이터/AI/알고리즘', 0, 14),
	(4, '웹·앱 디자인', 1, 14);
/*!40000 ALTER TABLE `job` ENABLE KEYS */;

-- 테이블 jewelerdb.skill 구조 내보내기
CREATE TABLE IF NOT EXISTS `skill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(50) NOT NULL,
  `skill_grade` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`user_id`),
  KEY `FK__user` (`user_id`),
  CONSTRAINT `FK__user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 테이블 데이터 jewelerdb.skill:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `skill` DISABLE KEYS */;
/*!40000 ALTER TABLE `skill` ENABLE KEYS */;

-- 테이블 jewelerdb.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` char(50) CHARACTER SET utf8mb3 NOT NULL,
  `password` varchar(50) CHARACTER SET utf8mb3 NOT NULL,
  `name` char(50) CHARACTER SET utf8mb3 DEFAULT NULL,
  `nickname` char(50) CHARACTER SET utf8mb3 DEFAULT NULL,
  `career_period` tinyint(100) DEFAULT 0,
  `graduate` char(50) CHARACTER SET utf8mb3 DEFAULT NULL,
  `introduce` char(255) CHARACTER SET utf8mb3 DEFAULT NULL,
  `auto_login` tinyint(1) DEFAULT 0,
  `token` char(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`,`uid`,`password`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

-- 테이블 데이터 jewelerdb.user:~7 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT IGNORE INTO `user` (`id`, `uid`, `password`, `name`, `nickname`, `career_period`, `graduate`, `introduce`, `auto_login`, `token`, `createdAt`, `updatedAt`) VALUES
	(1, 'kirk0201', '1234', NULL, NULL, 0, NULL, NULL, 0, NULL, '2022-09-22 09:07:30', '2022-09-22 09:07:30'),
	(13, 'kirk020', '1234', NULL, NULL, 0, NULL, NULL, 0, NULL, '2022-09-22 12:21:46', '2022-09-22 12:21:46'),
	(14, 'kirk', '123', '1', '1', 1, '1', '1', 0, NULL, '2022-09-22 12:25:06', '2022-09-23 16:35:32'),
	(15, 'kirk1', '1234', NULL, NULL, 0, NULL, NULL, 0, NULL, '2022-09-22 12:25:24', '2022-09-22 12:25:24'),
	(16, 'kirk2', '1234', NULL, NULL, 0, NULL, NULL, 0, NULL, '2022-09-22 12:29:08', '2022-09-22 12:29:08'),
	(17, '', '', NULL, NULL, 0, NULL, NULL, 0, NULL, '2022-09-22 12:29:22', '2022-09-22 12:29:22'),
	(18, '1', '1', '1', '1', 1, '1', '1', 0, NULL, '2022-09-22 12:36:12', '2022-09-23 16:56:37'),
	(19, 'kirk3', '1234', NULL, NULL, 0, NULL, NULL, 0, NULL, '2022-09-22 12:38:36', '2022-09-22 12:38:36');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
