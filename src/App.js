import React from 'react';
import NavBar from './components/NavBar'; // Adjust the path as needed
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TheWork from './pages/TheWork';
import About from './pages/About';
import News from './pages/News';
import Locations from './pages/Locations';
import WorkDetail from './pages/WorkDetail';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-work" element={<TheWork />}>
          <Route path=":workId" element={<WorkDetail />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;
