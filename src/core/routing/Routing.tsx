import {Routes, Route} from "react-router-dom"
import { AllUnits } from "../../page/allUnits/AllUnits"
import { GlobalStats } from "../../page/globalStats/GlobalStats"

export const Routing = () => {
   return (
    <Routes>
      <Route path="/" element={<GlobalStats />}/> 
      <Route path="/allunits" element={<AllUnits />}/> 
   </Routes>
)}
  
