import { AllUnits } from '../page/allUnits/AllUnits'
import { GlobalStats } from '../page/globalStats/GlobalStats'
import './app.css'

export const App = () => {
  return (
    <>
      <div className="App">
        <AllUnits />
      </div>
      <GlobalStats />
    </>
  )
}
