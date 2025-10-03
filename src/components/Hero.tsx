import React from 'react';
import Unit from './modular/Unit';

const Hero = () => {
  return (
    <Unit
      as="div"
      borderColor="white"
      width="100"
      paddingTop="xl"
      paddingBottom="xl"
    >
      <Unit as="h3" textAlign="center" fontSize="2xl">
        Contact Us
      </Unit>
      <Unit as="p" textAlign="center" paddingTop="md">
        Feel free to get in touch. Fill in the form below and one of our
        friendly staff will be in touch as soon as we can.
      </Unit>
      <Unit as="p" textAlign="center">
        Alternatively, use the buttons below to get in direct contact with us.
        Please check our opening times in the
      </Unit>
      <Unit as="p" textAlign="center">
        footer to ensure we are open
      </Unit>
    </Unit>
  );
};

export default Hero;
