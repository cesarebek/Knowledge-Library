//This file is the core of the GOOGLE BOOKS API
//Note: the key is inside the file gitignore, BEFORE npm start the project, make sure to add your one ;)
const apiKey = process.env.REACT_APP_API_BOOKS_KEY;

const base_url = 'https://www.googleapis.com/books';

export const searchedBooksURL = (book_name) =>
  `${base_url}/v1/volumes?q=${book_name}&${apiKey}`;
