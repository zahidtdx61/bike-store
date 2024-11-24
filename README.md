# Bike Store

Level 02 - Assignment 02
This project is to create a backend API for a bike store.

You can access the live version of the API at [Bike Store Backend](https://bike-store-backend-five.vercel.app/).

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fbike-store-backend-five.vercel.app%2F)](https://bike-store-backend-five.vercel.app/)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Contributing](#contributing)

## Introduction

This project is part of the Level 02 assignments. It aims to develop a backend API for a bike store.
The backend API for the bike store is built using TypeScript, Mongoose, Express, and MongoDB. TypeScript provides type safety and enhances code quality. Express is used to create the server and handle routing. Mongoose is an ODM (Object Data Modeling) library that simplifies interactions with MongoDB, a NoSQL database. Together, these technologies ensure a robust and scalable backend for managing bike store operations, including inventory management, order processing, and customer data handling.

## Features

- `create` a bike using this api route `post` `/api/products`
- `retrieve` details of bike using this api route `get` `/api/products/:productId`
- `retrieve` details of all bikes using this api route `get` `/api/products`
- `update` details of a bike using this api route `put` `/api/products/:productId`
- `delete` a bike data using this api route `delete` `/api/products/:productId`
- `create` a order using this api route `post` `/api/orders`
- `generate` total revenue of all orders using this api route `get` `/api/orders/revenue`

## Installation

1. Clone the repository:

```sh
git clone https://github.com/zahidtdx61/bike-store.git
```

2. Navigate to the project directory:

```sh
cd bike-store
```

3. Install dependencies:

```sh
npm install
```

4. create a .env file and add these credentials

```env
PORT=<any_port_number_of_your_choice>
DB_URL=<get_this_connection_url_from_mongoDB>
DB_NAME=<any_name_of_your_choice>
```

5. Start the development server:

```sh
npm run dev
```

## Contributing

We welcome contributions from the community to enhance and improve this project.
