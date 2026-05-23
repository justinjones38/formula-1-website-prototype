import styles from "./Home.module.css";
import { useOutletContext } from "react-router-dom";

import NextRaceCard from "../components/cards/NextRaceCard.jsx";
import LastRaceCard from "../components/cards/LastRaceCard.jsx";
import UpcomingSchedule from "../components/cards/UpcomingSchedule.jsx";
import DriverStandings from "../components/tables/DriversStandingsTable.jsx";
import ConstructorStandings from "../components/tables/ConstructorStandingsTable.jsx";

import { useState } from "react";

export default function Home() {
  const [driverStandingsState, setDriverStandingsState] = useState(true);

  const { data } = useOutletContext();
  const { calendar, driverStandings, constructorStandings, results } = data;

  // Get current round of schedule by checking how many races have results for them
  const eventRoundCompleted = results.Races.length;

  // Finding the next event, if no event, then section skipped
  const findNextEvent = calendar.Races.find(
    (event) => parseInt(event.round) === eventRoundCompleted + 1,
  );

  // Find the last event completed, if season has started, then it is skipped
  const findLastEventCompleted = results.Races.find(
    (event) => parseInt(event.round) === eventRoundCompleted,
  );

  // Get upcoming schedule for calendar
  const upcomingSchedule = calendar.Races.filter(
    (event) =>
      event.round > eventRoundCompleted + 1 &&
      event.round < eventRoundCompleted + 5,
  );

  // Getting only the top 5 in driver standings
  const filterDriverStandings =
    driverStandings.StandingsLists[0].DriverStandings.filter(
      (driver, index) => index < 5,
    );

  // Getting only the top 5 in the constructor standings
  const filterConstructorStandings =
    constructorStandings.StandingsLists[0].ConstructorStandings.filter(
      (constructor, index) => index < 5,
    );

  return (
    <section className={styles.homeSection}>
      <h1 className={styles.homeTitle}>
        {calendar.season} Season - Round {findNextEvent.round} of{" "}
        {calendar.Races.length}
      </h1>

      {findNextEvent ? <NextRaceCard event={findNextEvent} /> : null}

      <div className={styles.homeSecondaryCards}>
        {findLastEventCompleted ? (
          <LastRaceCard event={findLastEventCompleted} />
        ) : null}

        {upcomingSchedule && upcomingSchedule.length !== 0 ? (
          <UpcomingSchedule upcomingSchedule={upcomingSchedule} />
        ) : null}
      </div>

      <div className={styles.homeStandings}>
        <div className={styles.homeButtonContainer}>
          <button
            disabled={driverStandingsState}
            className={styles.homeButton}
            onClick={() => setDriverStandingsState(true)}
          >
            Drivers
          </button>
          <button
            disabled={!driverStandingsState}
            className={styles.homeButton}
            onClick={() => setDriverStandingsState(false)}
          >
            Constructors
          </button>
        </div>
        {driverStandingsState ? (
          <DriverStandings drivers={filterDriverStandings} isFiltered={true} />
        ) : (
          <ConstructorStandings
            constructors={filterConstructorStandings}
            isFiltered={true}
          />
        )}
      </div>
    </section>
  );
}
