import { createReducer } from "@reduxjs/toolkit";
import { ChatState } from "../../@Types";
import { addMessage, updateCurrentMessage } from "../actions";

//Pour le state on à besoin de:
// -Un tableau qui regroupe tous les messages ({content,author})
// -La valeur actuelle de l'input

const initialState: ChatState = {
  messages: [],
  currentMessage: "",
};

const chatReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateCurrentMessage, (state, action) => {
      state.currentMessage = action.payload;
    })
    .addCase(addMessage, (state,action) => {
      state.messages = [
        ...state.messages,
        { content: state.currentMessage, author: action.payload },
      ];
      state.currentMessage = "";
    });
});

export default chatReducer;
