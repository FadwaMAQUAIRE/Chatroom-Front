import { IMessage } from "../@Types";
import store from "../store";
import { addMessage } from "../store/actions";
import { socket } from "./io";

export const subscribeToNewMessages = () => {
  socket.on("server_send_message", (message: IMessage) => {
    console.log("Nouveau message:", message);
    //On enregistre le message reçu dans le store
    store.dispatch(addMessage(message));
  });
};

//Fonction qui envoie un event et un message au server socket.io
export const sendMessage = () => {
  const state = store.getState();

  const author = state.settings.pseudo;
  const text = state.chat.currentMessage;
  const message = { author, content: text };
  //On envoie l'event avec le message vers socket.io

  socket.emit("client_send_message", message);
};
