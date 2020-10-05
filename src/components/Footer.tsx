import React from "react"

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="h-36 w-full bg-gray-100 text-footer md:h-24">
      <div className="p-4 h-full flex flex-col items-center justify-center text-center text-xs space-y-4 md:flex-row md:space-y-0 md:justify-between md:text-justify md:px-12 lg:px-40">
        <p className="m-0 md:w-6/12 lg:w-3/12">
          Christopher Borg is an authorised Credit Representative No 436774 of
          Mortgage Specialists Pty Ltd ACL Number is 387025
        </p>
        <p className="m-0">Copyright 2020 - Borg Financial</p>
      </div>
    </footer>
  )
}

export default Footer
