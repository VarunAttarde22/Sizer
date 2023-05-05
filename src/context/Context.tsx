import React, { useReducer } from "react";
import { State } from "./types/context.types";
import response from "./utils/components.util.json";
import { MyContext } from "./utils/CreateContext";
import { reducer } from "./utils/reducer";

const initialState: State = { data: [...response] };

export const MyProvider = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ data: state.data, dispatch } as any}>
      {children}
    </MyContext.Provider>
  );
};
