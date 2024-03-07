import { toast } from "react-toastify";
import { addMessage, updateCurrentMessage } from "../../store/actions";
import { useAppDispatch, useAppSelector } from "../../store/redux-hook";
import "./style.scss";
import { sendMessage } from "../../socket/chat";

const Form = () => {
  const dispatch = useAppDispatch();

  const currentMessage = useAppSelector((state) => state.chat.currentMessage);
  const pseudo = useAppSelector((state) => state.settings.pseudo);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateCurrentMessage(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!pseudo) {
      toast.error("CONNECTEZ VOUS!!!!!");
      return;
    }
    if (currentMessage !== "") {
      sendMessage()
      /* dispatch(addMessage(pseudo)); */
    } else {
      toast.warn("Vous devez remplir ce champ", {});
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form-input'
        placeholder={
          pseudo ? "Saisissez votre message..." : "Veuillez vous connecter"
        }
        value={currentMessage}
        onChange={handleChange}
        disabled={!pseudo}
      />
      <button className='form-submit'>Envoyer</button>
    </form>
  );
};
export default Form;
