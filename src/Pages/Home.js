import React from 'react';
//Components
import Nav from '../components/Nav';
import Book from '../components/Book';
import BookDetails from '../components/BookDetails';
import Ragazza from '../components/ragazza';
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
  const { searched, bookLoading } = useSelector((state) => state.books);

  return (
    <>
      <Nav />
      {!bookLoading && (
        <BookList>
          <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
              {pathId && <BookDetails id={pathId} />}
            </AnimatePresence>
            {searched.map((book) => (
              <Book
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                image={book.volumeInfo.imageLinks}
                id={book.id}
                key={book.id}
              />
            ))}
          </AnimateSharedLayout>
        </BookList>
      )}
      <Ragazza />
    </>
  );
};

const BookList = styled(motion.div)`
  padding: 3.5rem 15rem 5rem 45rem;
  min-height: 80vh;
  @media (max-width: 1500px) {
    padding: 3.5rem 10rem 5rem 40rem;
  }
  @media (max-width: 1300px) {
    padding: 3.5rem 8rem 5rem 35rem;
  }
  @media (max-width: 1100px) {
    padding: 3.5rem 8rem 5rem 8rem;
  }
  @media (max-width: 700px) {
    padding: 3.5rem 1.2rem 2rem 1.2rem;
  }
`;
export default Home;
