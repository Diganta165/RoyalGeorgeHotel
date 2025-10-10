import React from 'react';
import Layout from '../components/modular/Layout';
import Section from '../components/modular/Section';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Bars from '../components/Bars';
import Footer from '../components/Footer';

const BarPage = () => {
  return (
    <Layout background="dark" layout="grid" gridTemplate="vertical-30-40-30">
      <Section layout="flex" flexDirection="vertical" height="1" width="100">
        <NavBar></NavBar>
        <Hero></Hero>
      </Section>
      <Section width="100" marginTop="lg">
        <Bars></Bars>
      </Section>
      <Section width="100" alignContent="bottom">
        <Footer></Footer>
      </Section>
    </Layout>
  );
};

export default BarPage;
