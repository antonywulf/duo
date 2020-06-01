import React from 'react';

export const InitAppSpinner = () => {
  return (
    <div className="spinner-border m-5" style={{ width: '3rem', height: '3rem' }} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};
