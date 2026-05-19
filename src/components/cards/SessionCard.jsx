import styles from "./SessionCard.module.css";
import { convertDate, convertTime, getDayOfWeek } from "../../utils/helper";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SessionCard({
  info,
  link,
  isPrimary,
  title,
  results = null,
}) {
  console.log(results);
  if (!info || Object.keys(info).length === 0) {
    return;
  }

  const dayOfWeek = getDayOfWeek(info.date, info.time);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.leftContainer}>
        <h4 className={styles.cardTitle}>{title}</h4>
      </div>
      <div className={styles.rightContainer}>
        <p className={styles.cardDate}>
          <span aria-label={dayOfWeek.full}>{dayOfWeek.abbr} - </span>
          {convertDate(info.date, info.time)} -{" "}
          {convertTime(info.date, info.time)}
        </p>
        {results ? (
          <Link
            className={styles.button}
            to={`/results/${results.circuitId}${link}`}
          >
            Results <FaLongArrowAltRight />
          </Link>
        ) : null}
      </div>
    </div>
  );
}
