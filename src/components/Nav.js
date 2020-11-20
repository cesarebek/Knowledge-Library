import React, { useState } from 'react';
//import Redux
import { useDispatch } from 'react-redux';
//import Actions
import { fetchBooks } from '../actions/booksAction';
//Styles and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  //FETCH books from API
  const dispatch = useDispatch();
  //state for textInput (I'll use this state only here that's why I've used a hook)
  const [textInput, setTextInput] = useState('');
  //Updates the textInput
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  //Submits the request with "textInput" value to the API
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchBooks(textInput));
    setTextInput('');
  };
  return (
    <StyledNav>
      <form>
        <input
          onChange={inputHandler}
          value={textInput}
          type="text"
          placeholder="Today I'd like to read..."
        />
        <button onClick={submitSearch} type="submit">
          <FontAwesomeIcon icon={faBook} />
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 0rem;
  text-align: center;

  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem 1.5rem;
    border: none;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  button {
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    border: none;
    outline: none;
    cursor: pointer;
    background: #f5d554;
    color: #2b2b2b;
    transition: all 0.5s ease;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    &:hover {
      background: #f5c254;
    }
  }
`;
export default Nav;
