import styles from "./NextRaceCard.module.css";
import { convertDate, convertTime } from "../../utils/helper";
import ScheduleCard from "./ScheduleCard";

export default function NextRaceCard({ event }) {
  // Gets value of today's date
  const today = new Date().setHours(0, 0, 0, 0);


  // Function to get days between section
  const getTimeDifference = (date) => {
    const raceDate = new Date(`${date}`).getTime();
    return Math.ceil((raceDate - today) / 1000 / 3600 / 24);
  };

  const timeRemaining = getTimeDifference(event.date);

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
      <ScheduleCard event={event} />
    </div>
  );
}
