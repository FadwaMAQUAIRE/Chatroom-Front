import { changeValues, connect, toggleSettings } from "../../store/actions";
import { useAppDispatch, useAppSelector } from "../../store/redux-hook";
import "./style.scss";
const Settings = () => {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.settings.email);
  const password = useAppSelector((state) => state.settings.password);
  const isOpen = useAppSelector((state) => state.settings.isOpen);
  const connectLoading = useAppSelector((state) => state.settings.connectLoading);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(changeValues({ name, value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, password);
  dispatch(connect({email,password}))
  };

  const handleToggleClick = () => {
    //lancer une action pour ouvrir/fermer les settings
    dispatch(toggleSettings());
  };


const Loader=()=>{
  return (
    <div className='lds-spinner'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}



  return (
    <aside className='settings'>
      <button
        type='button'
        className={
          isOpen ? "settings-button" : "settings-button settings-button--on"
        }
        onClick={handleToggleClick}
      >
        +
      </button>

      <form
        className={
          isOpen ? "settings-form" : "settings-form settings-form--close"
        }
        onSubmit={handleSubmit}
      >
        <input
          value={email}
          className='settings-input'
          onChange={handleChange}
          name='email'
          type='email'
          placeholder='Adresse e-mail'
          aria-label='Adresse e-mail'
        />
        <input
          value={password}
          className='settings-input'
          onChange={handleChange}
          name='password'
          type='password'
          placeholder='Mot de passe'
          aria-label='Mot de passe'
        />
        {connectLoading?<Loader/>:<button className='settings-button'>Se connecter</button>}
      </form>
    </aside>
  );
};
export default Settings;
