import styles from "./LinkButton.module.css";
import { Link } from "react-router-dom"


export default function LinkButton({children, ...restProps}) {
  return <Link {...restProps} className={styles.linkButton}>{children}</Link>
}