import React from 'react';
//Styles and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Actions
import { loadDetail } from '../actions/detailAction';
//import Redux
import { useDispatch } from 'react-redux';

const Book = ({ title, authors, image, id }) => {
  const dispatch = useDispatch();

  const detailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <Card onClick={detailHandler}>
      <Info>
        <h3>{title}</h3>
        <h3>{authors}</h3>
      </Info>
      <Cover>
        <img src={image} alt={image} />
      </Cover>
    </Card>
  );
};

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Cover = styled(motion.div)`
  text-align: center;
  img {
    min-height: 30vh;
  }
`;

export default Book;
