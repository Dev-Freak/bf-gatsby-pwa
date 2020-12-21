import * as React from "react"

import CheckBoxWithDescription from "../../../../components/Shared/CheckBoxWithDescription"
import Lable from "../../../../components/Shared/Inputs/Lable"

import useStore from "../../../../hooks/useStore"

const EnquiryDetails: React.FC = () => {
  const {
    state: {
      enquiryDetails: { notes, overdueCheck },
    },
    boundSetEnquiryDetailsValue,
  } = useStore()

  return (
    <div className="flex flex-col w-6/12 space-y-6">
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
