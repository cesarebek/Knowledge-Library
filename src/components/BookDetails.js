import React from 'react';
//Redux
import { useSelector } from 'react-redux';
//Styles and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Route
import { useHistory } from 'react-router-dom';

const BookDetails = ({ id }) => {
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
      {/* isLoading STATE allows me to show the details ONLY when detailsData area correctly
      fetched and ready to be rendered without inccoring in undefined errors. */}
      {!isLoading && (
        <CardShadow onClick={exitDetailHandler} className="shadow">
          <Details layoutId={id}>
            <img
              src={bookDetail.volumeInfo.imageLinks.thumbnail}
              alt="book cover"
            />
            <h2>TITLE:</h2>
            <h3>{bookDetail.volumeInfo.title}</h3>
            <h2>RATING:</h2>
            <h3>{bookDetail.volumeInfo.averageRating}</h3>
            <h2>Language:</h2>
            <h3>{bookDetail.volumeInfo.language.toUpperCase()}</h3>
            <h2>PUBLISHER:</h2>
            <h3>{bookDetail.volumeInfo.publisher}</h3>
            <h2>PUBLISH DATE:</h2>
            <h3>{bookDetail.volumeInfo.publishedDate}</h3>
            <h3>Page Count: {bookDetail.volumeInfo.pageCount} pages</h3>
            <h2>DESCRIPTION:</h2>
            <h3>{bookDetail.volumeInfo.description}</h3>
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
  width: 80vw;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  top: 5%;
  left: 10%;
  right: 10%;
  color: black;
  h3 {
    padding-bottom: 1rem;
  }
  img {
    text-align: center;
  }
`;
export default BookDetails;
