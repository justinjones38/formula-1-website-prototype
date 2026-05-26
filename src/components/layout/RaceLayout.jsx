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

  const { resultsData, loading, error } = useFetchResults(id);

  if (loading) {
    return <h2>Loading ...</h2>;
  }
  if (error) {
    return <h2>404: Cannot fetch data</h2>;
  }

  console.log(resultsData.sprint, resultsData.qualifying, resultsData.race)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Round {resultsData.sprint?.Races[0]?.round || resultsData.qualifying?.Races[0]?.round} -{" "}
        {resultsData.sprint?.Races[0]?.raceName || resultsData.qualifying?.Races[0]?.raceName}
      </h2>

      <div className={styles.btnContainer}>
        {resultsData.sprint.Races.length ? (
          <NavLink
            to="sprint"
            className={({ isActive }) =>
              isActive
                ? `${styles["navLink"]} ${styles["active"]}`
                : `${styles["navLink"]}`
            }
          >
            Sprint
          </NavLink>
        ) : null}
        {resultsData.qualifying.Races.length ? (
          <NavLink
            to="qualifying"
            className={({ isActive }) =>
              isActive
                ? `${styles["navLink"]} ${styles["active"]}`
                : `${styles["navLink"]}`
            }
          >
            Qualifying
          </NavLink>
        ) : null}
        {resultsData.race.Races.length ? (
          <NavLink
            to="."
            className={({ isActive }) =>
              isActive
                ? `${styles["navLink"]} ${styles["active"]}`
                : `${styles["navLink"]}`
            }
            end
          >
            Race
          </NavLink>
        ) : null}
      </div>
      <Outlet context={{ resultsData }} />
    </div>
  );
}
