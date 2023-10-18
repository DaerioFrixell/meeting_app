import { Header } from '../components/header/header'
import { Routing } from './routing/Routing'
import './app.scss'

export const App = () => {
  return (
      <div className="App">
        <Header />
        <Routing />
      </div>
  )
}
