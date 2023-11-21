import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Home from './page/Home';
import Users from './page/Users';
import About from './page/About';
import { useDispatch } from 'react-redux';
import { fetchH } from './redux/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchH(dispatch);
  }, [dispatch]);

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
