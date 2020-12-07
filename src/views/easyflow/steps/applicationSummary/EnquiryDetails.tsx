import * as React from "react"

import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import CheckBoxWithDescription from "../../../../components/Shared/CheckBoxWithDescription"
import TitleWithTooltip from "../../../../components/Shared/TitleWithTooltip"
import Slider, { Steps, ValueType } from "../../../../components/Slider"
import Lable from "../../../../components/Shared/Inputs/Lable"

import useStore from "../../../../hooks/useStore"

const steps = ["7", "14", "21", "28", "35", "42", "49", "56", "60+"] as Steps

const EnquiryDetails: React.FC = () => {
  const {
    state: {
      enquiryDetails: { urgency, notes, overdueCheck },
    },
    boundSetEnquiryDetailsValue,
  } = useStore()

  return (
    <div className="flex flex-col space-y-6">
      <StepHeader>
        <TitleWithTooltip title="Details of enquiry">
          Norem ipsum...
        </TitleWithTooltip>
      </StepHeader>

      <div className="flex flex-col my-5 space-y-5">
        <Lable>Urgency of finance (In Days)</Lable>
        <Slider
          defaultValue={urgency}
          steps={steps}
          style={{ minWidth: "500px" }}
          onChange={(e: ValueType) => {
            console.log(e)
            boundSetEnquiryDetailsValue({
              keyName: "urgency",
              value: e,
            })
          }}
        />
      </div>

      <br />

      <div className="flex flex-col my-5 space-y-5">
        <Lable>Notes</Lable>
        <textarea
          className="border p-4"
          placeholder="Optional"
          value={notes}
          onChange={e =>
            boundSetEnquiryDetailsValue({
              keyName: "notes",
              value: e.target.value,
            })
          }
        ></textarea>
      </div>

      <CheckBoxWithDescription
        checked={overdueCheck}
        onToggleCheck={(e: boolean) =>
          boundSetEnquiryDetailsValue({ keyName: "overdueCheck", value: e })
        }
      >
        Have you ever been overdue in the payment of your goods and/or
        responsibilities?
      </CheckBoxWithDescription>
    </div>
  )
}

export default EnquiryDetails
