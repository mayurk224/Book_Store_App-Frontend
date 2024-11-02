# Book Store App 📚

Welcome to the Book Store App! This application allows users to manage books in a bookstore with basic CRUD functionality. Users can add, view, update, and delete books in the inventory. The app features a toggle between table and card views for book listings and provides a compact modal view for quick book details.

## 🚀 Live Demo

- **Frontend Live URL**: [https://book-store-app-frontend-amber.vercel.app/](https://book-store-app-frontend-amber.vercel.app/)
- **Backend Repository**: [https://github.com/mayurk224/Book_Store_App-Backend](https://github.com/mayurk224/Book_Store_App-Backend)

## 🛠️ Technologies Used

### Frontend
- **React** - For building interactive UI components.
- **Vite** - Fast development setup for React.
- **Tailwind CSS** - For styling components with a modern utility-first approach.
- **Axios** - For making API requests to the backend.
- **React Router** - For navigation within the app.

### Backend
- **Node.js & Express** - For building the REST API.
- **MongoDB & Mongoose** - For database and data modeling.
- **dotenv** - For managing environment variables securely.

## 📂 Folder Structure

### Frontend
- **src/components** - Contains reusable components (e.g., `BackButton`, `Spinner`, etc.).
- **src/pages** - Holds main pages like `CreateBook` and `BookList`.
- **src/styles** - CSS files for custom styling.
- **.env** - Stores environment variables such as the API URL.

### Backend
- **models/** - Contains Mongoose schemas for the MongoDB collections.
- **routes/** - Defines routes for different operations (e.g., book CRUD operations).
- **index.js** - Entry point of the Express server.
- **.env** - Environment variables (e.g., database connection string).

## 🌟 Features

### CRUD Operations
- **Create**: Add new books with details like title, author, publish year, and description.
- **Read**: View the list of all books with options to toggle between table and card views.
- **Update**: Modify book details.
- **Delete**: Remove books from the database.

### View Options
- **Table View**: Lists books in a structured table format.
- **Card View**: Displays books as individual cards with key details.
- **Toggle**: Users can switch between table and card views as per their preference.

### Modal View
- **Quick View Modal**: Provides a compact modal for quick information on selected books without navigating away from the main view.

## 🛠️ Installation

### Prerequisites
- **Node.js** - Download and install from [Node.js official website](https://nodejs.org/).
- **MongoDB** - Download and install or use MongoDB Atlas.

### Backend Setup
1. Clone the backend repository:
   ```bash
   git clone https://github.com/mayurk224/Book_Store_App-Backend.git
   cd Book_Store_App-Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root folder and add your MongoDB connection string and any other environment variables:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   PORT=5555
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
   This will start the backend server on `http://localhost:5555` by default.

### Frontend Setup
1. Clone the frontend repository:
   ```bash
   git clone [https://github.com/your-frontend-repo-url.git](https://github.com/mayurk224/Book_Store_App-Frontend)
   cd Book_Store_App-Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root folder and set the API URL:
   ```plaintext
   VITE_API_URL=http://localhost:5555
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   This will start the frontend on `http://localhost:3000` by default.

## 📑 API Endpoints

The backend API provides the following endpoints for managing books:

- **GET** `/books` - Get all books.
- **POST** `/books` - Add a new book.
- **PUT** `/books/:id` - Update an existing book by ID.
- **DELETE** `/books/:id` - Delete a book by ID.

## ⚙️ Environment Variables

To run this project, you will need to add the following environment variables:

### Frontend
- `VITE_API_URL` - The base URL for the backend API.

### Backend
- `MONGO_URI` - Your MongoDB connection string.
- `PORT` - The port number for the server (default is 5555).

## 🧑‍💻 Future Enhancements
- **Authentication**: Add user authentication for a personalized experience.
- **Pagination**: Implement pagination for improved performance with large datasets.
- **Search and Filters**: Add filters and a search bar to quickly find books.
- **Ratings & Reviews**: Allow users to rate and review books.

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to the branch.
5. Create a new Pull Request.

## 📝 License

This project is licensed under the MIT License.

Here's how to add the contact section to your README file in Markdown format:

# Contact 📬

If you have any questions or need support, feel free to reach out to:

**Mayur Dilip Kamble**  
📧 Email: [mayurkamble0250@gmail.com](mailto:mayurkamble0250@gmail.com)
