import { useContext } from "react";
import { MyContext } from "./CreateContext";

export const useGetEditorValue = (data: any): any => {
  const { data: data1 } = useContext(MyContext) as any;
  const getComponentsList = () => {
    return data1.data?.addons
      .filter((el) => el?.isSelected)
      .reduce((accumulator: any, el: any) => {
        accumulator[el?.name] = el?.versions[0];
        return accumulator;
      }, {});
  };
  return {
    productName: data?.productName,
    releaseVersion: data?.releaseVersion,
    patchSequence: data?.patchSequence,
    componentsForRelease: getComponentsList(),
  };
};
