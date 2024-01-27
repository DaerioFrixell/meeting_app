import "./auth.scss";
import { FC } from "react";
import { Button } from "../../components/buttons/Button";
import { useAction } from "../../hooks/useAction";
import { TitleCenter } from "../UI/titleCenter/TitleCenter";


// TO DO: селать и испльзовать кастомный Input. 
export const Auth: FC = () => {
  const { settingLogIn } = useAction()

  return (
    <div className="auth">
      <TitleCenter title="Авторизируйтесь" className="auth__title" />

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