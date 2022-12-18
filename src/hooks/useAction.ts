import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import combineActions from "./combineActions"

export const useAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(combineActions, dispatch)
}