import React from "react"
import { renderHook, act } from "@testing-library/react-hooks"
import useStore from "../useStore"
import { ActionMethods } from "../../store/actions"
import { initialState } from "../../store/reducer"

// Mock the store context
jest.mock("../useStore", () => {
  const originalModule = jest.requireActual("../useStore")
  return {
    __esModule: true,
    default: jest.fn(),
  }
})

describe("useStore Hook", () => {
  let mockDispatch: jest.Mock
  let mockState: typeof initialState

  beforeEach(() => {
    mockDispatch = jest.fn()
    mockState = { ...initialState }
    ;(useStore as jest.Mock).mockReturnValue({
      state: mockState,
      dispatch: mockDispatch,
      boundSetTab: jest.fn(value => mockDispatch(ActionMethods.setTab(value))),
      boundSetInnerStep: jest.fn(value =>
        mockDispatch(ActionMethods.setInnerStep(value))
      ),
      boundGoNext: jest.fn(() => mockDispatch(ActionMethods.goNext())),
      boundGoBack: jest.fn(() => mockDispatch(ActionMethods.goBack())),
      boundSelectTile: jest.fn(payload =>
        mockDispatch(ActionMethods.selectTile(payload))
      ),
      boundSelectTileAndNext: jest.fn(payload =>
        mockDispatch(ActionMethods.selectTileAndNext(payload))
      ),
      boundSetPathValue: jest.fn(payload =>
        mockDispatch(ActionMethods.setPathValue(payload))
      ),
      boundSetPathValueAndNext: jest.fn(payload =>
        mockDispatch(ActionMethods.setPathValueAndNext(payload))
      ),
      boundMutateSteps: jest.fn(payload =>
        mockDispatch(ActionMethods.mutateSteps(payload))
      ),
      boundSelectTileMutateAndNext: jest.fn(payload =>
        mockDispatch(ActionMethods.selectTileMutateAndNext(payload))
      ),
      boundMutateStepsAndNext: jest.fn(payload =>
        mockDispatch(ActionMethods.mutateStepsAndNext(payload))
      ),
      boundSetPathValueMutateAndNext: jest.fn(payload =>
        mockDispatch(ActionMethods.setPathValueMutateAndNext(payload))
      ),
      boundSetApplicantsQuantity: jest.fn(value =>
        mockDispatch(ActionMethods.setApplicantsQuantity(value))
      ),
      boundSetApplicantData: jest.fn(payload =>
        mockDispatch(ActionMethods.setApplicantData(payload))
      ),
      boundSetContactValue: jest.fn(payload =>
        mockDispatch(ActionMethods.setContactValue(payload))
      ),
      boundSetEnquiryDetailsValue: jest.fn(payload =>
        mockDispatch(ActionMethods.setEnquiryDetailsValue(payload))
      ),
      boundFinishEasyFlow: jest.fn(() =>
        mockDispatch(ActionMethods.finishEasyFlow())
      ),
      boundStartFactFind: jest.fn(() => mockDispatch(ActionMethods.startFactFind())),
      boundFinishFactFind: jest.fn(() =>
        mockDispatch(ActionMethods.finishFactFind())
      ),
      boundResetApp: jest.fn(() => mockDispatch(ActionMethods.resetApp())),
    })
  })

  describe("State Management", () => {
    it("should return initial state", () => {
      const { result } = renderHook(() => useStore())

      expect(result.current.state).toEqual(initialState)
    })

    it("should return current step", () => {
      mockState.currentStep = 3
      ;(useStore as jest.Mock).mockReturnValue({
        state: mockState,
        dispatch: mockDispatch,
        boundSetTab: jest.fn(value => mockDispatch(ActionMethods.setTab(value))),
        boundSetInnerStep: jest.fn(value =>
          mockDispatch(ActionMethods.setInnerStep(value))
        ),
        boundGoNext: jest.fn(() => mockDispatch(ActionMethods.goNext())),
        boundGoBack: jest.fn(() => mockDispatch(ActionMethods.goBack())),
        boundSelectTile: jest.fn(payload =>
          mockDispatch(ActionMethods.selectTile(payload))
        ),
        boundSelectTileAndNext: jest.fn(payload =>
          mockDispatch(ActionMethods.selectTileAndNext(payload))
        ),
        boundSetPathValue: jest.fn(payload =>
          mockDispatch(ActionMethods.setPathValue(payload))
        ),
        boundSetPathValueAndNext: jest.fn(payload =>
          mockDispatch(ActionMethods.setPathValueAndNext(payload))
        ),
        boundMutateSteps: jest.fn(payload =>
          mockDispatch(ActionMethods.mutateSteps(payload))
        ),
        boundSelectTileMutateAndNext: jest.fn(payload =>
          mockDispatch(ActionMethods.selectTileMutateAndNext(payload))
        ),
        boundMutateStepsAndNext: jest.fn(payload =>
          mockDispatch(ActionMethods.mutateStepsAndNext(payload))
        ),
        boundSetPathValueMutateAndNext: jest.fn(payload =>
          mockDispatch(ActionMethods.setPathValueMutateAndNext(payload))
        ),
        boundSetApplicantsQuantity: jest.fn(value =>
          mockDispatch(ActionMethods.setApplicantsQuantity(value))
        ),
        boundSetApplicantData: jest.fn(payload =>
          mockDispatch(ActionMethods.setApplicantData(payload))
        ),
        boundSetContactValue: jest.fn(payload =>
          mockDispatch(ActionMethods.setContactValue(payload))
        ),
        boundSetEnquiryDetailsValue: jest.fn(payload =>
          mockDispatch(ActionMethods.setEnquiryDetailsValue(payload))
        ),
        boundFinishEasyFlow: jest.fn(() =>
          mockDispatch(ActionMethods.finishEasyFlow())
        ),
        boundStartFactFind: jest.fn(() =>
          mockDispatch(ActionMethods.startFactFind())
        ),
        boundFinishFactFind: jest.fn(() =>
          mockDispatch(ActionMethods.finishFactFind())
        ),
        boundResetApp: jest.fn(() => mockDispatch(ActionMethods.resetApp())),
      })

      const { result } = renderHook(() => useStore())

      expect(result.current.state.currentStep).toBe(3)
    })

    it("should return easyFlow state", () => {
      mockState.easyFlow = {
        ...mockState.easyFlow,
        projectType: "Residential",
        applicants: [{ income_type: ["PAYG"] }],
      }
      ;(useStore as jest.Mock).mockReturnValue({
        state: mockState,
        dispatch: mockDispatch,
        boundSetTab: jest.fn(value => mockDispatch(ActionMethods.setTab(value))),
        boundSetInnerStep: jest.fn(value =>
          mockDispatch(ActionMethods.setInnerStep(value))
        ),
        boundGoNext: jest.fn(() => mockDispatch(ActionMethods.goNext())),
        boundGoBack: jest.fn(() => mockDispatch(ActionMethods.goBack())),
        boundSelectTile: jest.fn(payload =>
          mockDispatch(ActionMethods.selectTile(payload))
        ),
        boundSelectTileAndNext: jest.fn(payload =>
          mockDispatch(ActionMethods.selectTileAndNext(payload))
        ),
        boundSetPathValue: jest.fn(payload =>
          mockDispatch(ActionMethods.setPathValue(payload))
        ),
        boundSetPathValueAndNext: jest.fn(payload =>
          mockDispatch(ActionMethods.setPathValueAndNext(payload))
        ),
        boundMutateSteps: jest.fn(payload =>
          mockDispatch(ActionMethods.mutateSteps(payload))
        ),
        boundSelectTileMutateAndNext: jest.fn(payload =>
          mockDispatch(ActionMethods.selectTileMutateAndNext(payload))
        ),
        boundMutateStepsAndNext: jest.fn(payload =>
          mockDispatch(ActionMethods.mutateStepsAndNext(payload))
        ),
        boundSetPathValueMutateAndNext: jest.fn(payload =>
          mockDispatch(ActionMethods.setPathValueMutateAndNext(payload))
        ),
        boundSetApplicantsQuantity: jest.fn(value =>
          mockDispatch(ActionMethods.setApplicantsQuantity(value))
        ),
        boundSetApplicantData: jest.fn(payload =>
          mockDispatch(ActionMethods.setApplicantData(payload))
        ),
        boundSetContactValue: jest.fn(payload =>
          mockDispatch(ActionMethods.setContactValue(payload))
        ),
        boundSetEnquiryDetailsValue: jest.fn(payload =>
          mockDispatch(ActionMethods.setEnquiryDetailsValue(payload))
        ),
        boundFinishEasyFlow: jest.fn(() =>
          mockDispatch(ActionMethods.finishEasyFlow())
        ),
        boundStartFactFind: jest.fn(() =>
          mockDispatch(ActionMethods.startFactFind())
        ),
        boundFinishFactFind: jest.fn(() =>
          mockDispatch(ActionMethods.finishFactFind())
        ),
        boundResetApp: jest.fn(() => mockDispatch(ActionMethods.resetApp())),
      })

      const { result } = renderHook(() => useStore())

      expect(result.current.state.easyFlow.projectType).toBe("Residential")
      expect(result.current.state.easyFlow.applicants).toHaveLength(1)
    })

    it("should return tabs state", () => {
      mockState.tabs = {
        activeTab: 2,
        section: 1,
      }
      ;(useStore as jest.Mock).mockReturnValue({
        state: mockState,
        dispatch: mockDispatch,
        boundSetTab: jest.fn(value => mockDispatch(ActionMethods.setTab(value))),
        boundSetInnerStep: jest.fn(value =>
          mockDispatch(ActionMethods.setInnerStep(value))
        ),
        boundGoNext: jest.fn(() => mockDispatch(ActionMethods.goNext())),
        boundGoBack: jest.fn(() => mockDispatch(ActionMethods.goBack())),
        boundSelectTile: jest.fn(payload =>
          mockDispatch(ActionMethods.selectTile(payload))
        ),
        boundSelectTileAndNext: jest.fn(payload =>
          mockDispatch(ActionMethods.selectTileAndNext(payload))
        ),
        boundSetPathValue: jest.fn(payload =>
          mockDispatch(ActionMethods.setPathValue(payload))
        ),
        boundSetPathValueAndNext: jest.fn(payload =>
          mockDispatch(ActionMethods.setPathValueAndNext(payload))
        ),
        boundMutateSteps: jest.fn(payload =>
          mockDispatch(ActionMethods.mutateSteps(payload))
        ),
        boundSelectTileMutateAndNext: jest.fn(payload =>
          mockDispatch(ActionMethods.selectTileMutateAndNext(payload))
        ),
        boundMutateStepsAndNext: jest.fn(payload =>
          mockDispatch(ActionMethods.mutateStepsAndNext(payload))
        ),
        boundSetPathValueMutateAndNext: jest.fn(payload =>
          mockDispatch(ActionMethods.setPathValueMutateAndNext(payload))
        ),
        boundSetApplicantsQuantity: jest.fn(value =>
          mockDispatch(ActionMethods.setApplicantsQuantity(value))
        ),
        boundSetApplicantData: jest.fn(payload =>
          mockDispatch(ActionMethods.setApplicantData(payload))
        ),
        boundSetContactValue: jest.fn(payload =>
          mockDispatch(ActionMethods.setContactValue(payload))
        ),
        boundSetEnquiryDetailsValue: jest.fn(payload =>
          mockDispatch(ActionMethods.setEnquiryDetailsValue(payload))
        ),
        boundFinishEasyFlow: jest.fn(() =>
          mockDispatch(ActionMethods.finishEasyFlow())
        ),
        boundStartFactFind: jest.fn(() =>
          mockDispatch(ActionMethods.startFactFind())
        ),
        boundFinishFactFind: jest.fn(() =>
          mockDispatch(ActionMethods.finishFactFind())
        ),
        boundResetApp: jest.fn(() => mockDispatch(ActionMethods.resetApp())),
      })

      const { result } = renderHook(() => useStore())

      expect(result.current.state.tabs.activeTab).toBe(2)
      expect(result.current.state.tabs.section).toBe(1)
    })
  })

  describe("Action Dispatching", () => {
    it("should dispatch goNext action", () => {
      const { result } = renderHook(() => useStore())

      act(() => {
        result.current.boundGoNext()
      })

      expect(mockDispatch).toHaveBeenCalledWith(ActionMethods.goNext())
    })

    it("should dispatch goBack action", () => {
      const { result } = renderHook(() => useStore())

      act(() => {
        result.current.boundGoBack()
      })

      expect(mockDispatch).toHaveBeenCalledWith(ActionMethods.goBack())
    })

    it("should dispatch setApplicantsQuantity action", () => {
      const { result } = renderHook(() => useStore())

      act(() => {
        result.current.boundSetApplicantsQuantity(3)
      })

      expect(mockDispatch).toHaveBeenCalledWith(
        ActionMethods.setApplicantsQuantity(3)
      )
    })

    it("should dispatch selectTile action", () => {
      const { result } = renderHook(() => useStore())
      const payload = { keyName: "projectType", value: "Residential" }

      act(() => {
        result.current.boundSelectTile(payload)
      })

      expect(mockDispatch).toHaveBeenCalledWith(ActionMethods.selectTile(payload))
    })

    it("should dispatch selectTileAndNext action", () => {
      const { result } = renderHook(() => useStore())
      const payload = { keyName: "projectType", value: "Residential" }

      act(() => {
        result.current.boundSelectTileAndNext(payload)
      })

      expect(mockDispatch).toHaveBeenCalledWith(
        ActionMethods.selectTileAndNext(payload)
      )
    })

    it("should dispatch setPathValue action", () => {
      const { result } = renderHook(() => useStore())
      const payload = { keyName: "projectType[]", value: "Residential" }

      act(() => {
        result.current.boundSetPathValue(payload)
      })

      expect(mockDispatch).toHaveBeenCalledWith(ActionMethods.setPathValue(payload))
    })

    it("should dispatch setPathValueAndNext action", () => {
      const { result } = renderHook(() => useStore())
      const payload = { keyName: "projectType[]", value: "Residential" }

      act(() => {
        result.current.boundSetPathValueAndNext(payload)
      })

      expect(mockDispatch).toHaveBeenCalledWith(
        ActionMethods.setPathValueAndNext(payload)
      )
    })

    it("should dispatch setApplicantData action", () => {
      const { result } = renderHook(() => useStore())
      const payload = { keyName: "applicants[0].income_type[]", value: "PAYG" }

      act(() => {
        result.current.boundSetApplicantData(payload)
      })

      expect(mockDispatch).toHaveBeenCalledWith(
        ActionMethods.setApplicantData(payload)
      )
    })

    it("should dispatch setContactValue action", () => {
      const { result } = renderHook(() => useStore())
      const payload = { keyName: "email", value: "john@example.com" }

      act(() => {
        result.current.boundSetContactValue(payload)
      })

      expect(mockDispatch).toHaveBeenCalledWith(
        ActionMethods.setContactValue(payload)
      )
    })

    it("should dispatch setEnquiryDetailsValue action", () => {
      const { result } = renderHook(() => useStore())
      const payload = { keyName: "priority", value: "High" }

      act(() => {
        result.current.boundSetEnquiryDetailsValue(payload)
      })

      expect(mockDispatch).toHaveBeenCalledWith(
        ActionMethods.setEnquiryDetailsValue(payload)
      )
    })

    it("should dispatch finishEasyFlow action", () => {
      const { result } = renderHook(() => useStore())

      act(() => {
        result.current.boundFinishEasyFlow()
      })

      expect(mockDispatch).toHaveBeenCalledWith(ActionMethods.finishEasyFlow())
    })

    it("should dispatch startFactFind action", () => {
      const { result } = renderHook(() => useStore())

      act(() => {
        result.current.boundStartFactFind()
      })

      expect(mockDispatch).toHaveBeenCalledWith(ActionMethods.startFactFind())
    })

    it("should dispatch finishFactFind action", () => {
      const { result } = renderHook(() => useStore())

      act(() => {
        result.current.boundFinishFactFind()
      })

      expect(mockDispatch).toHaveBeenCalledWith(ActionMethods.finishFactFind())
    })

    it("should dispatch resetApp action", () => {
      const { result } = renderHook(() => useStore())

      act(() => {
        result.current.boundResetApp()
      })

      expect(mockDispatch).toHaveBeenCalledWith(ActionMethods.resetApp())
    })
  })

  describe("Tab Management", () => {
    it("should dispatch setTab action", () => {
      const { result } = renderHook(() => useStore())

      act(() => {
        result.current.boundSetTab(2)
      })

      expect(mockDispatch).toHaveBeenCalledWith(ActionMethods.setTab(2))
    })

    it("should dispatch setInnerStep action", () => {
      const { result } = renderHook(() => useStore())

      act(() => {
        result.current.boundSetInnerStep(1)
      })

      expect(mockDispatch).toHaveBeenCalledWith(ActionMethods.setInnerStep(1))
    })
  })

  describe("Step Mutation", () => {
    it("should dispatch mutateSteps action", () => {
      const { result } = renderHook(() => useStore())
      const payload = { keyName: "projectType", value: "Residential" }

      act(() => {
        result.current.boundMutateSteps(payload)
      })

      expect(mockDispatch).toHaveBeenCalledWith(ActionMethods.mutateSteps(payload))
    })

    it("should dispatch selectTileMutateAndNext action", () => {
      const { result } = renderHook(() => useStore())
      const payload = { keyName: "projectType", value: "Residential" }

      act(() => {
        result.current.boundSelectTileMutateAndNext(payload)
      })

      expect(mockDispatch).toHaveBeenCalledWith(
        ActionMethods.selectTileMutateAndNext(payload)
      )
    })

    it("should dispatch mutateStepsAndNext action", () => {
      const { result } = renderHook(() => useStore())
      const payload = { keyName: "projectType", value: "Residential" }

      act(() => {
        result.current.boundMutateStepsAndNext(payload)
      })

      expect(mockDispatch).toHaveBeenCalledWith(
        ActionMethods.mutateStepsAndNext(payload)
      )
    })

    it("should dispatch setPathValueMutateAndNext action", () => {
      const { result } = renderHook(() => useStore())
      const payload = { keyName: "projectType[]", value: "Residential" }

      act(() => {
        result.current.boundSetPathValueMutateAndNext(payload)
      })

      expect(mockDispatch).toHaveBeenCalledWith(
        ActionMethods.setPathValueMutateAndNext(payload)
      )
    })
  })

  describe("Error Handling", () => {
    it("should handle dispatch errors gracefully", () => {
      mockDispatch.mockImplementation(() => {
        throw new Error("Dispatch error")
      })

      const { result } = renderHook(() => useStore())

      expect(() => {
        act(() => {
          result.current.boundGoNext()
        })
      }).toThrow("Dispatch error")
    })
  })
})
