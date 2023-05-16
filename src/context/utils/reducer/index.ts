import * as ACTION_TYPES from "../../actionsTypes/action.types";
import { Action, State } from "../../types/context.types";
import * as method from "./methods";

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_ADDON_SELECTION: {
      return method.updateAddonSelection(state, action);
    }
    default:
      throw new Error();
  }
}
