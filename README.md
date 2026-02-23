# React Movie Search App 🎬

A simple React application that allows users to search for movies and view details such as title, genre, poster, and year. Movie data is fetched from the OMDb API using asynchronous requests.

## Technologies Used

- React (functional components + hooks)

- Vite

- JavaScript (ES6+)

- Fetch API

- OMDb API

## How It Works

1. The user enters a movie title in the form.

2. The form passes the search term to the parent component.

3. The parent component fetches movie data from OMDb.

4. The data is stored in state.

5. The MovieDisplay component renders the results.

State is lifted to the App component so sibling components can share data