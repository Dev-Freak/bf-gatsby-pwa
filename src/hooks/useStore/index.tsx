import * as React from "react"

import * as actions from "../../store/actions"
import { Store } from "../../store/AppStore"

const useStore = () => {
  const { state, dispatch }: any = React.useContext(Store)

  const boundSelectTile = (value: any) =>
    value?.keyName?.includes(".")
      ? dispatch(actions.setPathValue(value))
      : dispatch(actions.selectTile(value))

  const boundToggleTile = (value: any) =>
    value?.keyName?.includes(".")
      ? dispatch(actions.setPathValue(value))
      : dispatch(actions.toggleTile(value))

  const boundGoNext = () => dispatch(actions.goNext())
  const boundGoBack = () => dispatch(actions.goBack())
  const boundSetApplicantsQuantity = (value: any) =>
    dispatch(actions.setApplicantsQuantity(value))

  const boundSetTab = (value: any) => dispatch(actions.setTab(value))
  const boundSetInnerStep = (value: any) => dispatch(actions.setInnerStep(value))
  const boundSetPathValue = (value: any) => dispatch(actions.setPathValue(value))

  const boundSetContactValue = (value: any) =>
    dispatch(actions.setContactValue(value))

  const boundSetEnquiryDetailsValue = (value: any) =>
    dispatch(actions.setEnquiryDetailsValue(value))

  const boundFinishEasyFlow = () => dispatch(actions.finishEasyFlow())

  const boundStartFactFind = () => dispatch(actions.startFactFind())

  const boundFinishFactFind = () => dispatch(actions.finishEasyFlow())

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
