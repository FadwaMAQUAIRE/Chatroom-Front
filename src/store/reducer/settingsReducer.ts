import { createReducer } from "@reduxjs/toolkit";
import { changeValues, toggleSettings } from "../actions";

interface SettingsState {
  isOpen: boolean;
  email: string;
  password: string;
}

const initialState: SettingsState = {
  isOpen: true,
  email: "",
  password: "",
};

const settingsReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeValues, (state, action) => {
    state[action.payload.name] = action.payload.value;
  }).
  addCase(toggleSettings,(state)=>{
    state.isOpen=!state.isOpen
  })
});

export default settingsReducer;
