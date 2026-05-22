import { useState, useEffect } from "react";

export default function useFetchResults(circuitId) {
  const [resultsData, setResultsData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const date = new Date();
  const year = date.getFullYear();

  useEffect(() => {
    const fetchData = async (circuitId) => {
      try {
        const dataRes = await Promise.all([
          fetch(
            `https://api.jolpi.ca/ergast/f1/${year}/circuits/${circuitId}/results/?format=json`,
          ),
          fetch(
            `https://api.jolpi.ca/ergast/f1/${year}/circuits/${circuitId}/sprint/?format=json`,
          ),
          fetch(
            `https://api.jolpi.ca/ergast/f1/${year}/circuits/${circuitId}/qualifying/?format=json`,
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
        const [race, sprint, qualifying] = fetchingData;

        setResultsData({
          race: race.MRData.RaceTable,
          sprint: sprint.MRData.RaceTable,
          qualifying: qualifying.MRData.RaceTable,
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData(circuitId);
  }, []);
  return { resultsData, error };
}
