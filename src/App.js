import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages';
import Dashboard from './pages/dashboard';
import SearchPost from './pages/dashboard/search-posts';
import AddUser from './pages/dashboard/add-user';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/search-posts" element={<SearchPost />} />
          <Route path="/dashboard/add-user" element={<AddUser />} />
          <Route path="/" element={<Home />} />
            
        </Routes>
      </div>
    </Router>
  );
}