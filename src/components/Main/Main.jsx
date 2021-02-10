import React from 'react';
import Header from '../Header/Header';
import Courses from '../Courses/Courses';
import './Main.scss';

const Main = () => {
  return (
    <main className="Main">
      <Header />
      <Courses />
    </main>
  );
};

export default Main;