import * as React from "react"

import * as actions from "../../store/actions"
import { Store } from "../../store/AppStore"

const useStore = () => {
  const { state, dispatch } = React.useContext(Store)

  const boundSelectTile = value =>
    value?.keyName?.includes(".")
      ? dispatch(actions.setPathValue(value))
      : dispatch(actions.selectTile(value))

  const boundToggleTile = value =>
    value?.keyName?.includes(".")
      ? dispatch(actions.setPathValue(value))
      : dispatch(actions.toggleTile(value))

  const boundGoNext = () => dispatch(actions.goNext())
  const boundGoBack = () => dispatch(actions.goBack())
  const boundSetApplicantsQuantity = value =>
    dispatch(actions.setApplicantsQuantity(value))

  const boundSetTab = value => dispatch(actions.setTab(value))
  const boundSetInnerStep = value => dispatch(actions.setInnerStep(value))
  const boundSetPathValue = value => dispatch(actions.setPathValue(value))

  return {
    state,
    boundSelectTile,
    boundToggleTile,
    boundGoNext,
    boundGoBack,
    boundSetApplicantsQuantity,
    boundSetTab,
    boundSetInnerStep,
    boundSetPathValue,
  }
}

export default useStore
