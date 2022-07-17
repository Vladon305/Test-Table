import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { dataActions } from "../store/data/data.slice"

const allActions = {
  ...dataActions,
}

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(allActions, dispatch)
}