import LinkButton from "../buttons/LinkButton";
import SessionResults from "../tables/SessionResults";
import styles from "./SecondaryHeroCard.module.css";

export default function LastRaceCard({ event }) {
  const podiumResults = event.Results.filter((item, index) => index < 3);
  console.log(event);
  return (
    <div className={styles.cardContainer}>
      <p className={styles.cardInfo}>Previous Race Result</p>
      <h4 className={styles.cardTitle}>
        {event.raceName} - Round {event.round}
      </h4>
      <SessionResults results={podiumResults} />
      <div className={styles.btnContainer}>
        <LinkButton size="md" to={event.Circuit.circuitId}>
          Full Race Results
        </LinkButton>
      </div>
    </div>
  );
}
