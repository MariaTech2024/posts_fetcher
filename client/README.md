React Blog Application

This is a simple React blog application that fetches data from the JSONPlaceholder API. The app allows users to view, search, and add posts, as well as view detailed information about each post, including comments.
Features

    Display Posts
        Fetches a list of posts from the API and displays them in a card format.
        Each post displays the title and body.

    View Post Details
        When a user clicks on a post, they are navigated to a detailed view page.
        The detailed view includes the title, body, and a list of comments associated with the post.

    Search Functionality
        Includes a search bar on the main page that filters posts by title.

    Add New Post
        A form allows users to add a new post by entering a title and body.

Technologies Used

    React (Functional Components with Hooks)
    React Router for navigation
    Axios for making HTTP requests
    CSS (Basic styling for responsiveness)
    JSONPlaceholder API for fetching posts and comments

Installation

To run the project locally, follow these steps:

    Clone the repository

git clone https://github.com/MariaTech2024/posts_fetcher.git

Navigate to the project directory

cd client

Install dependencies

npm install 

Start the development server

    npm start

    Open your browser
        Visit http://localhost:3000 to see the app running locally.

How It Works

    Home Page:
        Displays a list of posts fetched from https://jsonplaceholder.typicode.com/posts.
        Each post has a title and body, displayed in a card format.
        A search bar allows users to filter posts by title.

    Post Detail Page:
        When a post is clicked, users are navigated to a page showing the post's full details, including comments fetched from https://jsonplaceholder.typicode.com/comments?postId={postId}.

    Add New Post:
        A form on the home page allows users to add a new post. The form collects the title and body of the post, and on submission, a new post is added to the list.

API Endpoints Used

    Posts: https://jsonplaceholder.typicode.com/posts
    Comments: https://jsonplaceholder.typicode.com/comments?postId={postId}

Features Implemented

    Fetch data from JSONPlaceholder API.
    Display posts in a card format with title and body.
    Detailed view for each post with comments.
    Search posts by title.
    Add new posts via a form.
    Responsive design for both mobile and desktop views.

Error Handling & Loading State

    The app handles loading states and errors gracefully:
        While data is being fetched, a loading message is shown.
        In case of an error, an error message is displayed.
