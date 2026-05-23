import { useOutletContext } from "react-router-dom";
import styles from "./Race.module.css";
import RaceTable from "../components/tables/RaceTable";

export default function Race() {
  const { resultsData } = useOutletContext();
  return (
    <div>
      
      <RaceTable results={resultsData.race.Races[0].Results} />
    </div>
  );
}
