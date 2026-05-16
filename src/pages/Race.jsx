import styles from "./Race.module.css";
import { useOutletContext, useParams } from "react-router-dom";
import SessionResults from "../components/tables/SessionResults.jsx";
import useFetchResults from "../hooks/useFetchResults.js";
export default function Race() {
  const { id } = useParams();
  const { data } = useOutletContext();
  const { results } = data;

  const {resultsData} = useFetchResults(id);

  // Temporary check to prevent error.
  if (!resultsData || Object.keys(resultsData).length === 0) {
    return;
  }
  console.log(resultsData.race.Races[0]);


  const race = resultsData.race.Races[0];
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
