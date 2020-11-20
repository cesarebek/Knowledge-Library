import React from 'react';
//Components
import Book from '../components/Book';
import BookDetails from '../components/BookDetails';
//React-Redux
import { useSelector } from 'react-redux';
//Styles and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
  const { searched } = useSelector((state) => state.books);
  return (
    <BookList>
      <BookDetails />
      {searched.map((book) => (
        <Book
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          image={book.volumeInfo.imageLinks.thumbnail}
          id={book.id}
          key={book.id}
        />
      ))}
    </BookList>
  );
};

const BookList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 4rem;
  padding: 5rem 8rem;
  min-height: 80vh;
`;
export default Home;
