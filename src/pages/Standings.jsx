import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./Standings.module.css";
import DriverStandings from "../components/Tables/DriverStandings";
import ConstructorStandings from "../components/Tables/ConstructorStandings";

export default function Standings() {
  const [isDriverStandings, setIsDriverStandings] = useState(true);
  const { data } = useOutletContext();
  if (!data || Object.keys(data).length === 0) {
    return;
  }
  const { driverStandings, constructorStandings } = data;
  console.log(driverStandings.StandingsLists[0].DriverStandings);
  return (
    <div className={styles.standings}>
      <h2 className={styles.title}>Standings</h2>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => setIsDriverStandings(true)}
          disabled={isDriverStandings}
        >
          Drivers
        </button>
        <button
          className={styles.button}
          onClick={() => setIsDriverStandings(false)}
          disabled={!isDriverStandings}
        >
          Constructors
        </button>
      </div>
      {isDriverStandings ? (
        <DriverStandings
          drivers={driverStandings.StandingsLists[0].DriverStandings}
          isFiltered={false}
        />
      ) : (
        <ConstructorStandings
          constructors={
            constructorStandings.StandingsLists[0].ConstructorStandings
          }
          isFiltered={false}
        />
      )}
    </div>
  );
}
