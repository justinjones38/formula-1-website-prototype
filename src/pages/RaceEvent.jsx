import { useOutletContext, useParams } from "react-router-dom";

export default function RaceCalendar() {
  const {id} = useParams();
  const {data} = useOutletContext();
  console.log(data);
  // Temporary check to prevent error.
  if (!data || Object.keys(data).length === 0) {
    return;
  }

  return <h1>Hello World</h1>;
}