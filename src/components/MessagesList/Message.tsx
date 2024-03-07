import { IMessage } from "../../@Types";
import { useAppSelector } from "../../store/redux-hook";
import "./style.scss";

const Message = ({ content, author }: IMessage) => {
  const pseudo = useAppSelector((state) => state.settings.pseudo);
  return (
    <div className={author === pseudo ? "message" : "message--other"}>
      <div className='message-author'>{author}</div>
      <div className='message-body'>{content}</div>
    </div>
  );
};
export default Message;
