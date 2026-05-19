import { useOutletContext } from "react-router-dom"
import styles from "./DriversStandings.module.css"
import ConstructorStandingsTable from "../components/tables/ConstructorStandingsTable"

export default function ConstructorsStandings() {
  const {constructorStandings} = useOutletContext()
  return (
        <ConstructorStandingsTable
          constructors={
            constructorStandings.StandingsLists[0].ConstructorStandings
          }
        />
  )
}