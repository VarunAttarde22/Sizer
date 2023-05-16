import { useContext } from "react";
import { MyContext } from "./CreateContext";

export const useSummationValue = (): any => {
  const { data: data1 } = useContext(MyContext) as any;

  const getSummationValue = (): any => {
    const filteredData = data1.data?.addons.filter((el) => el?.isSelected);

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
  return getSummationValue();
};
