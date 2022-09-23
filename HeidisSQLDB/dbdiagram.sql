CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `career_period` int NOT NULL,
  `graduate` varchar(255) NOT NULL,
  `introduce` varchar(255),
  `auto_login` boolean NOT NULL,
  `token` varchar(255) NOT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `job` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `job_name` var NOT NULL,
  `job_idx` int,
  `user_id` int,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `skill` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `skill_name` varchar(255),
  `skill_grade` varchar(255),
  `user_id` int,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `portfolio` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `link` varchar(255),
  `user_id` int,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `certificate` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `date` date,
  `user_id` int,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `award` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `date` date,
  `user_id` int,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `language` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `date` date,
  `user_id` int,
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `product` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `admin_id` int,
  `title` varchar(255),
  `skills` varchar(255),
  `location` varhcar,
  `work_day` date,
  `work_conf` boolean,
  `job_type` int,
  `job_conf` boolean,
  `is_keyword` varchar(255),
  `not_keyword` varchar(255),
  `desc` varchar(255),
  `createdAt` timestamp,
  `updatedAt` timestamp
);

ALTER TABLE `product` ADD FOREIGN KEY (`admin_id`) REFERENCES `user` (`id`);

ALTER TABLE `job` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `skill` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `portfolio` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `certificate` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `award` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `language` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
