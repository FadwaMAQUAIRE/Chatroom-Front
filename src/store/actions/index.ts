import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IMessage } from "../../@Types";

const UPDATE_CURRENT_MESSAGE = "UPDATE_CURRENT_MESSAGE";
const ADD_MESSAGE = "ADD_MESSAGE";
const CHANGE_VALUES = "CHANGE_VALUES";
const TOGGLE_SETTINGS = "TOGGLE_SETTINGS";
const CONNECT = "CONNECT";

export const connect = createAsyncThunk<
  {pseudo:string},
  { email: string; password: string }
>(CONNECT, async (formDatas) => {
  const response = await axios.post("http://localhost:3001/login", formDatas);
  
  return response.data
});


//Ici le paramètre envoyé lors de l'appel de cette fonction est automatiquement passé en payload
export const updateCurrentMessage = createAction<string>(
  UPDATE_CURRENT_MESSAGE,
);
export const addMessage = createAction<IMessage>(ADD_MESSAGE);
export const changeValues = createAction<{ name: string; value: string }>(
  CHANGE_VALUES,
);
export const toggleSettings = createAction(TOGGLE_SETTINGS);
