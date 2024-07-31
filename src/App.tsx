import React from "react";
import Btn from "./button";
import { Route, Routes } from "react-router-dom";
import Todo from "./todo";
import Home from "./home";
import Coin from "./coin";
import Movie from "./movie";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/btn" element={<Btn />}></Route>
      <Route path="/todo" element={<Todo />}></Route>
      <Route path="/coin" element={<Coin />}></Route>
      <Route path="/movie" element={<Movie />}></Route>
    </Routes>
  );
}

export default App;
