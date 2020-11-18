import React, { useState } from 'react';
//import Redux
import { useDispatch } from 'react-redux';
//import actionReducers
import { fetchBooks } from '../actions/booksAction';

const Home = () => {
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
    <form>
      <input onChange={inputHandler} value={textInput} type="text" />
      <button onClick={submitSearch} type="submit">
        Cerca
      </button>
    </form>
  );
};

export default Home;
