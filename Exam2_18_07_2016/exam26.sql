-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 19, 2016 at 02:59 AM
-- Server version: 5.7.12-0ubuntu1
-- PHP Version: 5.6.23-1+deb.sury.org~xenial+2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exam26`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `category` varchar(100) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`) VALUES
(1, 'Armenia'),
(4, 'Political'),
(5, 'World');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(10) UNSIGNED NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `category_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `date`, `title`, `content`, `category_id`) VALUES
(1, '2016-07-18 15:42:08', 'Asdkjfhdskjf skjdfhdksj', 'Asdkjfhdskjf skjdfhdksj sdkjfhdskjf skjdfhdksj sdkjfhdskjf skjdfhdksj sdkjfhdskjf skjdfhdksj sdkjfhdskjf skjdfhdksj sdkjfhdskjf skjdfhdksj sdkjfhdskjf skjdfhdksj sdkjfhdskjf skjdfhdksj sdkjfhdskjf skjdfhdksj sdkjfhdskjf skjdfhdksj sdkjfhdskjf skjdfhdksj sdkjfhdskjf skjdfhdksj sdkjfhdskjf skjdfhdksj ', 1),
(3, '2016-07-18 16:27:12', 'qqqqqqqqq', 'qqqqqqqqqqqqq eeeeeeeeeeeeeeeeee', 4),
(4, '2016-07-18 16:56:04', 'sdfsdf sdfdsfgsdfsd dsf', 'sdfsdf sdfds sdf sdf sdfsdfwerewrewr werewr ewrew', 5),
(5, '2016-07-18 17:13:01', '12 things you didnt know you could do on Snapchat', 'Summers second long weekend is here, which means your Snapchat activity might increase over the next few days.\r\nHere are some tips and tricks to make snapping and viewing more fun. Snapchat also recently revamped its support site to make it easier to find answers to your questions.', 1),
(6, '2016-07-18 17:14:16', 'Shortlist for 2016 awards revealed', 'More than 340 architectural projects  from a luxury jungle home in Brazil to a happiness center in Bhutan  were announced as nominees at what organizers say has become the worlds largest architectural awards program.', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `category` (`category`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
