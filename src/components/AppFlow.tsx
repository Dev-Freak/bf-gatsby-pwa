import * as React from "react"

import useStore from "../hooks/useStore"
import usePostMessage from "../hooks/usePostMessage"

import EasyFlow from "../views/easyflow"
import FinishProcess from "./FinishProcess"

export const PostMessageContext = React.createContext({
  sendMessage: (container: any) => {},
})

const AppFlow: React.FC = () => {
  const {
    state: { isEasyFlowFinished /*, isFactFindInterested, isFactFindFinished */ },
  } = useStore()

  const { sendMessage } = usePostMessage("https://borgfinancial.com.au")

  return (
    <React.Fragment>
      <PostMessageContext.Provider value={{ sendMessage }}>
        {/* isFactFindFinished && "Fact Find Finished" */}
        {/* isEasyFlowFinished && !isFactFindInterested && <FinishEasyFlow /> */}
        {/* isFactFindInterested && !isFactFindFinished && "Fact Find" */}
        {isEasyFlowFinished && <FinishProcess />}
        {!isEasyFlowFinished && <EasyFlow />}
      </PostMessageContext.Provider>
    </React.Fragment>
  )
}

export default AppFlow
