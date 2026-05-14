import { convertDate } from "../utils/helper";
import styles from "./Calendar.module.css";
import { useOutletContext,Link } from "react-router-dom";

export default function Calendar() {
  const { data } = useOutletContext();
  if (!data || Object.keys(data).length === 0) {
    return;
  }
  const { calendar, results } = data;
  const lastRound = results.Races.length + 1;
  const mappedCalendar = calendar.Races.map((event) => {
    if (parseInt(event.round) < lastRound) {
      return {
        ...event,
        completed: true,
        progress: "Completed",
        styling: "completed",
      };
    } else if (parseInt(event.round) === lastRound) {
      return {
        ...event,
        completed: false,
        progress: "Next",
        styling: "next",
      };
    } else {
      return {
        ...event,
        completed: false,
        progress: "Upcoming",
        styling: "upcoming",
      };
    }
  });

  console.log(mappedCalendar);

  return (
    <div className={styles.calendarContainer}>
      <h2 className={styles.title}>Race Calendar </h2>
      <div className={styles.cards}>
        {mappedCalendar.map((event, index) => (
          <div
            className={`${styles.cardContainer} ${styles[event.styling]}`}
            key={event.round}
          >
            <div className={styles.cardLeft}>
              <p className={styles.raceInfo}>Round {event.round}</p>
              <p className={styles.raceName}>{event.raceName}</p>
              <p className={styles.trackName}>{event.Circuit.circuitName}</p>
              {!event.completed ? (
                <p className={styles.date}>
                  {convertDate(event.date, event.time)}
                </p>
              ) : (
                <p className={styles.driverInfo}>
                  {results.Races[index].Results[0].Driver.givenName}{" "}
                  {results.Races[index].Results[0].Driver.familyName}
                </p>
              )}
            </div>
            <div className={styles.cardRight}>
              <Link to={`${event.Circuit.circuitId}`} className={`${styles.progressInfo} ${styles[event.styling]}`}>
                {event.progress}
              </Link>
              {event.completed ? (
                <p className={styles.date}>
                  {convertDate(event.date, event.time)}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
