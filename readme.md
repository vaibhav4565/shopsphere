# ShopSphere eCommerce Platform

> A comprehensive eCommerce solution powered by the MERN stack and Redux  



## Features

- Complete shopping cart functionality
- Product reviews and ratings
- Dynamic top products carousel
- Seamless product pagination
- Advanced product search feature
- User profiles with order history
- Robust admin panel for product and user management
- Detailed order management for admins
- Option to mark orders as delivered
- Streamlined checkout process with shipping and payment options
- Integration with PayPal and credit card payments
- Database seeder for easy setup with sample products and users


## Usage

To get started with ShopSphere, follow these steps:

1. Set up a MongoDB database and obtain your MongoDB URI from MongoDB Atlas.
2. Create a PayPal account and generate your Client ID from PayPal Developer.
3. Rename the .env.example file to .env and populate it with your environment variables, including MongoDB URI, JWT secret, PayPal client ID, and pagination limit.
4. Install dependencies for both the frontend and backend by running npm install in the root directory and the frontend directory.
5. Start the development environment by running npm run dev to launch both the frontend and backend servers concurrently. Alternatively, you can run only the backend server with npm run server.

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

### Build & Deploy

```
For production deployment, follow these steps:

1. Navigate to the frontend directory and create a production build by running npm run build.
2. Your optimized frontend assets will be generated in the build directory within the frontend folder.
3. Deploy your backend and frontend builds to your preferred hosting platform.
```

ShopSphere is a versatile eCommerce platform designed to provide a seamless shopping experience for both customers and administrators. Built with modern technologies, it offers a range of features to empower businesses in the digital marketplace.