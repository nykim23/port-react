import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";

import SignUp from './components/SignUp';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </BrowserRouter>
      <SignUp />
    </div>
  );
};

export default App;
