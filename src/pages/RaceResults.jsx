import { useOutletContext } from "react-router-dom";
import styles from "./RaceResults.module.css";
import RaceTable from "../components/tables/RaceTable";

export default function RaceResults() {
  const { resultsData } = useOutletContext();
  return (
    <div>
      
      <RaceTable results={resultsData.race.Races[0].Results} />
    </div>
  );
}
