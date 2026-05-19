import useFetchResults from "../../hooks/useFetchResults";
import LinkButton from "../buttons/LinkButton";
import SessionResults from "../tables/RaceTable";
import styles from "./SecondaryHeroCard.module.css";

export default function LastRaceCard({ event }) {
  const { resultsData } = useFetchResults(event.Circuit.circuitId);
  if (!resultsData || Object.keys(resultsData).length === 0) {
    return;
  }
  const podiumResults = resultsData.race.Races[0].Results.filter(
    (item, index) => index < 3,
  );
  return (
    <div className={styles.cardContainer}>
      <p className={styles.cardInfo}>Previous Race Result</p>
      <h4 className={styles.cardTitle}>
        {event.raceName} - Round {event.round}
      </h4>
      <SessionResults results={podiumResults} />
      <div className={styles.btnContainer}>
        <LinkButton size="md" to={`results/${event.Circuit.circuitId}`}>
          Full Race Results
        </LinkButton>
      </div>
    </div>
  );
}
