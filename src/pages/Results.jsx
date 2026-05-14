import { useOutletContext, Link } from "react-router-dom";
import styles from "./Results.module.css";

export default function Results() {
  const { data } = useOutletContext();
  if (!data || Object.keys(data).length === 0) {
    return;
  }
  const { results } = data;

  console.log(results.Races);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Results</h2>
      <table className={styles.raceTable}>
        <thead>
          <tr>
            <th>Round</th>
            <th>Location</th>
            <th>Winner</th>
            <th>Constructor</th>
            <th>Results</th>
          </tr>
        </thead>
        <tbody>
          {results.Races.map((race) => (
            <tr className={styles.raceItem} key={race.round}>
              <td>{race.round}</td>
              <td>{race.raceName}</td>
              <td>
                {race.Results[0].Driver.givenName}{" "}
                {race.Results[0].Driver.familyName}
              </td>
              <td>{race.Results[0].Constructor.name}</td>
              <td>
                <Link to="#">View Results</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
