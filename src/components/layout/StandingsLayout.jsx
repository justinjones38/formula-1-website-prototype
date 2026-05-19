import { useState } from "react";
import { useOutletContext, NavLink, Outlet } from "react-router-dom";
import styles from "./StandingsLayout.module.css";
import DriverStandings from "../tables/DriversStandingsTable";
import ConstructorStandings from "../tables/ConstructorStandingsTable";
import NavButton from "../buttons/NavButton";

export default function StandingsLayout() {
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
        <NavLink
          to="."
          className={({isActive}) => isActive ? `${styles["navLink"]} ${styles["active"]}` : `${styles["navLink"]}`}
          end
        >
          Drivers
        </NavLink>
        <NavLink
        to="constructors"
        className={({isActive}) => isActive ? `${styles["navLink"]} ${styles["active"]}` : `${styles["navLink"]}`}
        >
          Constructors
        </NavLink>
      </div>
      <Outlet context={{driverStandings, constructorStandings}} />
    </div>
  );
}
