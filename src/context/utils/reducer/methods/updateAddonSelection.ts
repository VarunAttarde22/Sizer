import { Action, State } from "@/context/types/context.types";
import componentData from "../../../../data/components-list.util.json";

export const updateAddonSelection = (state: State, action: Action): State => {
  const headerData = state.data;
  headerData.addons[action.payload.addonsIndex].isSelected =
    action.payload.value;
  const filteredData = headerData?.addons?.filter((el: any) => el?.isSelected);

  const getEditorValue = (): any => {
    const editorValue: any = {};
    editorValue.productName = componentData?.productName;
    editorValue.releaseVersion = componentData?.releaseVersion;
    editorValue.patchSequence = componentData?.patchSequence;
    editorValue.componentsForRelease = filteredData.reduce(
      (accumulator: any, el: any) => {
        accumulator[el?.name] = el?.versions[0];
        return accumulator;
      },
      {}
    );
    return editorValue;
  };

  const getSummationValue = (): any => {
    const summationValue = filteredData.reduce(
      (accumulator: any, el: any) => {
        const minValue = el?.utilizationDetails?.cpuRequest;
        const maxValue = el?.utilizationDetails?.memoryRequest;
        const minValueNumber = parseInt(
          minValue?.slice(0, minValue.search(/[^0-9]/g))
        );
        const maxValueNumber = parseInt(
          maxValue?.slice(0, maxValue.search(/[^0-9]/g))
        );
        if (el?.utilizationDetails) {
          accumulator.cpuRequest += minValueNumber;
          accumulator.memoryRequest += maxValueNumber;
        }
        return accumulator;
      },
      { cpuRequest: 0, memoryRequest: 0 }
    );
    return {
      cpuRequest: summationValue?.cpuRequest + " m",
      memoryRequest: summationValue?.memoryRequest + " Mi",
    };
  };

  return {
    data: headerData,
    editorValue: getEditorValue(),
    summationValue: getSummationValue(),
  };
};
