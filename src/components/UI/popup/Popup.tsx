import "./popup.scss";
import { FC, useEffect } from "react";
import { Popup_T } from "./popup.type";


export const Popup: FC<Popup_T> = ({ status, message, toClose }) => {
  /**
   * Стиль, которые применится для popup, в зависимости от статуса.
   */
  let popupStyle = "";

  switch (true) {
    case (status >= 200 && status < 400): {
      popupStyle = "popup-success";

      break;
    }

    case (status >= 400): {
      popupStyle = "popup-error";

      break;
    }

    default: popupStyle = "popup-error";
  }

  useEffect(() => {
    if (status >= 200 && status < 400) {
      setTimeout(() => {
        toClose()
      }, 1000)
    }
  }, [])

  return (
    <div
      className={popupStyle}
      onClick={toClose}
    >
      <span>
        {message}
      </span>
    </div>
  )
}