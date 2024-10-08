import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Header';
import Dashboard from './Dashboard';
import Dropdown from './Indicator';
import Footer from './Footer';
import SubHeader from './SUbHeader';

function App() {
  return (
    <div>
      <Header />
      <SubHeader/>
      <Dashboard />
      <Dropdown/>
      <Footer/>
    </div>
  );
}

export default App;
