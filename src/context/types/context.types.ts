import * as ACTION_TYPES from '../actionsTypes/action.types'
export interface State {
  data: any;
  editorValue?:any;
  summationValue?:any;
}
export type Action =
  | { type:  typeof ACTION_TYPES.UPDATE_ADDON_SELECTION; payload: any }
  | { type:  typeof ACTION_TYPES.UPDATE_CONFIGURATION_SELECTION; payload: any }
  | { type:  typeof ACTION_TYPES.UPDATE_CONFIGURATION_Fields; payload: any };
