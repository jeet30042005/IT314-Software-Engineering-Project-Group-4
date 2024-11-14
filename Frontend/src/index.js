import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import Landing from './Landing';
import Search from './Search';
import SearchResult from './Searchresult';
function MyRouters() {
  return (<BrowserRouter>
    <Routes>
      <Route index path='/' element={<Login />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/home' element={<Home />} />
      <Route path='/landing' element={<Landing />} />
      <Route path='/Search' element={<Search />} />
      <Route path='/Searchresult' element={<SearchResult/>} />
    </Routes>
  </BrowserRouter>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouters />);
