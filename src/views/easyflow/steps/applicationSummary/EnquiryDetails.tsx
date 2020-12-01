import * as React from "react"

import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import CheckBoxWithDescription from "../../../../components/Shared/CheckBoxWithDescription"
import TitleWithTooltip from "../../../../components/Shared/TitleWithTooltip"
import Slider, { StepsType, ValueType } from "../../../../components/Slider"
import Lable from "../../../../components/Shared/Inputs/Lable"

import useEnquiryDetails from "../../../../hooks/useEnquiryDetails"

const steps = [
  {
    label: "7",
    value: 1,
  } as StepsType,
  {
    label: "14",
    value: 2,
  } as StepsType,
  {
    label: "21",
    value: 3,
  } as StepsType,
  {
    label: "28",
    value: 4,
  } as StepsType,
  {
    label: "35",
    value: 5,
  } as StepsType,
  {
    label: "42",
    value: 6,
  } as StepsType,
  {
    label: "49",
    value: 7,
  } as StepsType,
  {
    label: "56",
    value: 8,
  } as StepsType,
  {
    label: "60+",
    value: 9,
  } as StepsType,
]

const EnquiryDetails: React.FC = () => {
  const {
    urgency,
    notes,
    overdueCheck,
    boundSetEnquiryDetailsValue,
  } = useEnquiryDetails()

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
          onChange={(e: ValueType) =>
            boundSetEnquiryDetailsValue({
              keyName: "urgency",
              value: e,
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
        Do you authorise BorgFinancial to use your information?
      </CheckBoxWithDescription>
    </div>
  )
}

export default EnquiryDetails
