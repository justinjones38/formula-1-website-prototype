import styles from "./Standings.module.css";

export default function ConstructorStandings({ constructors, isFiltered }) {

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableHeadRow}>
            <th className={styles.posCol}>Pos</th>
            <th className={styles.nameCol}>Constructor</th>
            <th className={styles.pointsCol}>Points</th>
            <th className={styles.winsCol}>Wins</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {constructors.map((constructor) => (
            <tr
              className={styles.tableBodyRow}
              key={constructor.Constructor.constructorId}
            >
              <td className={styles.posCol}>{constructor.position}</td>
              <td className={styles.nameCol}>{constructor.Constructor.name}</td>
              <td className={styles.pointsCol}>{constructor.points}</td>
              <td className={styles.winsCol}>{constructor.wins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
