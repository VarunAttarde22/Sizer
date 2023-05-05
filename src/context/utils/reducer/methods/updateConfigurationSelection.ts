import { Action, State } from "@/context/types/context.types";

export const updateConfigurationSelection = (state: State, action: Action):State => {
  const headerData = state.data;
  headerData[action.payload.headerIndex].addons[
    action.payload.addonsIndex
  ].configuration[action.payload.configurationIndex].isSelected =
    action.payload.value;
  return { data: headerData };
};
