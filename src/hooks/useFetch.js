import { useState, useEffect } from "react";

export default function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const date = new Date();
  const year = date.getFullYear();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRes = await Promise.all([
          fetch(`https://api.jolpi.ca/ergast/f1/${year}/races/?format=json`),
          fetch(
            `https://api.jolpi.ca/ergast/f1/${year}/driverstandings/?format=json`,
          ),
          fetch(
            `https://api.jolpi.ca/ergast/f1/${year}/constructorstandings/?format=json`,
          ),
          fetch(
            `https://api.jolpi.ca/ergast/f1/${year}/last/results?format=json`,
          ),
        ]);

        dataRes.forEach((res) => {
          if (!res.ok) {
            throw new Error();
          }
        });

        const fetchingData = await Promise.all(
          dataRes.map((res) => res.json()),
        );

        //  Getting the values from the fetchingData Array
        const [
          calendar,
          driverStandings,
          constructorStandings,
          results,
        ] = fetchingData;

        setData({
          calendar: calendar.MRData.RaceTable,
          driverStandings: driverStandings.MRData.StandingsTable,
          constructorStandings: constructorStandings.MRData.StandingsTable,
          results: results.MRData.RaceTable,
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return { data, loading, error };
}
