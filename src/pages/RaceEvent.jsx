import { useOutletContext, useParams } from "react-router-dom";
import ScheduleCard from "../components/cards/ScheduleCard";
import styles from "./RaceEvent.module.css";

export default function RaceCalendar() {
  const { id } = useParams();
  const { data } = useOutletContext();
  // Temporary check to prevent error.
  if (!data || Object.keys(data).length === 0) {
    return;
  }

  const { calendar } = data;

  const event = calendar.Races.find((event) => event.Circuit.circuitId === id);
  console.log(event);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Round {event.round} - {event.raceName}
      </h1>
      <ScheduleCard event={event} />
    </div>
  );
}
