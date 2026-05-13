import styles from "./NextRaceCard.module.css";
import SessionCard from "./SessionCard";
import { convertDate, convertTime } from "../../utils/helper";

export default function NextRaceCard({ event }) {
  const today = new Date().getTime();

  // Function to get days between section
  const getTimeDifference = (date) => {
    const raceDate = new Date(`${date}`).getTime();
    return Math.ceil((raceDate - today) / 1000 / 3600 / 24);
  };

  const timeRemaining = getTimeDifference(event.date, event.time);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardRaceInfo}>
        <div className={styles.cardTrackInfo}>
          <p className={styles.cardInfo}>Next Race</p>
          <h3 className={styles.cardHeader}>{event.raceName}</h3>
          <p className={styles.cardDescription}>
            {convertDate(event.date, event.time)} - {event.Circuit.circuitName}
          </p>
        </div>
        <div className={styles.cardCountdownContainer}>
          <p className={styles.cardCountdown}>
            <span>{timeRemaining}</span>{" "}
            {timeRemaining === 1 ? "day until race" : "days until race"}
          </p>
        </div>
      </div>
      <div className={styles.cardSessionTimes}>
        <h3 className={styles.cardSessionTimesHeader}>Weekend Schedule</h3>
        <SessionCard
          title="Free Practice 1"
          info={event.FirstPractice}
          isPrimary={false}
        />
        <SessionCard
          title="Free Practice 2"
          info={event.SecondPractice}
          isPrimary={false}
        />
        <SessionCard
          title="Sprint Qualifying"
          info={event.SprintQualifying}
          isPrimary={false}
        />
        <SessionCard
          title="Free Practice 3"
          info={event.ThirdPractice}
          isPrimary={false}
        />
        <SessionCard title="Sprint" info={event.Sprint} isPrimary={false} />
        <SessionCard
          title="Qualifying"
          info={event.Qualifying}
          isPrimary={true}
        />
        <SessionCard title="Race" info={event} isPrimary={true} />
      </div>
    </div>
  );
}
