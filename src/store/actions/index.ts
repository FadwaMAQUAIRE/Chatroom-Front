import { createAction } from "@reduxjs/toolkit";

const UPDATE_CURRENT_MESSAGE = "UPDATE_CURRENT_MESSAGE";
const ADD_MESSAGE = "ADD_MESSAGE";

//Ici le paramètre envoyé lors de l'appel de cette fonction est automatiquement passé en payload
export const updateCurrentMessage = createAction<string>(UPDATE_CURRENT_MESSAGE);

export const addMessage=createAction(ADD_MESSAGE)