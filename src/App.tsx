import { ToastContainer } from "react-toastify";
import "./styles/index.scss";
import MessagesList from "./components/MessagesList";
import Form from "./components/Form";
import Settings from "./components/Settings";
import { useAppSelector } from "./store/redux-hook";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const messages = useAppSelector((state) => state.chat.messages);
  return (
    <div className='chat'>
      <ToastContainer />
      <MessagesList messages={messages} />
      <Form />
      <Settings/>
    </div>
  );
}

export default App;
