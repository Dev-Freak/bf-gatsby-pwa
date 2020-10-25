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

export {
  selectTile,
  toggleTile,
  goNext,
  goBack,
  setApplicantsQuantity,
  setTab,
  setInnerStep,
  setPathValue,
}
