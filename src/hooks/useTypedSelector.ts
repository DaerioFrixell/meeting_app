import { useSelector, TypedUseSelectorHook } from "react-redux"
import { RootState } from "../core/store"

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector