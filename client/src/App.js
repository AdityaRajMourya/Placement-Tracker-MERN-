// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Apply from './components/Apply';
import PlacementHighlights from './components/placementHighlights';
import Interview from './components/Interview';
import InterviewC from './components/InterviewC';
import InterviewOS from './components/InterviewOS';
import InterviewJava from './components/InterviewJava';
import InterviewDBMS from './components/InterviewDBMS';
import Questions from './components/Questions';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/placementHighlights" element={<PlacementHighlights />} />
          <Route path='/prepare' element={<Interview />} />
          <Route path='/questions' element={<Questions />} />
          <Route path='/prepare/c_cpp' element={<InterviewC />} />
          <Route path='/prepare/java' element={<InterviewJava />} />
          <Route path='/prepare/os' element={<InterviewOS />} />
          <Route path='/prepare/dbms' element={<InterviewDBMS />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
