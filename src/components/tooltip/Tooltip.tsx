import styles from "./styles/Tooltip.module.scss";
export const Tooltip = ({
  children,
  toolTipText,
  direction = "left",
}: any): JSX.Element => {
  return (
    <div className={styles.hoverText}>
      {children}
      <div className={`${styles.tooltipText} ${styles[direction]}`}>
        {toolTipText}
      </div>
    </div>
  );
};
