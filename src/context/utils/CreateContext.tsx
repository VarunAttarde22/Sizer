import { createContext, Dispatch } from "react";
import response from "./components.util.json";

interface ContextProps {
  data: any;
  dispatch: Dispatch<{ type: string; payload: any }>;
}

export const MyContext = createContext<ContextProps>({
  data: [...response],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
});
