import * as React from "react"
import { CSSTransition } from "react-transition-group"

import "./styles.css"

type AlertType = {
  title: string
  content: string
  isOpen: true | false
  onClose: CallableFunction
}

const Alert: React.FC<AlertType> = ({ title, content, isOpen, onClose }) => {
  return (
    <CSSTransition in={isOpen} timeout={300} classNames="alert" unmountOnExit>
      <section className="absolute flex items-center justify-center px-6 mx-3 mt-20 mb-8 top-0 congrates-div">
        <div
          className="flex items-center bg-white shadow-xl border rounded-md mt-6 px-6 mx-8"
          style={{ width: "22rem" }}
        >
          <div className="mr-6 bg-green-500 rounded px-4 py-2  text-center -ml-3">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-white"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="flex items-center flex-col py-3 my-2 space-y-5">
            <h2 className="text-green-500 text-2xl font-bold mr-2 ">{title}</h2>
            <p className="text-sm text-gray-700">{content}</p>
          </div>
          <div
            className="flex justify-end flex-1 cursor-pointer"
            onClick={() => onClose()}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 text-red-600"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </section>
    </CSSTransition>
  )
}

export default Alert
