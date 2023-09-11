'use client';

import '@/styles/global.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './signup/page';
import Login from './login/page';

const Page: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <hr />
              <Main />
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default Page;
