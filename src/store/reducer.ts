import _ from "lodash"

import { Actions, ActionType } from "./actions"
import { objRemoveEmptyOrNull } from "../utils/trimObject"
import { initialStep, mutateSteps } from "../views/easyflow/stepsManager"

export type Tabs = {
  activeTab: number
  section: number
}

export type Applicant = {}

export type EasyFlow = {
  applicants: Array<Applicant>
}

export type EasyFlowSteps = {
  steps: Array<JSX.Element>
}

export type FactFind = {}

export type ContactInfo = {}

export type EnquiryDetails = {}

/*
    !!!IMPORTANT!!!
    TODO
    
    currentStep MUST be moved into easyFlowSteps interface.
    Remember... This will break the actions that modify its value and also the components that consume it
*/
export type State = {
  currentStep: number
  tabs: Tabs
  easyFlow: EasyFlow
  easyFlowSteps: EasyFlowSteps
  factFind: FactFind
  contactInfo: ContactInfo
  enquiryDetails: EnquiryDetails
  isEasyFlowFinished: true | false
  isFactFindInterested: true | false
  isFactFindFinished: true | false
}

export const initialState: State = {
  currentStep: 0,
  tabs: {
    activeTab: 0,
    section: 0,
  },
  easyFlow: {
    applicants: [],
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

export const reducer = (state: State, action: ActionType) => {
  const { type, payload } = action
  let currentValue = null
  let applicantsTemp = null
  let easyFlowTemp = _.cloneDeep(state.easyFlow)

  const path = payload?.keyName
  const shallowerPath = path?.split("[]")[0]

  // console.log(action)

  switch (type) {
    case Actions.EASY_FLOW_SELECT_TILE:
      return {
        ...state,
        easyFlow: { ...state.easyFlow, [payload.keyName]: payload.value },
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
      const selectedQty = payload
      const applicantsQty = easyFlowTemp.applicants?.length ?? 0
      applicantsTemp = easyFlowTemp.applicants ? [...easyFlowTemp.applicants] : []

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

      return {
        ...state,
        easyFlow: { ...easyFlowTemp },
        currentStep: state.currentStep + 1,
      }

    case Actions.EASY_FLOW_SET_APPLICANT_DATA:
      const semiPath = path.split(".")[0]
      const applicantIndex = semiPath.split("[")[1].split("]")[0]
      const updatedProp = path.split(".")[1].replace("[]", "")

      applicantsTemp = [...state.easyFlow.applicants]
      currentValue = _.get(easyFlowTemp, shallowerPath) ?? []

      if (currentValue.includes(payload.value)) {
        currentValue = currentValue.filter((f: string) => f !== payload.value)
      } else {
        currentValue.push(payload.value)
      }

      let applicantTemp = { ..._.get(easyFlowTemp, semiPath) }
      applicantTemp[updatedProp] = currentValue
      applicantsTemp[applicantIndex] = applicantTemp

      return {
        ...state,
        easyFlow: { ...easyFlowTemp, applicants: [...applicantsTemp] },
      }

    case Actions.EASY_FLOW_SET_PATH_VALUE:
      currentValue = _.get(easyFlowTemp, shallowerPath) ?? []

      if (currentValue.includes(payload.value)) {
        currentValue = currentValue.filter((f: string) => f !== payload.value)
      } else {
        currentValue.push(payload.value)
      }

      _.set(easyFlowTemp, shallowerPath, currentValue)
      easyFlowTemp = objRemoveEmptyOrNull(easyFlowTemp)

      return { ...state, easyFlow: { ...easyFlowTemp } }

    case Actions.EASY_FLOW_SET_PATH_VALUE_NEXT:
      currentValue = _.get(easyFlowTemp, shallowerPath) ?? []

      if (currentValue.includes(payload.value)) {
        currentValue = currentValue.filter((f: string) => f !== payload.value)
      } else {
        currentValue.push(payload.value)
      }

      _.set(easyFlowTemp, shallowerPath, currentValue)
      easyFlowTemp = objRemoveEmptyOrNull(easyFlowTemp)

      return {
        ...state,
        easyFlow: { ...easyFlowTemp },
        currentStep: state.currentStep + 1,
      }

    case Actions.EASY_FLOW_SELECT_TILE_NEXT:
      return {
        ...state,
        easyFlow: { ...state.easyFlow, [payload.keyName]: payload.value },
        currentStep: state.currentStep + 1,
      }

    case Actions.EASY_FLOW_SELECT_MUTATE_NEXT:
      return {
        ...state,
        easyFlow: { ...state.easyFlow, [payload.keyName]: payload.value },
        easyFlowSteps: {
          steps: mutateSteps(
            payload.keyName,
            payload.value,
            state.easyFlowSteps.steps
          ),
        },
        currentStep: state.currentStep + 1,
      }

    case Actions.EASY_FLOW_MUTATE_NEXT:
      return {
        ...state,
        easyFlowSteps: {
          steps: mutateSteps(
            payload.keyName,
            payload.value,
            state.easyFlowSteps.steps
          ),
        },
        currentStep: state.currentStep + 1,
      }

    case Actions.TABS_SET_TAB:
      return {
        ...state,
        tabs: { section: 0, activeTab: payload },
      }

    case Actions.SECTION_SET_INNER_STEP:
      return {
        ...state,
        tabs: { ...state.tabs, section: payload },
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

    case Actions.RESET:
      return { ...initialState }

    default:
      return state
  }
}
