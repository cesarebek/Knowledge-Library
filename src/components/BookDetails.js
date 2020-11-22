import React from 'react';
//Redux
import { useSelector } from 'react-redux';
//Styles and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Route
import { useHistory } from 'react-router-dom';
//Util
import { imageAvailability } from '../util';
//Animations
import { lineAnim, closeTab } from '../animation';
//Images
import close from '../img/close.svg';

const BookDetails = ({ id }) => {
  //Exit Detail
  const history = useHistory();

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    } else if (element.classList.contains('close')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };

  const { bookDetail, isLoading } = useSelector((state) => state.details);
  //Book description check
  const descCheck = () => {
    if (bookDetail.volumeInfo.description === undefined) {
      return <p>Description of this book is not available.</p>;
    } else {
      return <p>{bookDetail.volumeInfo.description}</p>;
    }
  };

  return (
    <>
      {/* isLoading STATE allows me to show the details ONLY when detailsData area correctly
      fetched and ready to be rendered without inccoring in undefined errors. */}
      {!isLoading && (
        <CardShadow onClick={exitDetailHandler} className="shadow">
          <Details layoutId={id}>
            <Cover>
              <motion.img
                src={imageAvailability(bookDetail.volumeInfo.imageLinks)}
                alt="book cover"
              />
              <a
                href={bookDetail.accessInfo.webReaderLink}
                target="_blank"
                rel="noreferrer"
              >
                <button className="buy">Read now</button>
              </a>
            </Cover>
            <BookInfo>
              <Main>
                <h2>{bookDetail.volumeInfo.title}</h2>
                <h3>{bookDetail.volumeInfo.authors}</h3>
              </Main>
              <Line variants={lineAnim} initial="hidden" animate="show" />
              <Description>
                <h2>About the book</h2>
                {descCheck()}
              </Description>
              <Line variants={lineAnim} initial="hidden" animate="show" />
              <Other>
                <h2>Other info</h2>
                <h3>
                  Language
                  <span>{bookDetail.volumeInfo.language.toUpperCase()}</span>
                </h3>
                <h3>
                  Publisher
                  <span>{bookDetail.volumeInfo.publisher}</span>
                </h3>
                <h3>
                  Page count
                  <span>{bookDetail.volumeInfo.pageCount}</span>
                </h3>
                <h3>
                  Published
                  <span>{bookDetail.volumeInfo.publishedDate}</span>
                </h3>
              </Other>
            </BookInfo>
            <CloseTab onClick={exitDetailHandler}>
              <motion.img
                src={close}
                alt="close-tab"
                variants={closeTab}
                initial="hidden"
                whileHover="hover"
                className="close"
              />
            </CloseTab>
          </Details>
        </CardShadow>
      )}
    </>
  );
};
const CloseTab = styled(motion.div)`
  position: absolute;
  padding: 0.3rem 0.3rem 0 0;
  cursor: pointer;
  text-align: center;
  right: 0%;
  top: 0%;
  border-bottom-left-radius: 0.5rem;
`;

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
  position: relative;
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 5%;
  left: 20%;
  right: 20%;
  padding: 1rem 1rem;
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  @media (max-width: 1200px) {
    left: 15%;
    right: 15%;
    top: 5%;
  }
  @media (max-width: 1000px) {
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
    span {
      font-size: 1rem;
    }
  }
  @media (max-width: 450px) {
    left: 5%;
    right: 5%;
    top: 5%;
    margin-bottom: 5%;
  }
`;
const Cover = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 40vh;
    margin-bottom: 1.5rem;
  }
  button {
    padding: 1rem 2rem;
    border: none;
    outline: none;
    background-color: #5992e5;
    color: #fff;
    transition: all 0.5s ease-in-out;
    border-radius: 1rem;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    &:hover {
      background: #34315d;
      color: #fff;
    }
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const BookInfo = styled(motion.div)`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  h2 {
    padding-bottom: 1rem;
  }
  @media (max-width: 450px) {
    padding: 0rem 0.7rem;
  }
`;
const Main = styled(motion.div)``;
const Description = styled(motion.div)``;
const Other = styled(motion.div)`
  h3 {
    margin-bottom: 0.8rem;
  }
`;
const Line = styled(motion.div)`
  width: 100%;
  height: 0.2rem;
  background: linear-gradient(45deg, #34315d, #5992e5);
  margin: 1.5rem 0;
  border-radius: 1rem;
`;

export default BookDetails;
