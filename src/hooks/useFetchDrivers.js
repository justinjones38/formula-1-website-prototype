import { useState, useEffect } from "react";
import { getThisYear } from "../utils/helper";

export default function useFetchDrivers() {
  const [drivers, setDrivers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const year = getThisYear();

  useEffect(() => {
    console.log("run");
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.jolpi.ca/ergast/f1/${year}/drivers/?format=json`,
        );
        if (!res.ok) {
          throw new Error();
        }
        const data = await res.json();
        setDrivers(data.MRData.DriverTable.Drivers);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData()
  }, []);
  return {drivers, loading, error}
}
