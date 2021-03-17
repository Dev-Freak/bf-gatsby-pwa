import * as React from "react"

import useStore from "../hooks/useStore"

import EasyFlow from "../views/easyflow"
import FinishEasyFlow from "./FinishEasyFlow"

const AppFlow: React.FC = () => {
  const {
    state: { isEasyFlowFinished, isFactFindInterested, isFactFindFinished },
  } = useStore()

  React.useEffect(() => {
    const crossOriginConnection = () => {
      console.log("crossOriginConnection")

      let event: any = null
      window.addEventListener("message", evnt => {
        console.log("EventListener::message")
        if (evnt.origin !== "https://borgfinancial.com.au/" || evnt.data !== "CORS")
          return

        event = evnt
      })

      window.addEventListener("resize", () => {
        console.log("EventListener::resize")
        event.source.postMessage(
          {
            height: window.innerHeight,
            width: window.innerWidth,
          },
          event.origin
        )
      })
    }

    crossOriginConnection()
  }, [])

  return (
    <React.Fragment>
      {isFactFindFinished && "Fact Find Finished"}
      {isEasyFlowFinished && !isFactFindInterested && <FinishEasyFlow />}
      {isFactFindInterested && !isFactFindFinished && "Fact Find"}
      {!isEasyFlowFinished && !isFactFindInterested && !isFactFindFinished && (
        <EasyFlow />
      )}
    </React.Fragment>
  )
}

export default AppFlow
