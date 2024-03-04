import { IMessage } from "../../@Types";
import './style.scss'

const Message = ({ content, author }: IMessage) => {
  return (
    <div className='message'>
      <div className='message-author'>{author}</div>
      <div className='message-body'>{content}</div>
    </div>
  );
};
export default Message;
