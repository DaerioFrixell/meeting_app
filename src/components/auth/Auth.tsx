import "./auth.scss";
import { FC } from "react";
import { Button } from "../../components/buttons/Button";
import { useAction } from "../../hooks/useAction";
import { TitleCenter } from "../UI/titleCenter/TitleCenter";
import { Input } from "../inputs/input/Input";


export const Auth: FC = () => {
  const { settingLogIn } = useAction()

  return (
    <div className="auth">
      <TitleCenter className="auth__title" title="Авторизируйтесь" />

      <Input placeholder="введите логин" />

      <Input placeholder="введите пароль" />

      <Button buttonsName="войти" onClick={() => settingLogIn()} />
    </div>
  )
}