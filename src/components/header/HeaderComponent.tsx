import styles from "./styles/HeaderComponent.module.scss";

export const HeaderComponent = ({ title }: { title: string }): JSX.Element => {
  return (
    <div className={styles.Header_HeaderWrapper}>
      <div className={styles.Header_Container}>
        <div className={styles.Header_Container_Branding_Area}>
          <div className={styles.Header_Container_Title_Name}>{title}</div>
        </div>
      </div>
    </div>
  );
};
