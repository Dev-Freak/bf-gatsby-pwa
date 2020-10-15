import * as React from "react"

const { Store } = require("../../store/AppStore")
const actions = require("../../store/actions")

const useToggleTile = (key: string, value: string) => {
  const { state, dispatch } = React.useContext(Store)

  const { easyFlow } = state
  const isTileToggled = easyFlow?.[key]?.includes(value) ?? false
  const boundToggleTile = () => dispatch(actions.toggleTile({ key, value }))

  return { isTileToggled, boundToggleTile }
}

export default useToggleTile
