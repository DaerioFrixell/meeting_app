import { FC, createContext } from "react";


export const TestContext = createContext({
  testValue: 2024,
} as any);

/** Создание провайдера */
export const TestProvider: FC<any> = ({ children }) => {
  const testValue = 2022

  return (
    <TestContext.Provider value={{ testValue }}>
      {children}
    </TestContext.Provider>)
}