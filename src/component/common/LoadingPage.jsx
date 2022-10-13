import React from 'react';
import { ClipLoader } from 'react-spinners';
import { ErrorStyle } from 'style/ErrorStyle';

const LoadingPage = () => {
  return (
    <ErrorStyle>
      <ClipLoader color="rgba(192, 135, 147, 1)" loading size={50} speedMultiplier={0.75} />
    </ErrorStyle>
  );
};

export default LoadingPage;
