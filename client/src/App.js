import React from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';

// Main App component which is parent to the Navbar and Heading area.
function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Heading />
    </div>
  );
}

export default App;
