import './app.scss';
import { Header } from '../components/header/header';
import { Routing } from './routing/Routing';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Routing />
    </div>
  )
}
