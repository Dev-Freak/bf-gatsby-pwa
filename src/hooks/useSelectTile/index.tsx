import * as React from "react"

const { Store } = require("../../store/AppStore")
const actions = require("../../store/actions")

const useSelectTile = (key: string, value: string) => {
  const { state, dispatch } = React.useContext(Store)

  const { easyFlow } = state
  const isTileSelected = easyFlow?.[key] === value
  const boundSelectTile = () => {
    dispatch(actions.selectTile({ key, value }))

    setTimeout(() => {
      dispatch(actions.goNext())
    }, 500)
  }

  return { isTileSelected, boundSelectTile }
}

export default useSelectTile
