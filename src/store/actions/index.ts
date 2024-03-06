import { createAction } from "@reduxjs/toolkit";

const UPDATE_CURRENT_MESSAGE = "UPDATE_CURRENT_MESSAGE";
const ADD_MESSAGE = "ADD_MESSAGE";
const CHANGE_VALUES = "CHANGE_VALUES";
const TOGGLE_SETTINGS = "TOGGLE_SETTINGS";

//Ici le paramètre envoyé lors de l'appel de cette fonction est automatiquement passé en payload
export const updateCurrentMessage = createAction<string>(
  UPDATE_CURRENT_MESSAGE,
);

export const addMessage = createAction(ADD_MESSAGE);
export const changeValues = createAction<{ name: string; value: string }>(
  CHANGE_VALUES,
);
export const toggleSettings=createAction(TOGGLE_SETTINGS)
