import styles from "./LinkButton.module.css";
import { Link } from "react-router-dom";

export default function LinkButton({ children, size, ...restProps }) {
  return (
    <Link {...restProps} className={`${styles.linkButton} ${styles[size]}`}>
      {children}
    </Link>
  );
}
