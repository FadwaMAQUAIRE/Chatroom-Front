export interface IMessage {
  content: string;
  author: string;
}

export interface ChatState{
  messages:IMessage[],
  currentMessage:string
}