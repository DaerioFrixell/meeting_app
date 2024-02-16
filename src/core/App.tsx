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

  const settingLoading = useSelector(settingLoadingSelector);
  const a = 0
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) navigate("auth");
  }, [token])

  if (settingLoading) return <Loader loaderType='main' />

  return (
    <div className="app">
      <Header />
      <Routing />
    </div>
  )
}
