import * as React from "react"

import { Store } from "../../store/AppStore"
import { goBack } from "../../store/actions"

const useGoBack = () => {
  const { dispatch } = React.useContext(Store)

  const boundGoBack = () => dispatch(goBack())

  return { boundGoBack }
}

export default useGoBack
