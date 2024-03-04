import { useEffect, useRef } from "react";
import Message from "./Message";
import { IMessage } from "../../@Types";
import "./style.scss";

const MessagesList = ({ messages }: { messages: IMessage[] }) => {
  //On vient définir une ref qu'on place sur un de nos éléments
  const containerElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //A chaque rerender, la hauteur de l'élément change, on vient récupérer la taille de notre élément référencé;
    //Puis on scroll tout en bas de cet élément
    const scrollY = containerElement.current!.scrollHeight;
    containerElement.current!.scrollTo(0, scrollY);
  }, [messages]);

  return (
    <div className='messages' ref={containerElement}>
      {messages.map((message, id) => (
        <Message key={id + message.content + message.author} {...message} />
      ))}
    </div>
  );
};
export default MessagesList;
