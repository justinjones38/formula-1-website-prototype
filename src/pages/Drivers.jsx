import { useOutletContext } from "react-router-dom";
import styles from "./Drivers.module.css";

export default function Drivers(props) {
  const { data } = useOutletContext();
  if (!data || Object.keys(data).length === 0) {
    return;
  }

  const { drivers, driverStandings } = data;
  console.log(drivers);
  const filteredDrivers = drivers.Drivers.filter(
    (driver) => driver.permanentNumber,
  );

  // Used to get access to constructor of each driver
  const fullDriverStandings = driverStandings.StandingsLists[0].DriverStandings;
  const driversInfo = filteredDrivers.map((driver) => {
    const findDriverInfo = fullDriverStandings.find(
      (item) => item.Driver.permanentNumber === driver.permanentNumber,
    );
    return {
      ...driver,
      ...findDriverInfo,
    };
  });

  return (
    <div className={styles.driverContainer}>
      <h1 className={styles.title}>Drivers - {drivers.season} Season</h1>
      <div className={styles.cards}>
        {driversInfo.map((driver) => (
          <div className={styles.driverCard} key={driver.permanentNumber}>
            <h3 className={styles.drivingNumber}>{driver.permanentNumber}</h3>
            <p className={styles.driver}>
              {driver.givenName} {driver.familyName}
            </p>
            <p className={styles.constructors}>{driver.Constructors[0].name}</p>
            <div className={styles.personalInfoContainer}>
              <div className={styles.personalInfo}>
                <p className={styles.personalInfoDescription}>Nationality</p>
                <p className={styles.ersonalInfoValue}>{driver.nationality}</p>
              </div>
              <div className={styles.personalInfo}>
                <p className={styles.personalInfoDescription}>Date of Birth</p>
                <p className={styles.dateOfBirth}>{driver.dateOfBirth}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
