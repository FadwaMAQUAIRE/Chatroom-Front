import { createReducer } from "@reduxjs/toolkit";
import { changeValues, connect, toggleSettings } from "../actions";
import { toast } from "react-toastify";

interface SettingsState {
  isOpen: boolean;
  email: string;
  password: string;
  pseudo:string|null;
  connectLoading:boolean
}

const initialState: SettingsState = {
  isOpen: true,
  email: "bouclierman@herocorp.io",
  password: "jennifer",
  pseudo: null,
  connectLoading:false
};

const settingsReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeValues, (state, action) => {
    state[action.payload.name] = action.payload.value;
  }).
  addCase(toggleSettings,(state)=>{
    state.isOpen=!state.isOpen
  }).addCase(connect.pending,(state,action)=>{
    state.connectLoading=true
  }).addCase(connect.fulfilled,(state,action)=>{
    state.connectLoading=false;
    state.pseudo=action.payload.pseudo;
    state.isOpen=false
  })
 .addCase(connect.rejected,(state,action)=>{
    state.connectLoading=false;
    toast.error("Une erreur est survenue")
    
  })
});

export default settingsReducer;
