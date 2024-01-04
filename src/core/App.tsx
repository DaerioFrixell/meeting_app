import './app.scss'
import { Header } from '../components/header/header'
import { Routing } from './routing/Routing'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const App = () => {
  const { isLoading } = useTypedSelector((state) => state.unit);

  if (isLoading) return <h1>loading...</h1>;

  return (
    <div className="app">
      <Header />
      <Routing />
    </div>
  )
}
