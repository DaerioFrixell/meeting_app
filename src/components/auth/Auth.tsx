import "./auth.scss";
import { FC } from "react";
import { Button } from "../../components/buttons/Button";
import { useAction } from "../../hooks/useAction";


// TO DO: стили добавить.
export const Auth: FC = () => {
  const { settingLogIn } = useAction()

  return (
    <div className="auth">
      <h3>авторизация</h3>

      <br />

      <input
        className="unit-form-input"
        type="text"
        placeholder="введите логин"
      />

      <input
        className="unit-form-input"
        type="text"
        placeholder="введите пароль"
      />

      <Button buttonsName="войти" onClick={() => settingLogIn()} />
    </div>
  )
}