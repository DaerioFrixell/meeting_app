import "./auth.scss";
import { FC } from "react"
import { Button } from "../../components/buttons/Button"

export const Auth: FC = () => {
  const toAuth = () => {
    const fakeToken = "fakeToken";

    localStorage.setItem("token", fakeToken)
  }

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

      <Button buttonsName="войти" onClick={toAuth} />
    </div>
  )
}