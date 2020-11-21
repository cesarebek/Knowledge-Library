import React from 'react';
//Components
import Nav from '../components/Nav';
import Book from '../components/Book';
import BookDetails from '../components/BookDetails';
//React-Redux
import { useSelector } from 'react-redux';
//Styles and animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
//Router
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  const { searched } = useSelector((state) => state.books);
  return (
    <>
      <Nav />
      <BookList>
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {pathId && <BookDetails id={pathId} />}
          </AnimatePresence>
          {searched.map((book) => (
            <Book
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              image={book.volumeInfo.imageLinks.thumbnail}
              id={book.id}
              key={book.id}
            />
          ))}
        </AnimateSharedLayout>
      </BookList>
    </>
  );
};

const BookList = styled(motion.div)`
  padding: 5rem 30rem;
  min-height: 80vh;
`;
export default Home;
