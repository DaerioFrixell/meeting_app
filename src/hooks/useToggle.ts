import { useState } from "react";


export default function useToggle() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => setisOpen(!isOpen);

  return {
    isOpen,
    toggle
  };
}