import { Actions, ActionMethods } from "../actions"

describe("Action Creators", () => {
  describe("goNext", () => {
    it("should create EASY_FLOW_GO_NEXT action", () => {
      const action = ActionMethods.goNext()

      expect(action).toEqual({
        type: Actions.EASY_FLOW_GO_NEXT,
        payload: undefined
      })
    })
  })

  describe("goBack", () => {
    it("should create EASY_FLOW_GO_BACK action", () => {
      const action = ActionMethods.goBack()

      expect(action).toEqual({
        type: Actions.EASY_FLOW_GO_BACK,
        payload: undefined
      })
    })
  })

  describe("setApplicantsQuantity", () => {
    it("should create EASY_FLOW_SET_APPLICANTS_QUANTITY action with payload", () => {
      const quantity = 3
      const action = ActionMethods.setApplicantsQuantity(quantity)

      expect(action).toEqual({
        type: Actions.EASY_FLOW_SET_APPLICANTS_QUANTITY,
        payload: quantity
      })
    })

    it("should handle zero quantity", () => {
      const action = ActionMethods.setApplicantsQuantity(0)

      expect(action).toEqual({
        type: Actions.EASY_FLOW_SET_APPLICANTS_QUANTITY,
        payload: 0
      })
    })
  })

  describe("setApplicantData", () => {
    it("should create EASY_FLOW_SET_APPLICANT_DATA action with payload", () => {
      const payload = {
        keyName: "applicants[0].income_type[]",
        value: "PAYG"
      }
      const action = ActionMethods.setApplicantData(payload)

      expect(action).toEqual({
        type: Actions.EASY_FLOW_SET_APPLICANT_DATA,
        payload
      })
    })
  })

  describe("setTab", () => {
    it("should create TABS_SET_TAB action with payload", () => {
      const tabIndex = 2
      const action = ActionMethods.setTab(tabIndex)

      expect(action).toEqual({
        type: Actions.TABS_SET_TAB,
        payload: tabIndex
      })
    })
  })

  describe("setInnerStep", () => {
    it("should create SECTION_SET_INNER_STEP action with payload", () => {
      const stepIndex = 1
      const action = ActionMethods.setInnerStep(stepIndex)

      expect(action).toEqual({
        type: Actions.SECTION_SET_INNER_STEP,
        payload: stepIndex
      })
    })
  })

  describe("selectTile", () => {
    it("should create EASY_FLOW_SELECT_TILE action with payload", () => {
      const payload = {
        keyName: "projectType",
        value: "Residential"
      }
      const action = ActionMethods.selectTile(payload)

      expect(action).toEqual({
        type: Actions.EASY_FLOW_SELECT_TILE,
        payload
      })
    })
  })

  describe("setPathValue", () => {
    it("should create EASY_FLOW_SET_PATH_VALUE action with payload", () => {
      const payload = {
        keyName: "projectType[]",
        value: "Residential"
      }
      const action = ActionMethods.setPathValue(payload)

      expect(action).toEqual({
        type: Actions.EASY_FLOW_SET_PATH_VALUE,
        payload
      })
    })
  })

  describe("mutateSteps", () => {
    it("should create EASY_FLOW_MUTATE_STEPS action with payload", () => {
      const payload = {
        keyName: "projectType",
        value: "Residential"
      }
      const action = ActionMethods.mutateSteps(payload)

      expect(action).toEqual({
        type: Actions.EASY_FLOW_MUTATE_STEPS,
        payload
      })
    })
  })

  describe("mutateStepsAndNext", () => {
    it("should create EASY_FLOW_MUTATE_NEXT action with payload", () => {
      const payload = {
        keyName: "projectType",
        value: "Residential"
      }
      const action = ActionMethods.mutateStepsAndNext(payload)

      expect(action).toEqual({
        type: Actions.EASY_FLOW_MUTATE_NEXT,
        payload
      })
    })
  })

  describe("setPathValueAndNext", () => {
    it("should create EASY_FLOW_SET_PATH_VALUE_NEXT action with payload", () => {
      const payload = {
        keyName: "projectType[]",
        value: "Residential"
      }
      const action = ActionMethods.setPathValueAndNext(payload)

      expect(action).toEqual({
        type: Actions.EASY_FLOW_SET_PATH_VALUE_NEXT,
        payload
      })
    })
  })

  describe("selectTileAndNext", () => {
    it("should create EASY_FLOW_SELECT_TILE_NEXT action with payload", () => {
      const payload = {
        keyName: "projectType",
        value: "Residential"
      }
      const action = ActionMethods.selectTileAndNext(payload)

      expect(action).toEqual({
        type: Actions.EASY_FLOW_SELECT_TILE_NEXT,
        payload
      })
    })
  })

  describe("selectTileMutateAndNext", () => {
    it("should create EASY_FLOW_SELECT_MUTATE_NEXT action with payload", () => {
      const payload = {
        keyName: "projectType",
        value: "Residential"
      }
      const action = ActionMethods.selectTileMutateAndNext(payload)

      expect(action).toEqual({
        type: Actions.EASY_FLOW_SELECT_MUTATE_NEXT,
        payload
      })
    })
  })

  describe("setContactValue", () => {
    it("should create CONTACT_FORM_SET_VALUE action with payload", () => {
      const payload = {
        keyName: "email",
        value: "john@example.com"
      }
      const action = ActionMethods.setContactValue(payload)

      expect(action).toEqual({
        type: Actions.CONTACT_FORM_SET_VALUE,
        payload
      })
    })
  })

  describe("setEnquiryDetailsValue", () => {
    it("should create ENQUIRY_DETAILS_SET_VALUE action with payload", () => {
      const payload = {
        keyName: "priority",
        value: "High"
      }
      const action = ActionMethods.setEnquiryDetailsValue(payload)

      expect(action).toEqual({
        type: Actions.ENQUIRY_DETAILS_SET_VALUE,
        payload
      })
    })
  })

  describe("finishEasyFlow", () => {
    it("should create EASY_FLOW_FINISH action", () => {
      const action = ActionMethods.finishEasyFlow()

      expect(action).toEqual({
        type: Actions.EASY_FLOW_FINISH,
        payload: undefined
      })
    })
  })

  describe("startFactFind", () => {
    it("should create FACT_FIND_INTERESTED action", () => {
      const action = ActionMethods.startFactFind()

      expect(action).toEqual({
        type: Actions.FACT_FIND_INTERESTED,
        payload: undefined
      })
    })
  })

  describe("finishFactFind", () => {
    it("should create FACT_FIND_FINISH action", () => {
      const action = ActionMethods.finishFactFind()

      expect(action).toEqual({
        type: Actions.FACT_FIND_FINISH,
        payload: undefined
      })
    })
  })

  describe("resetApp", () => {
    it("should create RESET action", () => {
      const action = ActionMethods.resetApp()

      expect(action).toEqual({
        type: Actions.RESET,
        payload: undefined
      })
    })
  })
})
