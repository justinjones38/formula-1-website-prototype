import styles from "./Race.module.css";
import { useOutletContext, useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import SessionResults from "../components/tables/SessionResults.jsx";
import useFetchResults from "../hooks/useFetchResults.js";
import NavButton from "../components/buttons/NavButton.jsx";

export default function Race() {
  const [active, setActive] = useState("");
  const { id } = useParams();
  const { data } = useOutletContext();
  const { results } = data;

  const {resultsData} = useFetchResults(id);

  // Temporary check to prevent error.
  if (!resultsData || Object.keys(resultsData).length === 0) {
    return;
  }


  const race = resultsData.race.Races[0];
  console.log(race);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Round {race.round} - {race.raceName}
      </h1>
      <div className={styles.btnContainer}>
        {resultsData.sprint.Races.length ? <NavButton>Sprint</NavButton> : null}
        {resultsData.qualifying.Races.length ? <NavButton>Qualifying</NavButton> : null}
        {resultsData.race.Races.length ? <NavButton>Race</NavButton> : null}
      </div>
      <SessionResults results={race.Results} />
    </div>
  );
}
