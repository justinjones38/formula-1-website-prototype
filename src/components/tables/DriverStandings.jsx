import styles from "./Standings.module.css";
import { getPointsDifferential } from "../../utils/helper";

export default function DriverStandings({ drivers, isFiltered }) {
  const maxPoints = drivers[0].points;
  console.log(maxPoints);
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableHeadRow}>
            <th className={styles.posCol}>Pos</th>
            <th className={styles.nameCol}>Driver</th>
            <th className={styles.pointsCol}>Points</th>
            <th className={styles.winsCol}>Wins</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {drivers.map((driver, index) => (
            <tr
              className={styles.tableBodyRow}
              key={driver.Driver.permanentNumber}
            >
              <td className={styles.posCol}>{driver.position}</td>
              <td className={styles.nameCol}>
                <p className={styles.driverInfo}>
                  {driver.Driver.givenName} {driver.Driver.familyName}
                </p>
                <p className={styles.teamInfo}>{driver.Constructors[0].name}</p>
              </td>
              <td className={styles.pointsCol}>
                <p className={styles.points}>{driver.points}</p>
                {index !== 0 ? (
                  <p className={styles.pointsDiff}>
                    ({getPointsDifferential(maxPoints, driver.points)})
                  </p>
                ) : null}
              </td>
              <td className={styles.winsCol}>{driver.wins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
