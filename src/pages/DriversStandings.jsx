import { useOutletContext } from "react-router-dom";
import styles from "./DriversStandings.module.css";
import DriverStandingsTable from "../components/tables/DriversStandingsTable";

export default function DriversStandings() {
  const { driverStandings } = useOutletContext();
  return (
    <div className={styles.standings}>
      <DriverStandingsTable
        drivers={driverStandings.StandingsLists[0].DriverStandings}
      />
    </div>
  );
}
