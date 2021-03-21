export type ValueType = any

export type ActionType = {
  type: string
  payload: any | undefined
}

// Action Types
export const Actions = {
  // EASY_FLOW
  EASY_FLOW_SELECT_TILE: "EASY_FLOW_SELECT_TILE",
  EASY_FLOW_GO_NEXT: "EASY_FLOW_GO_NEXT",
  EASY_FLOW_GO_BACK: "EASY_FLOW_GO_BACK",
  EASY_FLOW_SET_APPLICANTS_QUANTITY: "EASY_FLOW_SET_APPLICANTS_QUANTITY",
  EASY_FLOW_SET_PATH_VALUE: "EASY_FLOW_SET_PATH_VALUE",
  EASY_FLOW_MUTATE_STEPS: "EASY_FLOW_MUTATE_STEPS",
  EASY_FLOW_MUTATE_NEXT: "EASY_FLOW_MUTATE_NEXT",
  EASY_FLOW_SELECT_MUTATE_NEXT: "EASY_FLOW_SELECT_MUTATE_NEXT",
  EASY_FLOW_SET_VALUE_MUTATE_NEXT: "EASY_FLOW_SET_VALUE_MUTATE_NEXT",
  EASY_FLOW_SELECT_TILE_NEXT: "EASY_FLOW_SELECT_TILE_NEXT",
  EASY_FLOW_SET_PATH_VALUE_NEXT: "EASY_FLOW_SET_PATH_VALUE_NEXT",
  EASY_FLOW_SET_APPLICANT_DATA: "EASY_FLOW_SET_APPLICANT_DATA",

  // TABS
  TABS_SET_TAB: "TABS_SET_TAB",

  // SECTION
  SECTION_SET_INNER_STEP: "SECTION_SET_INNER_STEP",

  // CONTACT_FORM
  CONTACT_FORM_SET_VALUE: "CONTACT_FORM_SET_VALUE",

  // ENQUIRY_DETAILS
  ENQUIRY_DETAILS_SET_VALUE: "ENQUIRY_DETAILS_SET_VALUE",

  // APP_FLOW
  EASY_FLOW_FINISH: "EASY_FLOW_FINISH",
  FACT_FIND_FINISH: "FACT_FIND_FINISH",
  FACT_FIND_INTERESTED: "FACT_FIND_INTERESTED",

  RESET: 'RESET'
}

// Action Creators

const goNext = () => ({
  type: Actions.EASY_FLOW_GO_NEXT,
})

const goBack = () => ({
  type: Actions.EASY_FLOW_GO_BACK,
})

const setApplicantsQuantity = (qty: number) => ({
  type: Actions.EASY_FLOW_SET_APPLICANTS_QUANTITY,
  payload: qty,
})

const setApplicantData = (value: ValueType) => ({
  type: Actions.EASY_FLOW_SET_APPLICANT_DATA,
  payload: value,
})

const setTab = (value: ValueType) => ({
  type: Actions.TABS_SET_TAB,
  payload: value,
})

const setInnerStep = (value: ValueType) => ({
  type: Actions.SECTION_SET_INNER_STEP,
  payload: value,
})

const selectTile = (value: ValueType) => ({
  type: Actions.EASY_FLOW_SELECT_TILE,
  payload: value,
})

const setPathValue = (value: ValueType) => ({
  type: Actions.EASY_FLOW_SET_PATH_VALUE,
  payload: value,
})

const mutateSteps = (value: ValueType) => ({
  type: Actions.EASY_FLOW_MUTATE_STEPS,
  payload: value,
})

const mutateStepsAndNext = (value: ValueType) => ({
  type: Actions.EASY_FLOW_MUTATE_NEXT,
  payload: value,
})

const setPathValueAndNext = (value: ValueType) => ({
  type: Actions.EASY_FLOW_SET_PATH_VALUE_NEXT,
  payload: value,
})

const setPathValueMutateAndNext = (value: ValueType) => ({
  type: Actions.EASY_FLOW_SET_VALUE_MUTATE_NEXT,
  payload: value,
})

const selectTileAndNext = (value: ValueType) => ({
  type: Actions.EASY_FLOW_SELECT_TILE_NEXT,
  payload: value,
})

const selectTileMutateAndNext = (value: ValueType) => ({
  type: Actions.EASY_FLOW_SELECT_MUTATE_NEXT,
  payload: value,
})

const setContactValue = (value: ValueType) => ({
  type: Actions.CONTACT_FORM_SET_VALUE,
  payload: value,
})

const setEnquiryDetailsValue = (value: ValueType) => ({
  type: Actions.ENQUIRY_DETAILS_SET_VALUE,
  payload: value,
})

const finishEasyFlow = () => ({
  type: Actions.EASY_FLOW_FINISH,
})

const startFactFind = () => ({
  type: Actions.FACT_FIND_INTERESTED,
})

const finishFactFind = () => ({
  type: Actions.FACT_FIND_FINISH,
})

const resetApp = () => ({
  type: Actions.RESET
})

export const ActionMethods = {
  goNext,
  goBack,
  setTab,
  setInnerStep,
  selectTile,
  selectTileAndNext,
  setPathValue,
  setPathValueAndNext,
  mutateSteps,
  selectTileMutateAndNext,
  mutateStepsAndNext,
  setPathValueMutateAndNext,
  setApplicantsQuantity,
  setApplicantData,
  setContactValue,
  setEnquiryDetailsValue,
  finishEasyFlow,
  startFactFind,
  finishFactFind,
  resetApp
}
