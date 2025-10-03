import React from 'react';
import Layout from '../components/modular/Layout';
import Section from '../components/modular/Section';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Form from '../components/Form/Form';
import Footer from '../components/Footer';
import { useWindowSize } from '../hooks/useWindowSize';

const ContactPage = () => {
  const windowSize = useWindowSize();

  return (
    <Layout
      background="dark"
      layout="grid"
      gridTemplate="vertical-20-40-40"
      spacing="gap-md"
      // background="bg-dark"
      // alignContent="center"
      // justifyItems="center"
      // height="10"
    >
      <Section
        background="hero"
        width="100"
        height="1"
        layout="flex"
        flexDirection="vertical"
        gap="lg"
        alignSelf="start"

        // alignContent="center"
        // gridTemplate="vertical-3"
      >
        <NavBar></NavBar>
        <Hero></Hero>
      </Section>
      <Section alignContent="center">
        <Form></Form>
      </Section>
      <Section width="100" alignContent="bottom" gridArea="c">
        <Footer></Footer>
      </Section>
    </Layout>
  );
};

export default ContactPage;
