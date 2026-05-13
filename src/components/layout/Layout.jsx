import styles from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function Layout() {
  const { data } = useFetch();
  console.log(data);
  return (
    <>
      <Navbar />
      <div className={styles.layoutContainer}>
        <Outlet context={{ data }} />
      </div>
    </>
  );
}
