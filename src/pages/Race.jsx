import styles from "./Race.module.css";
import { useOutletContext, useParams } from "react-router-dom";
import SessionResults from "../components/tables/SessionResults.jsx";
export default function Race() {
  const { id } = useParams();
  const { data } = useOutletContext();
  const { results } = data;

  // Temporary check to prevent error.
  if (!data || Object.keys(data).length === 0) {
    return;
  }

  const race = results.Races.find((race) => race.Circuit.circuitId === id);
  console.log(race);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Round {race.round} - {race.raceName}
      </h1>
      <SessionResults results={race.Results} />
    </div>
  );
}
