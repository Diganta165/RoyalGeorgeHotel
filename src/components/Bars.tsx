import React from 'react';
import Unit from './modular/Unit';

const Bars = () => {
  return (
    <Unit
      layout="grid"
      gridTemplate="standard-4"
      height="100"
      width="100"
      gap="xsm"
    >
      <Unit as="div" borderColor="white"></Unit>
      <Unit as="div" borderColor="white"></Unit>
      <Unit as="div" borderColor="white"></Unit>
      <Unit as="div" borderColor="white"></Unit>
    </Unit>
  );
};

export default Bars;
