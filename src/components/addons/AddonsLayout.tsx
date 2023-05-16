import { Addons } from "./Addons";
import { Key, useContext, useState } from "react";
import Image from "next/image";
import MonacoEditor from "../editor/MonacoEditor";
import { MyContext } from "@/context/utils/CreateContext";
import { EDITOR_TYPES, LABEL } from "./utils/constants";
import * as yaml from "js-yaml";
import styles from "./styles/AddonsLayout.module.scss";
import { Tooltip } from "../tooltip/Tooltip";

export const AddonsLayout = (): JSX.Element => {
  const { data, editorValue, summationValue } = useContext(MyContext) as any;
  const [editorType, setEditorType] = useState<string>(EDITOR_TYPES.JSON);
  const getAddonsComponents = () => {
    return data?.addons?.map((el: any, i: Key) => (
      <Addons key={i} addonsData={el} addonsIndex={i} />
    ));
  };
  const getLabel = (label: string) => (
    <div className={styles.Label}>{label}</div>
  );
  const handleDownloadClick = () => {
    const value =
      editorType === EDITOR_TYPES.JSON
        ? JSON.stringify(editorValue, null, 2)
        : yaml.dump(editorValue);
    const blob = new Blob([value], {
      type:
        editorType === EDITOR_TYPES.JSON
          ? "application/json"
          : "application/yaml",
    });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download =
      editorType === EDITOR_TYPES.JSON ? "data.json" : "data.yaml";
    link.click();
  };

  return (
    <div className={styles.Addons_Wrapper}>
      <div className={styles.Addons_Label_wrapper}>
        <div className={styles.Addons_Label}>
          {getLabel(LABEL.SELECT_ADDONS)}
          <div className={styles.Summation_Wrapper}>
            {[
              {
                toolTipText: "Total CPU requests",
                direction: "left",
                iconPath: "/icon-cpu.png",
                requestValue: summationValue?.cpuRequest,
              },
              {
                toolTipText: "Total Memory requests",
                direction: "bottom",
                iconPath: "/icon-memory.png",
                requestValue: summationValue?.memoryRequest,
              },
            ].map((el, i) => {
              return (
                <div key={i} className={styles.Summation_Wrapper_Inner}>
                  <div className={styles.Summation_Wrapper_Icon_Wrapper}>
                    <Tooltip
                      toolTipText={el.toolTipText}
                      direction={el.direction}
                    >
                      <Image
                        src={el.iconPath}
                        alt="Icon"
                        width={20}
                        height={20}
                      />
                    </Tooltip>
                  </div>
                  <div className={styles.Summation_Wrapper_Value_Wrapper}>
                    {el.requestValue}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {getAddonsComponents()}
      </div>
      <div className={styles.Editor_Wrapper}>
        <div className={styles.Addons_Label}>
          {editorType === EDITOR_TYPES.YAML
            ? getLabel(LABEL.INSTALLER_YAML)
            : getLabel(LABEL.INSTALLER_JSON)}
          <div className={styles.Addons_Label_Inner}>
            <Tooltip toolTipText="Type of editor" direction="left">
              <div className={styles.Editor_Type_Wrapper}>
                <select
                  className={styles.Border_Radius}
                  onChange={(e: any) => {
                    setEditorType(e?.target?.value);
                  }}
                >
                  {[EDITOR_TYPES.JSON, EDITOR_TYPES.YAML].map(
                    (el: any, i: Key) => (
                      <option key={i} value={el}>
                        {el}
                      </option>
                    )
                  )}
                </select>
              </div>
            </Tooltip>
            <Tooltip toolTipText="Download" direction="left">
              <div>
                <button
                  onClick={handleDownloadClick}
                  className={styles.Button_Icon}
                >
                  <Image
                    src="/icon-download.png"
                    alt="Download icon"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </Tooltip>
          </div>
        </div>
        <MonacoEditor value={editorValue} type={editorType} />
      </div>
    </div>
  );
};
