import styles from "./SecondaryHeroCard.module.css";
import { convertDate } from "../../utils/helper";
import LinkButton from "../buttons/LinkButton";
import Calendar from "../../pages/Calendar";

export default function UpcomingSchedule(props) {
  return (
    <div className={`${styles.cardContainer} ${styles.cardContainerUpcoming}`}>
      <p className={styles.cardUpcomingInfo}>Upcoming Schedule</p>
      {props.upcomingSchedule.map((event) => (
        <div className={styles.cardMiniContainer} key={event.round}>
          <div className={styles.cardUpcomingLeftSide}>
            <h4 className={styles.cardUpcomingTitle}>{event.raceName}</h4>
            <p className={styles.cardUpcomingRound}>Round {event.round}</p>
          </div>
          <div className={styles.cardUpcomingRightSide}>
            <p className={styles.cardUpcomingDate}>
              {convertDate(event.date, event.time)}
            </p>
          </div>
        </div>
      ))}
      <div className={styles.btnContainer}>
        <LinkButton to="calendar" element={<Calendar />}>View Schedule</LinkButton>
      </div>
    </div>
  );
}
