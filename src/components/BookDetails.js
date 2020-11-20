import React from 'react';
//Redux
import { useSelector } from 'react-redux';
//Styles and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Route
import { useHistory } from 'react-router-dom';

const BookDetails = () => {
  //Exit Detail
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };

  const { bookDetail, isLoading } = useSelector((state) => state.details);

  return (
    <>
      {!isLoading && (
        <CardShadow onClick={exitDetailHandler} className="shadow">
          <Details>
            <img
              src={bookDetail.volumeInfo.imageLinks.thumbnail}
              alt="book cover"
            />
            <h2>TITLE:</h2>
            <h1>{bookDetail.volumeInfo.title}</h1>
            <h2>DESCRIPTION:</h2>
            <h1>{bookDetail.volumeInfo.description}</h1>
          </Details>
        </CardShadow>
      )}
    </>
  );
};
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
const Details = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  top: 5%;
  bottom: 5%;
  left: 10%;
  color: black;
`;
export default BookDetails;
