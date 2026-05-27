import useFetchResults from "../../hooks/useFetchResults";
import styles from "./Schedule.module.css";
import SessionCard from "./SessionCard";

export default function ScheduleCard({ event }) {
  const { resultsData, loading, error } = useFetchResults(
    event.Circuit.circuitId,
  );
  if (loading) {
    return <h2>Loading ...</h2>;
  }

  if (error) {
    return <h2>404: Data cannot be fetched</h2>;
  }

  return (
    <div className={styles.cardSessionTimes}>
      <h3 className={styles.cardSessionTimesHeader}>Weekend Schedule</h3>
      <SessionCard
        title="Free Practice 1"
        link="/fp1"
        info={event.FirstPractice}
        isPrimary={false}
      />
      <SessionCard
        title="Free Practice 2"
        link="/fp2"
        info={event.SecondPractice}
        isPrimary={false}
      />
      <SessionCard
        title="Sprint Qualifying"
        link="/sq"
        info={event.SprintQualifying}
        isPrimary={false}
      />
      <SessionCard
        title="Free Practice 3"
        link="/fp3"
        info={event.ThirdPractice}
        isPrimary={false}
      />
      <SessionCard
        title="Sprint"
        link="/sprint"
        info={event.Sprint}
        isPrimary={false}
        results={
          resultsData.sprint.Races.length !== 0 ? resultsData.sprint : null
        }
      />
      <SessionCard
        title="Qualifying"
        link="/qualifying"
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
        link=""
        info={event}
        isPrimary={true}
        results={
          resultsData.race.Races.length !== 0 ? resultsData.qualifying : null
        }
      />
    </div>
  );
}
