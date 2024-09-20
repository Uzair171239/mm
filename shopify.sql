-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 20, 2024 at 11:11 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopify`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(6) NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `password` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `user_name`, `password`) VALUES
(1, 'admin', '$2b$10$r7cqP9BwJqc/8g0GXY5TXeynjc1z1dNfMKNoppF5OFf.68YPoN3Kq');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(6) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `country_name`, `address`, `facebook`, `instagram`, `email`, `whatsapp`, `created_at`, `updated_at`) VALUES
(6, 'United Arab Emirates', 'Shopify uae Muscat, Sultanate Of uae', 'facebook.com/my-shopify', 'insta.com/my-shopify', 'info@shopify.com', '+92 307 083 16 71', '2022-03-01 05:55:30', '2024-09-19 11:35:58'),
(7, 'Oman', 'Shopify Oman Muscat, Sultanate Of Oman', 'facebook.com/my-shopify', 'insta.com/my-shopify', 'info@shopify.com', '+92 307 083 16 71', '2022-03-01 05:56:34', '2024-09-19 11:36:42'),
(8, 'Qatar', 'Shopify qatar Muscat, Sultanate Of qatar', 'facebook.com/my-shopify', 'insta.com/my-shopify', 'info@my-shopify.com', '+92 307 083 16 71', '2022-03-01 05:57:30', '2024-09-19 11:37:23');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id`, `product_id`, `image`) VALUES
(66, 15, '/images/products/clipper 3.jfif'),
(67, 15, '/images/products/clippers 2.jfif'),
(68, 16, '/images/products/sc-2.jfif');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `missing_orders`
--

INSERT INTO `missing_orders` (`id`, `product_id`, `client_name`, `phone_number`, `quantity`, `amount`) VALUES
(11, 19, 'fariha hayat', '7505672137', 0, '0');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `client_id`, `product_id`, `quantity`, `amount`, `delivery_charges`, `quantity_text`, `color`, `status`, `delivery_note`, `created_at`, `updated_at`) VALUES
(24, 32, 15, 1, 5.6, 0, '', ' white', 1, '', '2022-03-03 04:50:09', '2022-03-03 04:50:09'),
(25, 33, 15, 1, 21, 23, '333', ' white', 1, '', '2022-03-30 05:32:26', '2022-03-30 05:32:26'),
(26, 32, 15, 1, 21, 23, '333', 'Black', 1, '', '2022-03-30 05:53:08', '2022-03-30 05:53:08'),
(27, 32, 15, 1, 21, 23, '333', 'Black', 1, '', '2022-03-30 05:54:02', '2022-03-30 05:54:02'),
(28, 34, 15, 2, 21, 23, '333', 'Black', 1, '', '2022-03-30 06:09:01', '2022-03-30 06:09:01'),
(30, 36, 15, 2, 21, 23, '333', 'Black', 1, '', '2022-03-30 06:10:11', '2022-03-30 06:10:11'),
(31, 36, 15, 1, 21, 23, '333', ' white', 1, '', '2022-03-30 06:12:23', '2022-03-30 06:12:23'),
(32, 37, 16, 2, 21, 45, 'hsfduhywef', 'black', 1, '', '2024-09-19 10:57:25', '2024-09-19 10:57:25');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pricing`
--

INSERT INTO `pricing` (`id`, `country_id`, `product_id`, `price`, `old_price`, `price_list`) VALUES
(171, 1, 16, '6.5', '16', '6.5 : 1, 12 : 2, 18 : 2, 23 : 4, 27 : 5'),
(172, 3, 16, '6', '8', '6.5 : 1, 12 : 2, 18 : 2, 23 : 4, 27 : 5'),
(173, 1, 15, '55', '8', '12 : 1, 20: 2'),
(174, 2, 15, '55', '8', '6.5 : 1, 12 : 2, 18 : 2, 23 : 4, 27 : 5'),
(177, 1, 18, '55', '8', '12 : 1, 20: 2'),
(178, 2, 18, '55', '8', '6.5 : 1, 12 : 2, 18 : 2, 23 : 4, 27 : 5'),
(183, 1, 19, '55', '8', '12 : 1, 20: 2'),
(184, 2, 19, '55', '8', '12 : 1, 20: 2'),
(185, 1, 20, '55', '8', '12 : 1, 20: 2'),
(186, 2, 20, '55', '8', '6.5 : 1, 12 : 2, 18 : 2, 23 : 4, 27 : 5'),
(187, 1, 21, '55', '8', '12 : 1, 20: 2'),
(188, 2, 21, '6.5', '16', '6.5 : 1, 12 : 2, 18 : 2, 23 : 4, 27 : 5'),
(189, 1, 22, '55', '8', '12 : 1, 20: 2'),
(190, 2, 22, '6.5', '16', '6.5 : 1, 12 : 2, 18 : 2, 23 : 4, 27 : 5');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `cattegory_name`, `google_cattegory`, `brand`, `purchase_price`, `code`, `title`, `status`, `price_list`, `price`, `old_price`, `offer_percentage`, `description`, `color`, `size`, `delivery_charges`, `quantity`, `quantity_text`, `fake_order_sold`, `rank`, `image`, `created_at`, `updated_at`, `available_in`) VALUES
(15, 'Men', 'men', 'Ttrimmer', '33', 'VB-001', 'Electric Hair Clippers Profess', 1, '12 : 1, 20: 2', 55, 8, 9, 'This is description', 'Black, white', 12, 23, 50, '333', 9, 1, '/images/products/clipper 1.jfif', '2022-03-02 08:48:14', '2024-09-20 08:46:47', '1,2'),
(16, 'Kitchenware', 'kitchen', 'Universal', '34', 'AS1', '2 pcs F2 Screen Enlarger', 1, '6.5 : 1, 12 : 2, 18 : 2, 23 : 4, 27 : 5', 6.5, 16, 8, 'this is kitchen ware products', 'black, blue', 1, 45, 50, 'hsfduhywef', 12, 1, '/images/products/sc-1.jfif', '2022-03-02 09:11:49', '2024-09-19 11:33:07', '3,1'),
(18, '*hot deals', 'men', 'Ttrimmer', '33', 'VB-001', 'Electric Hair Clippers Profess', 1, '12 : 1, 20: 2', 55, 8, 9, 'this is trimmer', 'Black, white', 12, 23, 50, '333', 9, 1, '/images/products/clipper 1.jfif', '2022-03-02 08:48:14', '2024-09-20 08:48:46', '1,2'),
(19, 'Women', 'men', 'Ttrimmer', '33', 'VB-001', 'Electric Hair Clippers Profess', 1, '12 : 1, 20: 2', 55, 8, 9, 'womens trimmer', 'Black, white', 12, 23, 50, '333', 9, 1, '/images/products/clipper 1.jfif', '2022-03-02 08:48:14', '2024-09-20 08:50:52', '1,2'),
(20, '*hot deals', 'men', 'Ttrimmer', '33', 'VB-001', 'Electric Hair Clippers Profess', 1, '12 : 1, 20: 2', 55, 8, 9, 'this is new trimmer', 'Black, white', 12, 23, 50, '333', 9, 1, '/images/products/clipper 1.jfif', '2022-03-02 08:48:14', '2024-09-20 08:51:41', '1,2'),
(21, '*hot deals', 'men', 'Ttrimmer', '33', 'VB-001', 'Electric Hair Clippers Profess', 1, '12 : 1, 20: 2', 55, 8, 9, 'hot deal desciption', 'Black, white', 12, 23, 50, '333', 9, 1, '/images/products/clipper 1.jfif', '2022-03-02 08:48:14', '2024-09-20 08:53:22', '1,2'),
(22, '*hot deals', 'men', 'Ttrimmer', '33', 'VB-001', 'Electric Hair Clippers Profess', 1, '12 : 1, 20: 2', 55, 8, 9, 'description 2', 'Black, white', 12, 23, 50, '333', 9, 1, '/images/products/clipper 1.jfif', '2022-03-02 08:48:14', '2024-09-20 08:53:40', '1,2');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `status`, `description`, `color`, `created_at`, `updated_at`) VALUES
(1, 'NEW', 'When order is created', '#1be600', '2022-02-25 04:41:28', '2022-02-25 04:42:00'),
(2, 'CANCELLED', 'Cancelled orders', '#f50a0a', '2022-02-25 04:42:24', '2022-02-25 04:44:55'),
(3, 'DELIVERED', 'When item is delivered', '#749e00', '2022-02-25 04:43:29', '2022-02-25 04:43:29');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `full_name` varchar(30) DEFAULT NULL,
  `address` varchar(120) DEFAULT NULL,
  `country` varchar(30) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `whatsapp` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `phone_number`, `full_name`, `address`, `country`, `city`, `whatsapp`) VALUES
(32, '5642468343', 'Uzair Nasir', 'board bazzar peshwar', 'Qatar', 'Al Khawr', '83689648965'),
(33, '786896835698', 'mohib', 's;kdfheklohfverhfgv', 'United Arab Emirates', 'Abu Dhabi Municipality', '893264'),
(34, '785254372', 'mansoor', 'klafdwehfiloer', 'Qatar', 'Al Jumaylīyah', '8923638926439'),
(36, '783648326483', 'tufail', 'dkhgjhg0poeh', 'Qatar', 'Al Wakrah', '8326486'),
(37, '123456748', 'fariha hayat', 'inside city', 'Oman', 'Adam', '923131234567');

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
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `missing_orders`
--
ALTER TABLE `missing_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `pricing`
--
ALTER TABLE `pricing`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=191;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
