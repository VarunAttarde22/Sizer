import React, { useReducer } from "react";
import { State } from "./types/context.types";
import componentData from "../data/components-list.util.json";
import { MyContext } from "./utils/CreateContext";
import { getComponentsList } from "./utils/getComponentsList";
import { useGetEditorValue } from "./utils/getEditorValue";
import { useSummationValue } from "./utils/getSummationValue";
import { reducer } from "./utils/reducer";

export const MyProvider = ({ children }: any): JSX.Element => {
  const initialState: State = {
    data: getComponentsList(componentData.resolvedComponentVersions),
    editorValue: useGetEditorValue(componentData),
    summationValue: useSummationValue(),
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider
      value={
        {
          data: state.data,
          dispatch,
          editorValue: state.editorValue,
          summationValue: state.summationValue,
        } as any
      }
    >
      {children}
    </MyContext.Provider>
  );
};
