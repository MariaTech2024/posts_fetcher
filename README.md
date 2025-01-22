React Blog Application

This is a React blog application that fetches data from the JSONPlaceholder API. The app allows users to:

    📝 View, search, add, edit, and delete posts.
    🗨️ View detailed information about each post, including comments.

📚 Table of Contents

    Features
    Technologies Used
    Installation
    How It Works
    API Endpoints Used
    Error Handling & Loading State
    Contribution

✨ Features

    Display Posts: Fetches a list of posts and displays them in a card format with title and body.
    View Post Details: Detailed view with comments for each post.
    Search Functionality: Filter posts by title using a search bar.
    Add New Post: A form to add new posts.
    Edit Post: Modify existing posts with a pre-filled form.
    Delete Post: Delete posts with a confirmation prompt.
    Pagination: Controls the number of posts displayed per page.

🛠️ Technologies Used

    React (Functional Components with Hooks)
    React Router
    Axios
    CSS
    JSONPlaceholder API

🚀 Installation

To run the project locally:

    Clone the repository:

git clone https://github.com/MariaTech2024/posts_fetcher.git

Navigate to the project directory:

cd client

Install dependencies:

npm install

Start the server:

    npm start

    Visit: http://localhost:3000.

🎯 How It Works
🏠 Home Page

    Displays a list of posts fetched from https://jsonplaceholder.typicode.com/posts.
    Includes a search bar and pagination.

🔍 Post Detail Page

    Shows post details and comments from https://jsonplaceholder.typicode.com/comments?postId={postId}.

➕ Add New Post

    Users can submit a title and body via a form.

✏️ Edit Post

    Users can update post details in a pre-filled form.

🗑️ Delete Post

    Posts can be deleted with a confirmation prompt.

📡 API Endpoints Used

    Posts: https://jsonplaceholder.typicode.com/posts
    Comments: https://jsonplaceholder.typicode.com/comments?postId={postId}

💡 Error Handling & Loading State

    Displays a loading spinner while fetching data.
    Shows an error message in case of failures.

🤝 Contribution

Feel free to contribute or report issues in the GitHub repository.
