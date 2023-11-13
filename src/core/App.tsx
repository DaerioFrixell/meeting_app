import { Header } from '../components/header/header'
import { Routing } from './routing/Routing'
import './app.scss'
import { useEffect } from 'react'
import { useAction } from '../hooks/useAction'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const App = () => {
  const { isLoading } = useTypedSelector((state) => state.unit);
  const { getFakeData } = useAction()

  useEffect(() => {
    getFakeData();
  }, [])

  if (isLoading) return <h1>loading...</h1>;

  return (
    <div className="app">
      <Header />
      <Routing />
    </div>
  )
}
