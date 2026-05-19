import useFetchResults from "../../hooks/useFetchResults";
import styles from "./Schedule.module.css";
import SessionCard from "./SessionCard";

export default function ScheduleCard({ event }) {
  const { resultsData } = useFetchResults(event.Circuit.circuitId);
  if (!resultsData || Object.keys(resultsData).length === 0) {
    return;
  }
  console.log(resultsData);
  return (
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
      <SessionCard
        title="Sprint"
        info={event.Sprint}
        isPrimary={false}
        results={
          resultsData.sprint.Races.length !== 0 ? resultsData.sprint : null
        }
      />
      <SessionCard
        title="Qualifying"
        info={event.Qualifying}
        isPrimary={true}
        results={
          resultsData.qualifying.Races.length !== 0
            ? resultsData.qualifying
            : null
        }
      />
      <SessionCard
        title="Race"
        info={event}
        isPrimary={true}
        results={
          resultsData.race.Races.length !== 0 ? resultsData.qualifying : null
        }
      />
    </div>
  );
}
