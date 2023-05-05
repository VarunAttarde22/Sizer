import { Action, State } from "@/context/types/context.types";

export const updateAddonSelection = (state: State, action: Action):State => {
  const headerData = state.data;
  headerData[action.payload.headerIndex].addons[
    action.payload.addonsIndex
  ].isSelected = action.payload.value;
  return { data: headerData };
};
