# React Blog Application 📝

This is a React blog application that fetches data from the JSONPlaceholder API. The app allows users to:

- 📝 **View, search, add, edit, and delete posts.**
- 🗨️ **View detailed information about each post, including comments.**

---

## ✨ Features

- **Display Posts**: Fetches a list of posts and displays them in a card format with title and body.
- **View Post Details**: Detailed view with comments for each post.
- **Search Functionality**: Filter posts by title using a search bar.
- **Add New Post**: A form to add new posts.
- **Edit Post**: Modify existing posts with a pre-filled form.
- **Delete Post**: Delete posts with a confirmation prompt.
- **Pagination**: Controls the number of posts displayed per page.

---

## 🛠️ Technologies Used

- **React** (Functional Components with Hooks)
- **React Router**
- **Axios**
- **CSS**
- **JSONPlaceholder API**

---

## 🚀 Installation

To run the project locally:

1. **Clone the repository:**
   
   git clone https://github.com/MariaTech2024/posts_fetcher.git

    Navigate to the project directory:

cd client

Install dependencies:

npm install

Start the development server:

    npm start

    Open your browser and visit: http://localhost:3000.

🎯 How It Works:

🏠 Home Page

    Displays a list of posts fetched from https://jsonplaceholder.typicode.com/posts.
    Includes a search bar to filter posts by title.
    Implements pagination to control the number of visible posts.

🔍 Post Detail Page

    Clicking a post navigates the user to a detailed view page.
    Shows the post's full details, including comments fetched from: https://jsonplaceholder.typicode.com/comments?postId={postId}.

➕ Add New Post

    Users can submit a title and body via a form.
    The new post is added to the list upon submission.

✏️ Edit Post

    Clicking the edit button opens a form pre-filled with the post's data.
    Users can modify the title and body and save changes.

🗑️ Delete Post

    Clicking the delete button prompts the user for confirmation before removing the post.

📡 API Endpoints Used

    Posts: https://jsonplaceholder.typicode.com/posts
    Comments: https://jsonplaceholder.typicode.com/comments?postId={postId}

💡 Error Handling & Loading State

    Loading State: Displays a spinner while fetching data.
    Error Handling: Shows an error message in case of API failures.
