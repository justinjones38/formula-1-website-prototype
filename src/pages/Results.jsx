import { useOutletContext, Link } from "react-router-dom";
import styles from "./Results.module.css";
import useWindowWidth from "../hooks/useWindowWidth";
import LinkButton from "../components/buttons/LinkButton";

export default function Results() {
  const { data } = useOutletContext();
  const { windowWidth } = useWindowWidth();
  if (!data || Object.keys(data).length === 0) {
    return;
  }
  const { results } = data;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Results</h2>
      <table className={styles.raceTable}>
        <thead>
          <tr className={styles.headerRow}>
            <th className={styles.round}>Round</th>
            <th className={styles.race}>Race </th>
            <th className={styles.winner}>Winner</th>
            {windowWidth > 700 ? (
              <th className={styles.constructor}>Constructor</th>
            ) : null}
            <th className={styles.link}>Results</th>
          </tr>
        </thead>
        <tbody>
          {results.Races.map((race) => (
            <tr className={styles.raceRow} key={race.round}>
              <td className={styles.round}>{race.round}</td>
              <td className={styles.race}>{race.raceName}</td>
              <td className={styles.winner}>
                {race.Results[0].Driver.givenName}{" "}
                {race.Results[0].Driver.familyName}
              </td>
              {windowWidth > 700 ? (
                <td className={styles.constructor}>
                  {race.Results[0].Constructor.name}
                </td>
              ) : null}
              <td className={styles.linkItem}>
                <LinkButton
                  to={`/${race.Circuit.circuitId}`}
                  className={styles.linkButton}
                  size="sm"
                >
                  View Results
                </LinkButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
