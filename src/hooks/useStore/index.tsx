import * as React from "react"

import { ActionMethods, ValueType } from "../../store/actions"
import { Store } from "../../store/AppStore"

export type DataType = ValueType
export type QuantityType = number

const useStore = () => {
  const { state, dispatch }: any = React.useContext(Store)

  const boundSelectTile = (value: ValueType) =>
    value?.keyName?.includes(".")
      ? dispatch(ActionMethods.setPathValue(value))
      : dispatch(ActionMethods.selectTile(value))

  const boundToggleTile = (value: ValueType) =>
    dispatch(ActionMethods.setPathValue(value))

  const boundSelectAndNext = (value: ValueType) =>
    value?.keyName?.includes(".")
      ? dispatch(ActionMethods.setPathValueAndNext(value))
      : dispatch(ActionMethods.selectTileAndNext(value))

  const boundMutateAndNext = (value: ValueType) =>
    ActionMethods.mutateStepsAndNext(value)

  const boundSelectMutateAndNext = (value: ValueType) =>
    value?.keyName?.includes(".")
      ? dispatch(ActionMethods.setPathValueMutateAndNext(value))
      : dispatch(ActionMethods.selectTileMutateAndNext(value))

  const boundGoNext = () => dispatch(ActionMethods.goNext())
  const boundGoBack = () => dispatch(ActionMethods.goBack())

  const boundSetApplicantsQuantity = (value: QuantityType) =>
    dispatch(ActionMethods.setApplicantsQuantity(value))

  const boundSetApplicantData = (value: QuantityType) =>
    dispatch(ActionMethods.setApplicantData(value))

  const boundSetTab = (value: ValueType) => dispatch(ActionMethods.setTab(value))
  const boundSetInnerStep = (value: ValueType) =>
    dispatch(ActionMethods.setInnerStep(value))

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
    boundSelectMutateAndNext,
    boundSelectAndNext,
    boundMutateAndNext,
    boundGoNext,
    boundGoBack,
    boundSetApplicantsQuantity,
    boundSetApplicantData,
    boundSetTab,
    boundSetInnerStep,
    boundSetContactValue,
    boundSetEnquiryDetailsValue,
    boundStartFactFind,
    boundFinishEasyFlow,
    boundFinishFactFind,
  }
}

export default useStore
