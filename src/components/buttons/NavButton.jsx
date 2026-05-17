import styles from "./NavButton.module.css" 

export default function NavButton({children, ...restProps}) {
  return (
    <button {...restProps} className={styles["button"]} >{children}</button>
  )
}