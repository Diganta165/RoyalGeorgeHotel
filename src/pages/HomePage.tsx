import React from 'react';
import Layout from '../components/modular/Layout';
import Section from '../components/modular/Section';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Layout background="dark" layout="flex" flexDirection="horizontal">
      <Section layout="flex" gap="sm">
        <NavBar></NavBar>
      </Section>
    </Layout>
  );
};

export default HomePage;
