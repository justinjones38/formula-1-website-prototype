import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./Standings.module.css";
import DriverStandings from "../components/tables/DriverStandings";
import ConstructorStandings from "../components/tables/ConstructorStandings";
import NavButton from "../components/buttons/NavButton";

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
      <h1 className={styles.title}>Standings</h1>
      <div className={styles.buttonContainer}>
        <NavButton
          onClick={() => setIsDriverStandings(true)}
          disabled={isDriverStandings}
        >
          Drivers
        </NavButton>
        <NavButton
          onClick={() => setIsDriverStandings(false)}
          disabled={!isDriverStandings}
        >
          Constructors
        </NavButton>
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
