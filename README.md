# 🚀 Basic CRUD API

Welcome to the **Basic CRUD API** project! This repository showcases a simple backend application implementing Create, Read, Update, and Delete (CRUD) operations using Node.js, Express.js, and MongoDB. It's an excellent starting point for understanding how to build RESTful APIs with these technologies.

## 🛠️ Tech Stack

- **Node.js**: JavaScript runtime built on Chrome's V8 engine.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **MongoDB Compass**: GUI for MongoDB to visualize and manage data.

## 📁 Project Structure

```plaintext
Basic-CRUD-API/
├── node_modules/       # Project dependencies
├── index.js            # Entry point of the application
├── package.json        # Project metadata and scripts
└── package-lock.json   # Dependency tree lock file
```

- `index.js`: Contains the main server setup and route definitions.
- `package.json`: Lists the project dependencies and scripts.
- `package-lock.json`: Records the exact version of each installed package.

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/VirendraT11/Basic-CRUD-API.git
   cd Basic-CRUD-API
   ```

2. **Install dependencies**:

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, run:

   ```bash
   npm install
   ```

3. **Set up MongoDB**:

   - Install [MongoDB](https://www.mongodb.com/try/download/community) and ensure it's running.
   - Alternatively, use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based solution.
   - You can use [MongoDB Compass](https://www.mongodb.com/products/compass) to visualize and manage your data.

4. **Configure environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   ```

   Replace `your-database-name` with your desired database name.

5. **Start the server**:

   ```bash
   npm start
   ```

   The API will be accessible at `http://localhost:3000`.

## 📋 API Endpoints

The API provides the following endpoints:

- **Create**: `POST /items` – Add a new item.
- **Read All**: `GET /items` – Retrieve all items.
- **Read One**: `GET /items/:id` – Retrieve a single item by ID.
- **Update**: `PUT /items/:id` – Update an existing item by ID.
- **Delete**: `DELETE /items/:id` – Remove an item by ID.

*Note*: Replace `/items` with the actual resource name used in your project.

## 🧪 Testing

Use tools like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test the API endpoints. Ensure your MongoDB instance is running and the server is started before making requests.

## 🤝 Connect with Me

- **X (formerly Twitter)**: [@VirendraCodes](https://x.com/VirendraCodes)
- **LinkedIn**: [Virendra Tambavekar](https://www.linkedin.com/in/virendra-tambavekar-74a384257/)

Feel free to reach out if you have any questions or suggestions! 
