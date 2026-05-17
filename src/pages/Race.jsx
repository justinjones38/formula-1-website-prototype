import styles from "./Race.module.css";
import { useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SessionResults from "../components/tables/SessionResults.jsx";
import useFetchResults from "../hooks/useFetchResults.js";
import NavButton from "../components/buttons/NavButton.jsx";
import QualifyingResults from "../components/tables/QualifyingResults.jsx";

export default function Race() {
  const [active, setActive] = useState("race");
  const { id } = useParams();
  const { data } = useOutletContext();
  const { results } = data;

  const { resultsData } = useFetchResults(id);

  // Temporary check to prevent error.
  if (!resultsData || Object.keys(resultsData).length === 0) {
    return;
  }

  const race = resultsData.race.Races[0];
  console.log(resultsData.qualifying.Races[0].QualifyingResults);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Round {race.round} - {race.raceName}
      </h1>
      <div className={styles.btnContainer}>
        {resultsData.sprint.Races.length ? (
          <NavButton
            disabled={active === "sprint"}
            onClick={() => setActive("sprint")}
          >
            Sprint
          </NavButton>
        ) : null}
        {resultsData.qualifying.Races.length ? (
          <NavButton
            disabled={active === "qualifying"}
            onClick={() => setActive("qualifying")}
          >
            Qualifying
          </NavButton>
        ) : null}
        {resultsData.race.Races.length ? (
          <NavButton
            disabled={active === "race"}
            onClick={() => setActive("race")}
          >
            Race
          </NavButton>
        ) : null}
      </div>
      {active === "race" ? <SessionResults results={race.Results} /> : null}
      {active === "sprint" ? (
        <SessionResults results={resultsData.sprint.Races[0].SprintResults} />
      ) : null}
      {active === "qualifying" ? (
        <QualifyingResults
          results={resultsData.qualifying.Races[0].QualifyingResults}
        />
      ) : null}
    </div>
  );
}
