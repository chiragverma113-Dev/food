import "./App.css";
import { Listdetail } from "./componenet/FoodDetail";
import { List } from "./componenet/Fooflist";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:idMeal" element={<Listdetail />} />+
      </Routes>
    </>
  );
}

export default App;
