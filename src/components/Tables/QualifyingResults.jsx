import useWindowWidth from "../../hooks/useWindowWidth";
import styles from "./QualifyingResults.module.css";

export default function QualifyingResults({ results }) {
  const { windowWidth } = useWindowWidth();
  console.log(results);

  return (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableHeadRow}>
          <th className={styles.posCol} aria-label="Position">
            Pos
          </th>
          <th className={styles.driverCol}>Driver</th>
          {windowWidth >= 450 ? 
          <>
          <th className={styles.gapCol}>Q1</th>
          <th className={styles.gapCOl}>Q2</th>          
          </> : null
        }

          <th className={styles.gapCOl}>Q3</th>
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
            {windowWidth >= 450 ?
            <>
            <td className={styles.gapCol}>{driver.Q1}</td>
            <td className={styles.gapCol}>{driver.Q2}</td> 
            </> : null
          }

            <td className={styles.gapCol}>{driver.Q3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
