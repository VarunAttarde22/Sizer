import { Key, useContext, useState } from "react";
import Image from "next/image";
import { MyContext } from "@/context/utils/CreateContext";
import { isMandatoryComponent } from "@/context/utils/isMandatoryComponent";
import { getConsumptionDetails } from "./UtilizationDetails";
import * as ACTION_TYPES from "../../context/actionsTypes/action.types";

import styles from "./styles/Addons.module.scss";

export const Addons = ({ addonsData, addonsIndex }: any): JSX.Element => {
  const { dispatch } = useContext(MyContext);
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className={styles.Addons_Wrapper}>
      <div
        className={
          addonsData?.isSelected
            ? `${styles.Is_Selected} ${styles.Addon_Div}`
            : styles.Addon_Div
        }
      >
        <div
          className={`${styles.Addon_Div_Div} ${styles.Flex} ${styles.Flex1}`}
        >
          <div
            className={`${styles.Flex} ${styles.Flex1} ${styles.Align_Items_center} ${styles.Form_Label}`}
          >
            <input
              type="checkbox"
              checked={addonsData?.isSelected}
              disabled={isMandatoryComponent(addonsData?.name)}
              className={styles.Is_Pointer}
              onChange={() =>
                dispatch({
                  type: ACTION_TYPES.UPDATE_ADDON_SELECTION,
                  payload: {
                    addonsIndex: addonsIndex,
                    value: !addonsData?.isSelected,
                  },
                })
              }
            />
            <span>
              <Image
                src="/icon-addon.png"
                alt="Addon Icon"
                width={50}
                height={50}
              />
            </span>
            <div className={styles.Name}>
              <div className={`${styles.Center_Div} ${styles.Inner_Div}`}>
                {addonsData?.name}
              </div>
              <div className={`${styles.Flex} ${styles.Center_Div}`}>
                <span
                  className={`${styles.Center_Div} ${styles.FontStyleItalic}`}
                >
                  Version :{" "}
                </span>
                <div
                  className={`${styles.Center_Div} ${styles.FontStyleItalic}`}
                >
                  {addonsData?.versions.length > 1 ? (
                    <select className={styles.Border_Radius}>
                      {addonsData?.versions.map((el: any, i: Key) => (
                        <option key={i} value={el}>
                          {el}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <>{addonsData?.versions[0]}</>
                  )}
                </div>
              </div>
            </div>
          </div>
          {addonsData?.utilizationDetails && (
            <div
              className={`${styles.Flex} ${styles.Flex1} ${styles.Align_Items_center} ${styles.Justify_Content_FlexEnd}`}
            >
              <div
                className={styles.Show_Config}
                onClick={() => setIsHidden(!isHidden)}
                role="presentation"
              >
                {isHidden ? "Hide Details" : "Show Details"}
              </div>
            </div>
          )}
        </div>
        {isHidden && addonsData?.utilizationDetails && (
          <div className={styles.Config_Form}>
            {getConsumptionDetails(addonsData?.utilizationDetails)}
          </div>
        )}
      </div>
    </div>
  );
};
