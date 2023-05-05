import { Addons } from "./Addons";
import { Key, useContext, useState } from "react";
import MonacoEditor from "../editor/MonacoEditor";
import { MyContext } from "@/context/utils/CreateContext";
import { EDITOR_TYPES, LABEL } from "./utils/constants";
import styles from "./styles/AddonsLayout.module.scss";

export const AddonsLayout = (): JSX.Element => {
  const { data } = useContext(MyContext) as any;
  const [editorType] = useState("json");
  const getAddonsComponents = () => {
    return data.map((el: any, i: Key) => (
      <Addons key={i} addonsData={el} headerIndex={i} />
    ));
  };
  const getLabel = (label: string) => (
    <div className={styles.Label}>{label}</div>
  );

  return (
    <div className={styles.Addons_Wrapper}>
      <div className={styles.Addons_Label_wrapper}>
        {getLabel(LABEL.SELECT_ADDONS)}
        {getAddonsComponents()}
      </div>
      <div className={styles.Editor_Wrapper}>
        {editorType === EDITOR_TYPES.YAML
          ? getLabel(LABEL.INSTALLER_YAML)
          : getLabel(LABEL.INSTALLER_JSON)}
        <MonacoEditor value={data} type={EDITOR_TYPES.JSON} />
      </div>
    </div>
  );
};
