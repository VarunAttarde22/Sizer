import { Key, useContext, useState } from "react";
import Image from "next/image";
import { MyContext } from "@/context/utils/CreateContext";
import { LineItem } from "./LineItem";
import * as ACTION_TYPES  from "../../context/actionsTypes/action.types";

import styles from "./styles/Addons.module.scss";
export const Addons = ({ addonsData, headerIndex }: any): JSX.Element => {
  const { dispatch } = useContext(MyContext);
  const [isHidden, setIsHidden] = useState(false);

  const getlineItems = (data: any, addonsIndex: Key) => {
    return data.map((el: any, i: Key) => (
      <LineItem
        key={i}
        configurationIndex={i}
        lineItemData={el}
        addonsIndex={addonsIndex}
        headerIndex={headerIndex}
      />
    ));
  };

  return (
    <div className={styles.Addons_Wrapper}>
      <span className={styles.Addon_Span}>{addonsData.header}</span>
      {addonsData.addons.map((el: any, i: Key) => (
        <div
          key={i}
          className={
            el?.isSelected
              ? `${styles.Is_Selected} ${styles.Addon_Div}`
              : styles.Addon_Div
          }
        >
          <div
            className={`${styles.Addon_Div_Div} ${styles.Flex} ${styles.Flex1}`}
          >
            <div className={`${styles.Flex} ${styles.Flex1} ${styles.Align_Items_center} ${styles.Form_Label}`}>
              <input
                type="checkbox"
                checked={el?.isSelected}
                className={styles.Is_Pointer}
                onChange={() =>
                  dispatch({
                    type: ACTION_TYPES.UPDATE_ADDON_SELECTION,
                    payload: {
                      headerIndex: headerIndex,
                      addonsIndex: i,
                      value: !el?.isSelected,
                    },
                  })
                }
              />
              <span>
                <Image
                  src="/kubernetes-icon.png"
                  alt="Picture of the author"
                  width={50}
                  height={50}
                />
              </span>
              <div className={styles.Name}>
                <div className={`${styles.Center_Div} ${styles.Inner_Div}`}>
                  {el?.name}
                </div>
                <div className={`${styles.Flex} ${styles.Center_Div}`}>
                  <span className={styles.Center_Div}>Version</span>
                  <div className={styles.Center_Div}>
                    <select
                      id="cars"
                      name="cars"
                      className={styles.Border_Radius}
                    >
                      {el.versions.map((el: any, i: Key) => (
                        <option key={i} value="volvo">
                          {el}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.Flex} ${styles.Flex1} ${styles.Align_Items_center} ${styles.Justify_Content_FlexEnd}`}
            >
              <div
                className={styles.Show_Config}
                onClick={() => setIsHidden(!isHidden)}
                role="presentation"
              >
                {isHidden ? "Hide Config" : "Show Config"}
              </div>
            </div>
          </div>
          {isHidden && (
            <div className={styles.Config_Form}>
              <div className={`${styles.Flex} ${styles.Config_Form_Wrapper}`}>
                <div className={`${styles.Flex} ${styles.Config_Form_Div}`}>
                  {getlineItems(el?.configuration, i)}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
