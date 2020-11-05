// Action Types

export const ActionTypes = {
  // EASY_FLOW
  EASY_FLOW_SELECT_TILE: "EASY_FLOW_SELECT_TILE",
  EASY_FLOW_TOGGLE_TILE: "EASY_FLOW_TOGGLE_TILE",
  EASY_FLOW_GO_NEXT: "EASY_FLOW_GO_NEXT",
  EASY_FLOW_GO_BACK: "EASY_FLOW_GO_BACK",
  EASY_FLOW_SET_APPLICANTS_QUANTITY: "EASY_FLOW_SET_APPLICANTS_QUANTITY",
  EASY_FLOW_SET_PATH_VALUE: "EASY_FLOW_SET_PATH_VALUE",

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

const selectTile = value => {
  return {
    type: ActionTypes.EASY_FLOW_SELECT_TILE,
    payload: value,
  }
}

const toggleTile = value => {
  return {
    type: ActionTypes.EASY_FLOW_TOGGLE_TILE,
    payload: value,
  }
}

const goNext = () => {
  return {
    type: ActionTypes.EASY_FLOW_GO_NEXT,
  }
}

const goBack = () => {
  return {
    type: ActionTypes.EASY_FLOW_GO_BACK,
  }
}

const setApplicantsQuantity = qty => {
  return {
    type: ActionTypes.EASY_FLOW_SET_APPLICANTS_QUANTITY,
    payload: qty,
  }
}

const setTab = value => {
  return {
    type: ActionTypes.TABS_SET_TAB,
    payload: value,
  }
}

const setInnerStep = value => {
  return {
    type: ActionTypes.SECTION_SET_INNER_STEP,
    payload: value,
  }
}

const setPathValue = value => {
  return {
    type: ActionTypes.EASY_FLOW_SET_PATH_VALUE,
    payload: value,
  }
}

const setContactValue = value => {
  return {
    type: ActionTypes.CONTACT_FORM_SET_VALUE,
    payload: value,
  }
}

const setEnquiryDetailsValue = value => {
  return {
    type: ActionTypes.ENQUIRY_DETAILS_SET_VALUE,
    payload: value,
  }
}

const finishEasyFlow = () => {
  return {
    type: ActionTypes.EASY_FLOW_FINISH,
  }
}

const startFactFind = () => {
  return {
    type: ActionTypes.FACT_FIND_INTERESTED,
  }
}

const finishFactFind = () => {
  return {
    type: ActionTypes.FACT_FIND_FINISH,
  }
}

export {
  selectTile,
  toggleTile,
  goNext,
  goBack,
  setApplicantsQuantity,
  setTab,
  setInnerStep,
  setPathValue,
  setContactValue,
  setEnquiryDetailsValue,
  finishEasyFlow,
  startFactFind,
  finishFactFind,
}
