import * as React from "react"
import Title from "./Shared/Title"

import { ReportSVG } from "../utils/icons"

import { PostMessageContext } from "./AppFlow"

const FinishEasyFlow: React.FC = () => {
  const { sendMessage } = React.useContext(PostMessageContext)

  React.useEffect(() => {
    sendMessage("FINISHED")
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-11/12 m-auto space-y-reverse space-y-8 lg:flex-row lg:space-y-0 lg:w-8/12 lg:space-x-20">
      <div className="flex flex-col flex-1 order-last items-start justify-center space-y-4 md:space-y-6 lg:order-first">
        <Title>You're all set!</Title>

        <p>
          Thank you for applying through our Financial Flow.
          <br />
          <br />
          The selected information has been sent to our team for reviewing. One of
          our team members should contact you shorly.
        </p>
      </div>
      <div className="flex flex-1 order-first lg:order-last">
        <img src={ReportSVG} alt="Report SVG" />
      </div>
    </div>
  )
}

export default FinishEasyFlow
