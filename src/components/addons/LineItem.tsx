
import { MyContext } from "@/context/utils/CreateContext";
import Image from "next/image";
import { useContext } from "react";
import styles from "./styles/LineItem.module.scss";
import * as ACTION_TYPES  from "../../context/actionsTypes/action.types";

export const LineItem = ({ lineItemData,headerIndex,addonsIndex,configurationIndex }:any):JSX.Element => {
  const { dispatch } = useContext(MyContext);

  return (
    <div className={styles.LineItem_Wrapper}>
      <div>
        <input type={"checkbox"} checked={lineItemData?.isSelected} className={styles.Is_Pointer}
         onChange={()=>dispatch({type:ACTION_TYPES.UPDATE_CONFIGURATION_SELECTION,payload:{
          headerIndex:headerIndex,
          addonsIndex:addonsIndex,
          configurationIndex:configurationIndex,
          value:!lineItemData?.isSelected
        }})} />
      </div>
      <div>{lineItemData?.label}</div>
      <div className={styles.tooltip}>
        <Image
          src="/icons8-question-mark-100.png"
          alt="Picture of the author"
          width={10}
          height={10}
        />
        <div className={styles.tooltiptext}>{lineItemData?.toolTip}</div>
      </div>
    { lineItemData?.type!=="boolean"&& <div>
        <input type={lineItemData?.type || "text"} value={lineItemData?.value || ""}
         onChange={(e:any)=>dispatch({type:ACTION_TYPES.UPDATE_CONFIGURATION_Fields,payload:{
          headerIndex:headerIndex,
          addonsIndex:addonsIndex,
          configurationIndex:configurationIndex,
          value:e?.target?.value
        }})}
        />
      </div>
}
    </div>
  );
};
