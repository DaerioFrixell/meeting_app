import "./description.scss";
import { FC } from "react";
import { MainTitle } from "../UI/mainTitle/MainTitle";


export const Description: FC = () => {
  return (
    <section className="description">
      <MainTitle title="О приложении" />

      <div className="description__about">
        <p>Meeting App.</p>
        <br />

        <p>Приложение, позволяющее запомнить тех людей,</p>

        <p>с которыми вы когда-либо знакомились.</p>
      </div>

      <div className="description__advertisement">
        <div className="description__advertisement__content">
          <p>Здесь могла быть ваша реклама.</p>
        </div>
      </div>
    </section>
  )
}