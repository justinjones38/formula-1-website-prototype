import styles from "./Layout.module.css";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function Layout() {
  const { data, loading, error } = useFetch();
  if (loading) {
    return (
      <>
        <Navbar />
        <h2>Loading ...</h2>
      </>
    );
  }

  return (
    <>
      <Navbar />
      {error ? (
        <h2>404: cannot fetch data </h2>
      ) : (
        <div className={styles.layoutContainer}>
          <Outlet context={{ data }} />
        </div>
      )}
    </>
  );
}
