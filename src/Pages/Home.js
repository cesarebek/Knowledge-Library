import React from 'react';
//Components
import Nav from '../components/Nav';
import Book from '../components/Book';
import BookDetails from '../components/BookDetails';
import Ragazza from '../components/ragazza';
import Splash from '../components/splash';
import Footer from '../components/Footer';
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
  //Book availability check
  const alert = () => {
    if (searched === undefined) {
      console.log("Your Book doesn't exist");
    } else {
      return searched.map((book) => (
        <Book
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          image={book.volumeInfo.imageLinks}
          id={book.id}
          key={book.id}
        />
      ));
    }
  };

  return (
    <>
      <Nav />
      <StyledHome>
        <BookList>
          {!bookLoading && (
            <Books>
              <AnimateSharedLayout type="crossfade">
                <AnimatePresence>
                  {pathId && <BookDetails id={pathId} />}
                </AnimatePresence>
                {alert()}
              </AnimateSharedLayout>
            </Books>
          )}
        </BookList>
        <Footer />
      </StyledHome>

      <Ragazza />
      <Splash />
    </>
  );
};
const StyledHome = styled(motion.div)`
  position: relative;
`;
const Books = styled(motion.div)``;
const BookList = styled(motion.div)`
  padding: 3.5rem 15rem 5rem 45rem;
  min-height: 90vh;
  padding: 3.5rem 10rem 5rem 40rem;

  @media (max-width: 1300px) {
    padding: 3.5rem 8rem 5rem 35rem;
  }
  @media (max-width: 1100px) {
    padding: 3.5rem 8rem 5rem 8rem;
  }
  @media (max-width: 700px) {
    padding: 3.5rem 4rem 2rem 4rem;
  }
  @media (max-width: 450px) {
    padding: 3.5rem 1.5rem 2rem 1.5rem;
  }
`;

export default Home;
