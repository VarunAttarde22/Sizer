import { Action, State } from "@/context/types/context.types";

export const updateConfigurationFields = (state: State, action: Action):State => {
  const headerData = state.data;
  headerData[action.payload.headerIndex].addons[
    action.payload.addonsIndex
  ].configuration[action.payload.configurationIndex].value =
    action.payload.value;
  return { data: headerData };
};
