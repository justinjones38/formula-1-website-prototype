import RaceResults from "../tables/Results";
import styles from "./SecondaryHeroCard.module.css";

export default function LastRaceCard(props) {
  const podiumResults = props.event.Results.filter((item, index) => index < 3);
  return (
    <div className={styles.cardContainer}>
      <p className={styles.cardInfo}>Previous Race Result</p>
      <h4 className={styles.cardTitle}>
        {props.event.raceName} - Round {props.event.round}
      </h4>
      <RaceResults podiumResults={podiumResults} />
    </div>
  );
}
