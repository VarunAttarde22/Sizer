import styles from "./styles/Addons.module.scss";

const getLineItem = (
  label: string,
  minValue: string,
  maxValue: string
): any => {
  const minValueNumber = minValue.slice(0, minValue.search(/[^0-9]/g));
  const maxValueNumber = maxValue.slice(0, maxValue.search(/[^0-9]/g));
  const width: any =
    (parseInt(minValueNumber) / parseInt(maxValueNumber)) * 100;

  return (
    <div className={styles.Make_Content_Center}>
      <div className={styles.Line_Item_Wrapper}>
        <div className={styles.Label}>{label}</div>
        <div className={styles.Utilization_Wrapper}>
          {minValue && (
            <div className={styles.ProgressBarWrapper}>
              <div
                className={styles.ProgressBarWrapperItem}
                style={{ width: width + "%" }}
              >
                <div
                  className={styles.Label}
                  style={width < 9 ? { color: "black" } : {}}
                ></div>
              </div>
            </div>
          )}
          <div className={styles.Min_Max_Value}>
            {minValue}/{maxValue}
          </div>
        </div>
      </div>
    </div>
  );
};

export function getConsumptionDetails(el: any): import("react").ReactNode {
  return (
    <div className={`${styles.Grid_Template} ${styles.FontStyleItalic}`}>
      {[
        {
          label: "CPU Requests",
          minValue: el?.cpuRequest,
          maxValue: el?.maxCpuRequest,
        },
        {
          label: "Memory Requests",
          minValue: el?.memoryRequest,
          maxValue: el?.maxMemoryRequest,
        },
      ].map(({ label, minValue, maxValue }) =>
        getLineItem(label, minValue, maxValue)
      )}
    </div>
  );
}
