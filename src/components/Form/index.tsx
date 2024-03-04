import { toast } from "react-toastify";
import { addMessage, updateCurrentMessage } from "../../store/actions";
import { useAppDispatch, useAppSelector } from "../../store/redux-hook";
import "./style.scss";

const Form = () => {
  const dispatch = useAppDispatch();

  const currentMessage = useAppSelector((state) => state.chat.currentMessage);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateCurrentMessage(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentMessage !== "") {
      dispatch(addMessage());
    } else {
      toast.warn("Vous devez remplir ce champ",{});
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form-input'
        placeholder={"Saisissez votre message..."}
        value={currentMessage}
        onChange={handleChange}
      />
      <button className='form-submit'>Envoyer</button>
    </form>
  );
};
export default Form;
