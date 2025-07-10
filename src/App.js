import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";

import SignUp from './components/SignUp';
import Header from './components/Header';


import lenis from "./utils/lenis";
import link from "./utils/link";

const App = () => {

  useEffect(() => {
    lenis();
    link();
  },[]);



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </BrowserRouter>
      <SignUp />


      <Header />
    </div>
  );
};

export default App;
