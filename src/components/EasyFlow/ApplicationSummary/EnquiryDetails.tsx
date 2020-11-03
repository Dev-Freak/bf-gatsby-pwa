import * as React from "react"

import useEnquiryDetails from "../../../hooks/useEnquiryDetails"

import StepHeader from "../../DynamicStepper/StepHeader"
import CheckBoxWithDescription from "../../Shared/CheckBoxWithDescription"
import TitleWithTooltip from "../../Shared/TitleWithTooltip"

import Slider, { Steps } from "../../Slider"

import Lable from "../../Shared/Inputs/Lable"

const steps = [
  {
    label: "7",
    value: 1,
  } as Steps,
  {
    label: "14",
    value: 2,
  } as Steps,
  {
    label: "21",
    value: 3,
  } as Steps,
  {
    label: "28",
    value: 4,
  } as Steps,
  {
    label: "35",
    value: 5,
  } as Steps,
  {
    label: "42",
    value: 6,
  } as Steps,
  {
    label: "49",
    value: 7,
  } as Steps,
  {
    label: "56",
    value: 8,
  } as Steps,
  {
    label: "60+",
    value: 9,
  } as Steps,
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
        <TitleWithTooltip title="Summary">Norem ipsum...</TitleWithTooltip>
      </StepHeader>

      <div className="flex flex-col my-5">
        <Lable>Urgency of finance (In Days)</Lable>
        <Slider
          defaultValue={urgency}
          steps={steps}
          onChange={e =>
            boundSetEnquiryDetailsValue({
              keyName: "urgency",
              value: e,
            })
          }
        />
      </div>

      <div className="flex flex-col my-5">
        <Lable>Notes</Lable>
        <textarea
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
        onToggleCheck={e =>
          boundSetEnquiryDetailsValue({ keyName: "overdueCheck", value: e })
        }
      >
        Do you authorise BorgFinancial to use your information?
      </CheckBoxWithDescription>
    </div>
  )
}

export default EnquiryDetails
