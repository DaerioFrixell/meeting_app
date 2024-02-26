import { FC, createContext } from "react";


// Тестовый контекст. Не удаляю, т.к. всё равно нужно в файле код держать, чтоб ошибки не было. А контекст появится в процессе разработки.
export const TestContext = createContext({
  testValue: 2024,
} as any);

/** 
 * Создание провайдера.
 */
export const TestProvider: FC<any> = ({ children }) => {
  const testValue = 2022

  return (
    <TestContext.Provider value={{ testValue }}>
      {children}
    </TestContext.Provider>)
}