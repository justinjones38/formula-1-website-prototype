import styles from "./Layout.module.css";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function Layout() {
  const { data } = useFetch();
  return (
    <>
      <Navbar />
      <div className={styles.layoutContainer}>
        <Outlet context={{ data }} />
      </div>
    </>
  );
}
