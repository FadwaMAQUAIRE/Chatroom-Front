import { changeValues, toggleSettings } from "../../store/actions";
import { useAppDispatch, useAppSelector } from "../../store/redux-hook";
import "./style.scss";
const Settings = () => {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.settings.email);
  const password = useAppSelector((state) => state.settings.password);
  const isOpen = useAppSelector((state) => state.settings.isOpen);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(changeValues({ name, value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, password);
  };

  const handleToggleClick = () => {
    //lancer une action pour ouvrir/fermer les settings
    dispatch(toggleSettings());
  };

  return (
    <aside className='settings'>
      <button
        type='button'
        className={isOpen ? "settings-button" : "settings-button--on"}
        onClick={handleToggleClick}
      >
        X
      </button>
      {isOpen && (
        <form className='settings-form' onSubmit={handleSubmit}>
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
          <button className='settings-button'>Se connecter</button>
        </form>
      )}
    </aside>
  );
};
export default Settings;
