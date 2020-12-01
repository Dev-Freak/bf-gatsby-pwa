export type ValueType = any;

export type ActionType = {
  type: string,
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
  EASY_FLOW_SELECT_TILE_NEXT: 'EASY_FLOW_SELECT_TILE_NEXT',
  EASY_FLOW_SET_PATH_VALUE_NEXT: 'EASY_FLOW_SET_PATH_VALUE_NEXT',

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
}

// Action Creators

const goNext = () => {
  return {
    type: Actions.EASY_FLOW_GO_NEXT,
  }
}

const goBack = () => {
  return {
    type: Actions.EASY_FLOW_GO_BACK,
  }
}

const setApplicantsQuantity = (qty: number) => {
  return {
    type: Actions.EASY_FLOW_SET_APPLICANTS_QUANTITY,
    payload: qty,
  }
}

const setTab = (value: ValueType) => {
  return {
    type: Actions.TABS_SET_TAB,
    payload: value,
  }
}

const setInnerStep = (value: ValueType) => {
  return {
    type: Actions.SECTION_SET_INNER_STEP,
    payload: value,
  }
}

const selectTile = (value: ValueType) => {
  return {
    type: Actions.EASY_FLOW_SELECT_TILE,
    payload: value,
  }
}

const setPathValue = (value: ValueType) => {
  return {
    type: Actions.EASY_FLOW_SET_PATH_VALUE,
    payload: value,
  }
}


const mutateSteps = (value: ValueType) => {
  return {
    type: Actions.EASY_FLOW_MUTATE_STEPS,
    payload: value,
  }
}

const mutateStepsAndNext = (value: ValueType) => {
  return {
    type: Actions.EASY_FLOW_MUTATE_NEXT,
    payload: value,
  }
}

const setPathValueAndNext = (value: ValueType) => {
  return {
    type: Actions.EASY_FLOW_SET_PATH_VALUE_NEXT,
    payload: value,
  }
}

const setPathValueMutateAndNext = (value: ValueType) => {
  return {
    type: Actions.EASY_FLOW_SET_VALUE_MUTATE_NEXT,
    payload: value,
  }
}

const selectTileAndNext = (value: ValueType) => {
  return {
    type: Actions.EASY_FLOW_SELECT_TILE_NEXT,
    payload: value,
  }
}

const selectTileMutateAndNext = (value: ValueType) => {
  return {
    type: Actions.EASY_FLOW_MUTATE_NEXT,
    payload: value,
  }
}

const setContactValue = (value: ValueType) => {
  return {
    type: Actions.CONTACT_FORM_SET_VALUE,
    payload: value,
  }
}

const setEnquiryDetailsValue = (value: ValueType) => {
  return {
    type: Actions.ENQUIRY_DETAILS_SET_VALUE,
    payload: value,
  }
}

const finishEasyFlow = () => {
  return {
    type: Actions.EASY_FLOW_FINISH,
  }
}

const startFactFind = () => {
  return {
    type: Actions.FACT_FIND_INTERESTED,
  }
}

const finishFactFind = () => {
  return {
    type: Actions.FACT_FIND_FINISH,
  }
}

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
  setContactValue,
  setEnquiryDetailsValue,
  finishEasyFlow,
  startFactFind,
  finishFactFind,
}
