import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";

import SignUp from './components/SignUp';
import Header from './components/Header';


import lenis from "./utils/lenis";
import link from "./utils/link";


import ScrollTop from "./components/ScrollTop";

const App = () => {

  useEffect(() => {
    lenis();
    link();
  },[]);



  return (
    <div>
      <Header />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          {/* <Route path="/SignUp" element={<SignUp />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <SignUp /> */}


      {/* <Header /> */}
      <ScrollTop />
    </div>
  );
};

export default App;
