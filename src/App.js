import React from 'react';
//import Pages
import Home from './Pages/Home';
//import components
import Nav from './components/Nav';
//Global Styles
import GlobalStyles from './components/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Home />
    </>
  );
};

export default App;
