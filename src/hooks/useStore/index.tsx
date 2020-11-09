import * as React from "react"

import { ActionMethods, ValueType } from "../../store/actions"
import { Store } from "../../store/AppStore"

const useStore = () => {
  const { state, dispatch }: any = React.useContext(Store)

  const boundSelectTile = (value: ValueType) =>
    value?.keyName?.includes(".")
      ? dispatch(ActionMethods.setPathValue(value))
      : dispatch(ActionMethods.selectTile(value))

  const boundToggleTile = (value: ValueType) =>
    value?.keyName?.includes(".")
      ? dispatch(ActionMethods.setPathValue(value))
      : dispatch(ActionMethods.toggleTile(value))

  const boundGoNext = () => dispatch(ActionMethods.goNext())
  const boundGoBack = () => dispatch(ActionMethods.goBack())
  const boundSetApplicantsQuantity = (value: number) =>
    dispatch(ActionMethods.setApplicantsQuantity(value))

  const boundSetTab = (value: ValueType) => dispatch(ActionMethods.setTab(value))
  const boundSetInnerStep = (value: ValueType) =>
    dispatch(ActionMethods.setInnerStep(value))
  const boundSetPathValue = (value: ValueType) =>
    dispatch(ActionMethods.setPathValue(value))

  const boundSetContactValue = (value: ValueType) =>
    dispatch(ActionMethods.setContactValue(value))

  const boundSetEnquiryDetailsValue = (value: ValueType) =>
    dispatch(ActionMethods.setEnquiryDetailsValue(value))

  const boundFinishEasyFlow = () => dispatch(ActionMethods.finishEasyFlow())

  const boundStartFactFind = () => dispatch(ActionMethods.startFactFind())

  const boundFinishFactFind = () => dispatch(ActionMethods.finishEasyFlow())

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
    boundSetContactValue,
    boundSetEnquiryDetailsValue,
    boundStartFactFind,
    boundFinishEasyFlow,
    boundFinishFactFind,
  }
}

export default useStore
