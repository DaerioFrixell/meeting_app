import "./auth.scss";
import { FC } from "react";
import { Button } from "../../components/buttons/Button";
import { useAction } from "../../hooks/useAction";
import { TitleCenter } from "../UI/titleCenter/TitleCenter";
import { Input } from "../inputs/input/Input";
import { useNavigate } from "react-router-dom";


export const Auth: FC = () => {
  const { settingLogIn } = useAction();
  const navigate = useNavigate();

  const loginIn = () => {
    settingLogIn();
    navigate('/');
  }

  return (
    <div className="auth">
      <TitleCenter title="Авторизируйтесь" className="auth__title" />

      <Input placeholder="введите логин" />

      <Input placeholder="введите пароль" />

      <Button buttonsName="войти" onClick={loginIn} />
    </div>
  )
}