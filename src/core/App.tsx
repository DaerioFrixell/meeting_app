import './app.scss';
import { Header } from '../components/header/header';
import { Routing } from './routing/Routing';
import { useSelector } from 'react-redux';
import { settingLoadingSelector } from '../model/settings/setting.selectors';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../components/loaders/MainLoader';


export const App: FC = () => {
  const navigate = useNavigate();

  /** 
   * Определяет показывать ли лоадер при изменении настроек.
   */
  const isViewSettingLoader = useSelector(settingLoadingSelector);

  /**
   * Содержит токен после авторизации или null, если не зареган User.
   */
  const token = localStorage.getItem('token');

  /**
   * Проверяет авторизацию. Если нет токена, то редиректит на страницу авторизации.
   */
  useEffect(() => {
    if (!token) navigate("auth");
  }, [token])

  if (isViewSettingLoader) return <Loader loaderType='main' />

  return (
    <div className="app">
      <Header />
      <Routing />
    </div>
  )
}
