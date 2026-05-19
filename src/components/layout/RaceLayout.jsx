import styles from "./RaceLayout.module.css";
import { Outlet, useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SessionResults from "../tables/RaceTable.jsx";
import useFetchResults from "../../hooks/useFetchResults.js";
import { NavLink } from "react-router-dom";
import QualifyingResults from "../../pages/Qualifying.jsx";

export default function Race() {
  const [active, setActive] = useState("race");
  const { id } = useParams();
  const { data } = useOutletContext();
  const { results } = data;

  const { resultsData } = useFetchResults(id);

  // Temporary check to prevent error.
  if (!resultsData || Object.keys(resultsData).length === 0) {
    return;
  }


  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        {resultsData.sprint.Races.length ? (
          <NavLink
          to="sprint"
          >
            Sprint
          </NavLink>
        ) : null}
        {resultsData.qualifying.Races.length ? (
          <NavLink
          to="qualifying"
          >
            Qualifying
          </NavLink>
        ) : null}
        {resultsData.race.Races.length ? (
          <NavLink
          to="."
          >
            Race
          </NavLink>
        ) : null}
      </div>
      <Outlet context={{resultsData}} />
    </div>
  );
}
