import { useOutletContext } from "react-router-dom";
import styles from "./Race.module.css"
import RaceTable from "../components/tables/RaceTable";

export default function Sprint() {
  const {resultsData} = useOutletContext();
  console.log(resultsData.sprint.Races[0].SprintResults);
  return (
    <div>
      <h1>Sprint</h1>
      <RaceTable results={resultsData.sprint.Races[0].SprintResults} />
    </div>
  )
}