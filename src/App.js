import React from 'react';
//import Pages
import Home from './Pages/Home';
//Global Styles
import GlobalStyles from './components/GlobalStyles';
//Router
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <GlobalStyles />
      {/* I want only one Route so when I click on the Book the BookDetails are rendered on the Home Page */}
      <Route>
        {/* This path means that if my path is "/" or "/book/:id" Home component will be rendere in both cases */}
        <Home path={['/', '/book/:id']} />
      </Route>
    </>
  );
};

export default App;
