import { useState } from "react";


export const useToggle = () => {
  /**
   * Флаг, определяющий состояние переключателя.
   */
  const [isOpen, setisOpen] = useState(false);
  /**
   * Переключает значение на противоположенное
   */
  const toggle = () => setisOpen(!isOpen);
  /**
   * Переключает значение на false.
   */
  const toClose = () => setisOpen(false);

  return {
    isOpen,
    toggle,
    toClose,
  };
}