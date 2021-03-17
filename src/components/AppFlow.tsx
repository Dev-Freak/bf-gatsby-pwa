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
      window.addEventListener("message", (e): any => {
        console.log("EventListener::message")
        console.log(e)
        if (e.origin !== "https://borgfinancial.com.au/" || e.data !== "CORS") return

        event = e
      })

      const main = document.getElementsByTagName("main")[0]
      main.onresize = () => {
        console.log("EventListener::resize")

        event.source.postMessage(
          {
            height: window.innerHeight,
            width: window.innerWidth,
          },
          event.origin
        )
      }
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
