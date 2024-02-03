import './app.scss';
import { Header } from '../components/header/header';
import { Routing } from './routing/Routing';
import { useSelector } from 'react-redux';
import { settingLoadingSelector } from '../model/settings/setting.selectors';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const App: FC = () => {
  const navigate = useNavigate();
  const settingLoading = useSelector(settingLoadingSelector);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) navigate("auth");
  }, [token])

  if (settingLoading) return <h2>loading app...</h2>

  return (
    <div className="app">
      <Header />
      <Routing />
    </div>
  )
}
