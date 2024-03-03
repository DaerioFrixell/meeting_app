import { ReactNode } from "react";


export type ModalWindow_T = {
  children: ReactNode;
  title: string;

  toggle(): void;
};