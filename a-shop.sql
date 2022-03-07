-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 07, 2022 at 06:01 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `a-shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(6) NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `password` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `user_name`, `password`) VALUES
(1, 'admin', '$2b$10$89g1CHiTQWRmVH/NPr2bCedTk9EXfnv1e19jd/BWiQC53qzCiC4rO');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(6) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `created_at`) VALUES
(1, '*hot deals', 'abcdef', '2022-02-28 11:14:59'),
(2, 'Men', 'Mens category', '2022-02-28 11:15:37'),
(3, 'Women', 'womens category', '2022-02-28 11:16:34'),
(6, 'Kitchenware', 'these are kitchenwares', '2022-03-02 09:08:09');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(6) NOT NULL,
  `country_name` varchar(30) DEFAULT NULL,
  `address` varchar(60) NOT NULL,
  `facebook` varchar(60) NOT NULL,
  `instagram` varchar(60) NOT NULL,
  `email` varchar(30) NOT NULL,
  `whatsapp` varchar(30) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `country_name`, `address`, `facebook`, `instagram`, `email`, `whatsapp`, `created_at`, `updated_at`) VALUES
(6, 'United Arab Emirates', 'A-Shop uae Muscat, Sultanate Of uae', 'facebook.com/ashop02', 'insta.com/AShop', 'info@ashop-uae.com', '+971 56 567 333', '2022-03-01 05:55:30', '2022-03-01 05:55:30'),
(7, 'Oman', 'A-Shop Oman Muscat, Sultanate Of Oman', 'facebook.com/ashop02', 'insta.com/AShop', 'info@ashop-oman.com', '+973737245782ee', '2022-03-01 05:56:34', '2022-03-03 11:34:29'),
(8, 'Qatar', 'A-Shop qatar Muscat, Sultanate Of qatar', 'facebook.com/ashop02', 'insta.com/AShop', 'info@ashop-qatar.com', '+974 1234567', '2022-03-01 05:57:30', '2022-03-01 05:58:05');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(10) NOT NULL,
  `country` varchar(30) NOT NULL,
  `country_code` varchar(30) NOT NULL,
  `currency` varchar(30) DEFAULT NULL,
  `with_vat` int(6) DEFAULT NULL,
  `view_vat` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `country`, `country_code`, `currency`, `with_vat`, `view_vat`) VALUES
(1, 'United Arab Emirates', 'AE', 'AED', 4, 8),
(2, 'Qatar', 'QA', 'QAR', 6, 8),
(3, 'Oman', 'OM', 'OMR', 2, 4);

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `id` int(6) NOT NULL,
  `product_id` int(6) NOT NULL,
  `image` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id`, `product_id`, `image`) VALUES
(50, 16, '/images/products/product6.jpeg'),
(51, 16, '/images/products/product5.jpeg'),
(61, 15, '/images/products/product6.jpeg'),
(62, 15, '/images/products/product9.jpeg'),
(63, 15, '/images/products/product5.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `missing_orders`
--

CREATE TABLE `missing_orders` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `client_name` varchar(30) NOT NULL,
  `phone_number` varchar(30) NOT NULL,
  `quantity` int(11) NOT NULL,
  `amount` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `missing_orders`
--

INSERT INTO `missing_orders` (`id`, `product_id`, `client_name`, `phone_number`, `quantity`, `amount`) VALUES
(2, 16, 'Uzair Nasir', '2443', 0, '0'),
(3, 16, 'frsfgv', '2', 0, '0'),
(4, 16, 'frsfgv', '23', 0, '0'),
(5, 16, 'Uzair Nasir', '2', 0, '0'),
(6, 16, 'Muhib', '9', 0, '0'),
(7, 16, 'Muhib', '9', 0, '0'),
(8, 16, 'Muhib', '92135356', 0, '0'),
(9, 16, 'Muhib', '9', 0, '0');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(10) NOT NULL,
  `client_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `amount` double NOT NULL,
  `delivery_charges` double NOT NULL,
  `quantity_text` varchar(120) NOT NULL,
  `color` varchar(30) NOT NULL,
  `status` int(6) NOT NULL,
  `delivery_note` varchar(30) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `client_id`, `product_id`, `quantity`, `amount`, `delivery_charges`, `quantity_text`, `color`, `status`, `delivery_note`, `created_at`, `updated_at`) VALUES
(24, 32, 15, 1, 5.6, 0, '', ' white', 1, '', '2022-03-03 04:50:09', '2022-03-03 04:50:09');

-- --------------------------------------------------------

--
-- Table structure for table `pricing`
--

CREATE TABLE `pricing` (
  `id` int(6) NOT NULL,
  `country_id` int(6) NOT NULL,
  `product_id` int(6) NOT NULL,
  `price` varchar(20) NOT NULL,
  `old_price` varchar(20) NOT NULL,
  `price_list` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pricing`
--

INSERT INTO `pricing` (`id`, `country_id`, `product_id`, `price`, `old_price`, `price_list`) VALUES
(137, 1, 16, '6.5', '16', '6.5 : 1, 12 : 2, 18 : 2, 23 : 4, 27 : 5'),
(138, 3, 16, '6', '8', '6.5 : 1, 12 : 2, 18 : 2, 23 : 4, 27 : 5'),
(151, 1, 15, '55', '8', '12 : 1, 20: 2'),
(152, 2, 15, '55', '8', '6.5 : 1, 12 : 2, 18 : 2, 23 : 4, 27 : 5');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `cattegory_name` varchar(30) NOT NULL,
  `google_cattegory` varchar(30) DEFAULT NULL,
  `brand` varchar(30) NOT NULL,
  `purchase_price` varchar(30) DEFAULT NULL,
  `code` varchar(30) NOT NULL,
  `title` varchar(30) NOT NULL,
  `status` int(6) NOT NULL,
  `price_list` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `old_price` double NOT NULL,
  `offer_percentage` int(6) NOT NULL,
  `description` varchar(60) NOT NULL,
  `color` varchar(30) NOT NULL,
  `size` int(6) NOT NULL,
  `delivery_charges` double NOT NULL,
  `quantity` int(6) NOT NULL,
  `quantity_text` varchar(255) DEFAULT NULL,
  `fake_order_sold` int(6) DEFAULT NULL,
  `rank` int(6) DEFAULT NULL,
  `image` varchar(80) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `available_in` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `cattegory_name`, `google_cattegory`, `brand`, `purchase_price`, `code`, `title`, `status`, `price_list`, `price`, `old_price`, `offer_percentage`, `description`, `color`, `size`, `delivery_charges`, `quantity`, `quantity_text`, `fake_order_sold`, `rank`, `image`, `created_at`, `updated_at`, `available_in`) VALUES
(15, 'Men', 'men', 'Ttrimmer', '33', 'VB-001', 'Electric Hair Clippers Profess', 1, '12 : 1, 20: 2', 55, 8, 0, 'hello taxi', 'Black, white', 12, 23, 50, '333', 22, 1, '/images/products/product1.png', '2022-03-02 08:48:14', '2022-03-04 04:39:08', '1,2'),
(16, 'Kitchenware', '', 'Universal', '34', 'AS1', '2 pcs F2 Screen Enlarger', 1, '6.5 : 1, 12 : 2, 18 : 2, 23 : 4, 27 : 5', 6.5, 16, 0, 'this is kitchen ware products', 'black, blue', 0, 45, 50, '', 67, 1, '/images/products/product2.jpeg', '2022-03-02 09:11:49', '2022-03-03 03:48:29', '3,1');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(10) NOT NULL,
  `delivery` int(10) NOT NULL,
  `mobile_discount` int(10) NOT NULL,
  `new_status` int(10) NOT NULL,
  `dispatch_status` int(10) NOT NULL,
  `track_status` int(19) NOT NULL,
  `cities` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `status` varchar(30) DEFAULT NULL,
  `description` varchar(120) DEFAULT NULL,
  `color` varchar(30) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `status`, `description`, `color`, `created_at`, `updated_at`) VALUES
(1, 'NEW', 'When order is created', '#1be600', '2022-02-25 04:41:28', '2022-02-25 04:42:00'),
(2, 'CANCELLED', 'Cancelled orders', '#f50a0a', '2022-02-25 04:42:24', '2022-02-25 04:44:55'),
(3, 'DELIVERED', 'When item is delivered', '#749e00', '2022-02-25 04:43:29', '2022-02-25 04:43:29'),
(11, 'dddd', 'dddddd', '#ffffff', '2022-03-03 12:07:21', '2022-03-03 12:07:21');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(30) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `address` varchar(120) DEFAULT NULL,
  `country` varchar(30) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `phone`, `address`, `country`, `city`) VALUES
(32, 'Uzair Nasir', '92123456789', 'board bazzar peshwar', 'Qatar', 'Al Khawr');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `missing_orders`
--
ALTER TABLE `missing_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `pricing`
--
ALTER TABLE `pricing`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `missing_orders`
--
ALTER TABLE `missing_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `pricing`
--
ALTER TABLE `pricing`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
