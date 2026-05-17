import styles from "./Standings.module.css";

export default function DriverStandings({ drivers, isFiltered }) {
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
          {drivers.map((driver) => (
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
              <td className={styles.pointsCol}>{driver.points}</td>
              <td className={styles.winsCol}>{driver.wins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
