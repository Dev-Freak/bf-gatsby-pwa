import _ from "lodash"

import { Actions, ActionType } from "./actions"
import { objRemoveEmptyOrNull } from "../utils/trimObject"
import { initialStep, mutateSteps } from '../components/EasyFlow/stepsManager';

export const initialState = {
  currentStep: 0,
  tabs: {
    activeTab: 0,
    section: 0,
  },
  easyFlow: {
    applicants: [{}, {}, {}, {}],
  },
  easyFlowSteps: {
    steps: initialStep,
  },
  factFind: {},
  contactInfo: {},
  enquiryDetails: {},
  isEasyFlowFinished: false,
  isFactFindInterested: false,
  isFactFindFinished: false,
}

export const reducer = (state: any, action: ActionType) => {
  const { type, payload } = action
  let easyFlowTemp
  let tabs

  console.log(action)

  switch (type) {
    case Actions.EASY_FLOW_SELECT_TILE:
      return {
        ...state,
        easyFlow: { ...state.easyFlow, [payload.keyName]: payload.value },
        easyFlowSteps: { steps: mutateSteps(payload.keyName, payload.value, state.easyFlowSteps.steps) }
      }

    case Actions.EASY_FLOW_GO_NEXT:
      return {
        ...state,
        currentStep: state.currentStep + 1,
      }

    case Actions.EASY_FLOW_GO_BACK:
      return {
        ...state,
        currentStep: state.currentStep - 1,
      }

    case Actions.EASY_FLOW_SET_APPLICANTS_QUANTITY:
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

    case Actions.EASY_FLOW_SET_PATH_VALUE:
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

    case Actions.EASY_FLOW_SELECT_MUTATE_NEXT:
      return {}

    case Actions.TABS_SET_TAB:
      tabs = { ...state.tabs }

      return {
        ...state,
        tabs: { section: 0, activeTab: payload },
      }

    case Actions.SECTION_SET_INNER_STEP:
      tabs = { ...state.tabs }

      return {
        ...state,
        tabs: { ...tabs, section: payload },
      }

    case Actions.CONTACT_FORM_SET_VALUE:
      return {
        ...state,
        contactInfo: { ...state.contactInfo, [payload.keyName]: payload.value },
      }

    case Actions.ENQUIRY_DETAILS_SET_VALUE:
      return {
        ...state,
        enquiryDetails: {
          ...state.enquiryDetails,
          [payload.keyName]: payload.value,
        },
      }

    case Actions.EASY_FLOW_FINISH:
      return { ...state, isEasyFlowFinished: true }

    case Actions.FACT_FIND_INTERESTED:
      return { ...state, isFactFindInterested: true }

    case Actions.FACT_FIND_FINISH:
      return { ...state, isFactFindFinished: true }

    default:
      return state
  }
}
