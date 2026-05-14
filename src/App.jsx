import styles from "./App.module.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Standings from "./pages/Standings";
import Drivers from "./pages/Drivers";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./pages/Results";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="results" element={<Results />} />
          <Route path="standings" element={<Standings />} />
          <Route path="drivers" element={<Drivers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
