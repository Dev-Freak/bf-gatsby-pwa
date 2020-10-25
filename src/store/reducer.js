import _ from "lodash"

import { ActionTypes } from "./actions"
import { objRemoveEmptyOrNull } from "../utils/trimObject"

export const initialState = {
  currentStep: 0,
  tabs: {
    activeTab: 0,
    section: 0,
  },
  easyFlow: {
    applicants: [{}, {}, {}, {}],
  },
  factFind: {},
}

export const reducer = (state, action) => {
  const { type, payload } = action
  let easyFlowTemp
  let tabs

  console.log(action)

  switch (type) {
    case ActionTypes.EASY_FLOW_SELECT_TILE:
      return {
        ...state,
        easyFlow: { ...state.easyFlow, [payload.keyName]: payload.value },
      }

    case ActionTypes.EASY_FLOW_TOGGLE_TILE:
      easyFlowTemp = { ...state.easyFlow }
      let keyPropertyValue = easyFlowTemp?.[payload.keyName]

      if (keyPropertyValue) {
        const indexOfValue = keyPropertyValue.indexOf(payload.value)

        indexOfValue === -1
          ? keyPropertyValue.push(payload.value)
          : keyPropertyValue.splice(indexOfValue, 1)

        easyFlowTemp = {
          ...easyFlowTemp,
          [payload.keyName]: [...keyPropertyValue],
        }
      } else {
        easyFlowTemp = {
          ...easyFlowTemp,
          [payload.keyName]: [payload.value],
        }
      }

      return { ...state, easyFlow: { ...easyFlowTemp } }

    case ActionTypes.EASY_FLOW_GO_NEXT:
      return {
        ...state,
        currentStep: state.currentStep + 1,
      }

    case ActionTypes.EASY_FLOW_GO_BACK:
      return {
        ...state,
        currentStep: state.currentStep - 1,
      }

    case ActionTypes.EASY_FLOW_SET_APPLICANTS_QUANTITY:
      easyFlowTemp = { ...state.easyFlow }

      const selectedQty = payload
      const applicantsQty = easyFlowTemp.applicants?.length ?? 0
      let applicantsTemp = easyFlowTemp.applicants
        ? [...easyFlowTemp.applicants]
        : []

      const newApplicant = {
        income_type: null,
        employment_type: null,
        self_employment_type: null,
      }

      if (applicantsQty === 0) {
        for (let index = 0; index < selectedQty; index++) {
          applicantsTemp.push(newApplicant)
        }
      } else if (applicantsQty < selectedQty) {
        for (let index = applicantsQty; index < selectedQty; index++) {
          applicantsTemp.push(newApplicant)
        }
      } else if (applicantsQty > selectedQty) {
        applicantsTemp.splice(selectedQty)
      }

      easyFlowTemp = {
        ...easyFlowTemp,
        applicants: [...applicantsTemp],
      }

      return { ...state, easyFlow: { ...easyFlowTemp } }

    case ActionTypes.TABS_SET_TAB:
      tabs = { ...state.tabs }

      return {
        ...state,
        tabs: { section: 0, activeTab: payload },
      }

    case ActionTypes.SECTION_SET_INNER_STEP:
      tabs = { ...state.tabs }

      return {
        ...state,
        tabs: { ...tabs, section: payload },
      }

    case ActionTypes.EASY_FLOW_SET_PATH_VALUE:
      easyFlowTemp = { ...state.easyFlow }
      let currentValue
      let path = payload.keyName

      if (path.includes("[]")) {
        const shallowerPath = path.split("[]")[0]
        currentValue = _.get(easyFlowTemp, shallowerPath, { length: 0 })

        path = path.replace("[]", `[${currentValue.length}]`)
      } else {
        currentValue = _.get(easyFlowTemp, path, { length: 0 })
      }

      currentValue.length !== 0 && currentValue.includes(payload.value)
        ? _.unset(easyFlowTemp, path)
        : _.set(easyFlowTemp, path, payload.value)

      easyFlowTemp = objRemoveEmptyOrNull(easyFlowTemp)

      return { ...state, easyFlow: { ...easyFlowTemp } }

    default:
      return state
  }
}
