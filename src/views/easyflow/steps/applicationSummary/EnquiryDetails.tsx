import * as React from "react"

import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import CheckBoxWithDescription from "../../../../components/Shared/CheckBoxWithDescription"
import Title from "../../../../components/Shared/Title"
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
        <Title>Details of enquiry</Title>
      </StepHeader>

      <div className="flex flex-col my-5 space-y-5">
        <Lable>Urgency of finance (In Days)</Lable>
        <Slider
          defaultValue={urgency ?? "7"}
          steps={steps}
          style={{ minWidth: "500px" }}
          onChange={(e: ValueType) =>
            boundSetEnquiryDetailsValue({
              keyName: "urgency",
              value: `${e} days`,
            })
          }
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
        Have you ever had any issues with your credit?
      </CheckBoxWithDescription>
    </div>
  )
}

export default EnquiryDetails
