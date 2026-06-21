import styles from "./App.module.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import StandingsLayout from "./components/layout/StandingsLayout";
import Drivers from "./pages/Drivers";
import RaceLayout from "./components/layout/RaceLayout";
import RaceEvent from "./pages/RaceEvent";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./pages/Results";
import Qualifying from "./pages/Qualifying";
import RaceResults from "./pages/RaceResults";
import Sprint from "./pages/Sprint";
import DriversStandings from "./pages/DriversStandings";
import ConstructorsStandings from "./pages/ConstructorsStandings";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="results" element={<Results />} />
          <Route path="standings" element={<StandingsLayout />}>
            <Route index element={<DriversStandings />} />
            <Route path="constructors" element={<ConstructorsStandings />} />
          </Route>
          <Route path="drivers" element={<Drivers />} />
          <Route path="results/:id" element={<RaceLayout />}>
            <Route index element={<RaceResults />} />
            <Route path="sprint" element={<Sprint />} />
            <Route path="qualifying" element={<Qualifying />} />
          </Route>
          <Route path="calendar/:id" element={<RaceEvent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
