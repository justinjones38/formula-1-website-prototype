import useWindowWidth from "../../hooks/useWindowWidth";
import styles from "./SessionResults.module.css";

export default function RaceResults({ results }) {
  console.log(results);
  const { windowWidth } = useWindowWidth();
  const getGap = (driver) => {
    if (driver.status === "Finished") {
      return driver.Time.time;
    } else if (driver.status === "Lapped") {
      return `+${results[0].laps - driver.laps} Laps`;
    } else if (driver.status === "Did not start") {
      return "DNS";
    } else {
      return "DNF";
    }
  };
  return (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableHeadRow}>
          <th className={styles.posCol} aria-label="Position">
            Pos
          </th>
          <th className={styles.driverCol}>Driver</th>
          <th className={styles.gapCol}>Gap</th>
          {windowWidth > 700 ? (
            <th className={styles.pointsCol}>Points</th>
          ) : null}
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {results.map((driver) => (
          <tr key={driver.number} className={styles.tableBodyRow}>
            <td className={styles.posCol}>{driver.position}</td>
            <td className={styles.driverCol}>
              <p className={styles.driverInfo}>
                {driver.Driver.givenName} {driver.Driver.familyName}
              </p>
              <p className={styles.teamInfo}>{driver.Constructor.name}</p>
            </td>
            <td className={styles.gapCol}>{getGap(driver)}</td>
            {windowWidth > 700 ? (
              <td className={styles.pointsCol}>{driver.points}</td>
            ) : null}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
