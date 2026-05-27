import useFetchResults from "../../hooks/useFetchResults";
import LinkButton from "../buttons/LinkButton";
import RaceTable from "../tables/RaceTable";
import styles from "./SecondaryHeroCard.module.css";

export default function LastRaceCard({ event }) {
  const podiumResults = event.Results.filter(
    (item, index) => index < 3,
  );
  return (
    <div className={styles.cardContainer}>
      <p className={styles.cardInfo}>Previous Race Result</p>
      <h4 className={styles.cardTitle}>
        {event.raceName} - Round {event.round}
      </h4>
      <RaceTable results={podiumResults} />
      <div className={styles.btnContainer}>
        <LinkButton size="md" to={`results/${event.Circuit.circuitId}`}>
          Full Race Results
        </LinkButton>
      </div>
    </div>
  );
}
