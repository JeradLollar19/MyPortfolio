import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <AboutMe />
      <MyWork />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;