import React from 'react';
import Unit from '../modular/Unit';

const Form = () => {
  return (
    <Unit
      layout="grid"
      gridTemplate="horizontal-33-66"
      background="light"
      height="8"
      width="100"
      marginLeft="xl"
      marginRight="xl"
      marginTop="xl"
      // marginBottom="xl"
      borderRadius="md"
    >
      <Unit
        as="div"
        layout="flex"
        flexDirection="vertical"
        borderRadius="md"
        gridArea="a"
        background="dark"
        marginTop="sm"
        marginBottom="sm"
        marginLeft="sm"
        paddingTop="xl"
        paddingLeft="lg"
        width="7"
      >
        <Unit as="h3" color="white" fontSize="3xl">
          Contact Information
        </Unit>
        <Unit as="div" layout="flex" color="white" marginTop="lg">
          <Unit as="img"></Unit>
          <Unit as="p"> (07) 3252 2524</Unit>
        </Unit>
        <Unit as="div" layout="flex" color="white" marginTop="lg">
          <Unit as="img"></Unit>
          <Unit as="p">james.chia92@gmail.com</Unit>
        </Unit>
        <Unit as="div" layout="flex" marginTop="lg">
          <Unit as="img"></Unit>
          <Unit as="p" color="white">
            Contact Information
          </Unit>
        </Unit>
        <Unit as="div" layout="flex" marginTop="lg">
          <Unit as="img"></Unit>
          <Unit as="p" color="white">
            Contact Information
          </Unit>
        </Unit>
      </Unit>
      <Unit gridArea="b">
        <Unit
          layout="flex"
          flexDirection="vertical"
          marginTop="xl"
          marginRight="xl"
          paddingRight="lg"
          paddingLeft="lg"
        >
          <Unit layout="flex">
            <Unit>
              <Unit as="label">First Name</Unit>
              <Unit as="input"></Unit>
            </Unit>
            <Unit>
              <Unit as="label">First Name</Unit>
              <Unit as="input"></Unit>
            </Unit>
          </Unit>
          <Unit layout="flex" marginTop="md">
            <Unit>
              <Unit as="label">Email</Unit>
              <Unit as="input"></Unit>
            </Unit>
            <Unit>
              <Unit as="label">Phone Number</Unit>
              <Unit as="input"></Unit>
            </Unit>
          </Unit>
          <Unit as="form" marginTop="lg">
            <Unit as="h3"> Select Subject</Unit>
            <Unit layout="flex" marginTop="lg">
              <Unit as="input" type="radio"></Unit>
              <Unit as="label">General Inquiry</Unit> <br />
              <Unit as="input" type="radio" id="general-inquiry"></Unit>
              <Unit as="label" for="general-inquiry">
                General Inquiry
              </Unit>{' '}
              <br />
              <Unit as="input" type="radio"></Unit>
              <Unit as="label">General Inquiry</Unit> <br />
              <Unit as="input" type="radio" id="general-inquiry"></Unit>
              <Unit as="label" for="general-inquiry">
                General Inquiry
              </Unit>{' '}
              <br />
            </Unit>
          </Unit>
          <Unit layout="flex" flexDirection="vertical" marginTop="md">
            <Unit as="p">Message</Unit>
            <Unit as="input"></Unit>
          </Unit>
        </Unit>
      </Unit>
    </Unit>
  );
};

export default Form;
