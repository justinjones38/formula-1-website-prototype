import styles from "./SessionCard.module.css";
import { convertDate, convertTime, getDayOfWeek } from "../../utils/helper";

export default function SessionCard({ info, isPrimary, title }) {
  if (!info || Object.keys(info).length === 0) {
    return;
  }

  const dayOfWeek = getDayOfWeek(info.date, info.time);

  return (
    <div className={styles.cardContainer}>
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardDay} aria-label={dayOfWeek.full}>
        {dayOfWeek.abbr}
      </p>
      <p className={styles.cardDate}>{convertDate(info.date, info.time)}</p>
      <p className={styles.cardTime}>{convertTime(info.date, info.time)}</p>
    </div>
  );
}
