import React from 'react';
//Redux
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { bookDetail } = useSelector((state) => state.details);

  return (
    <div>
      <h1>{bookDetail.title}</h1>
    </div>
  );
};

export default BookDetails;
