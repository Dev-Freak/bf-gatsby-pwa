// Action Types

export const ActionTypes = {
  EASY_FLOW_SELECT_TILE: "EASY_FLOW_SELECT_TILE",
  EASY_FLOW_TOGGLE_TILE: "EASY_FLOW_TOGGLE_TILE",
  EASY_FLOW_GO_NEXT: "EASY_FLOW_GO_NEXT",
  EASY_FLOW_GO_BACK: "EASY_FLOW_GO_BACK",
  EASY_FLOW_ADD_APPLICANTS: "EASY_FLOW_ADD_APPLICANTS",
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

const addApplicants = qty => {
  return {
    type: ActionTypes.EASY_FLOW_ADD_APPLICANTS,
    payload: qty,
  }
}

export { selectTile, toggleTile, goNext, goBack }
