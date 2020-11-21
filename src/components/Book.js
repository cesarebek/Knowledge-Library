import React from 'react';
//Styles and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Actions
import { loadDetail } from '../actions/detailAction';
//Redux
import { useDispatch } from 'react-redux';
//Route
import { Link } from 'react-router-dom';

const Book = ({ title, authors, image, id }) => {
  const dispatch = useDispatch();

  const detailHandler = () => {
    //This prevent the scrolling of the home when details are opened
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  };

  return (
    <Card onClick={detailHandler} layoutId={id}>
      <Link to={`/game/${id}`}>
        <Description>
          <img src={image} alt={image} />
          <Info>
            <h2>Title:</h2>
            <h3>{title}</h3>
            <h2>Author:</h2>
            <h3>{authors}</h3>
          </Info>
        </Description>
      </Link>
    </Card>
  );
};

const Card = styled(motion.div)`
  overflow: hidden;
  margin-bottom: 3rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  background-color: #fcfcfb;
  cursor: pointer;
  a {
    text-decoration: none;
  }
`;
const Description = styled(motion.div)`
  display: flex;
  img {
    height: 30vh;
  }
`;
const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  h3 {
    padding-bottom: 2rem;
  }
`;

export default Book;
