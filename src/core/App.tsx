import { Header } from '../components/header/header'
import { Routing } from './routing/Routing'
import './app.scss'
import { Modal } from '../components/modal/modal'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routing />
    </div>
  )
}
