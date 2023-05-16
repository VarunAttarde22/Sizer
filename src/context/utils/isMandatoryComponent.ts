import mandatoryComponentsList from "../../data/component-list-mandatory.util.json";

export const isMandatoryComponent = (componentName: string): any => {
  return mandatoryComponentsList.includes(componentName);
};
