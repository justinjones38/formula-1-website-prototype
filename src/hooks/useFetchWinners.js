import { useState, useEffect } from "react";
import { getThisYear } from "../utils/helper";

export default function useFetchWinners() {
  const [winners, setWinners] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const year = getThisYear();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.jolpi.ca/ergast/f1/${year}/results/1/?format=json`,
        );
        if (!res.ok) {
          throw new Error();
        }
        const data = await res.json();
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData()
  }, []);
  return {winners, loading, error}
}
