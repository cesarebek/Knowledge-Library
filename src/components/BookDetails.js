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
import { lineAnim } from '../animation';

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
                <p>{bookDetail.volumeInfo.description}</p>
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
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 5%;
  left: 20%;
  right: 20%;
  padding: 1rem 1rem;
  background-color: white;
  border-radius: 1rem;
`;
const Cover = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 40vh;
  }
  button {
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding: 1rem 2rem;
    border: none;
    outline: none;
    background-color: #262626;
    color: #fff;
    transition: all 0.5s ease-in-out;
    border-radius: 1rem;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    &:hover {
      border: 1px #262626 solid;
      background: white;
      color: #262626;
    }
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
`;
const Main = styled(motion.div)``;
const Description = styled(motion.div)``;
const Other = styled(motion.div)`
  width: 50%;
  h3 {
    margin-bottom: 0.8rem;
  }
`;
const Line = styled(motion.div)`
  width: 100%;
  height: 0.15rem;
  background-color: #c6c6c6;
  margin: 1.5rem 0;
`;

export default BookDetails;
