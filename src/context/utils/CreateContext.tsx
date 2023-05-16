import { createContext, Dispatch } from "react";
import { getComponentsList } from "../utils/getComponentsList";
import componentData from "../../data/components-list.util.json";

interface ContextProps {
  data: any;
  dispatch: Dispatch<{ type: string; payload: any }>;
}

export const MyContext = createContext<ContextProps>({
  data: {
    data: getComponentsList(componentData.resolvedComponentVersions),
    editorValue: [],
    summationValue: {},
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
});
