import React from "react"

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const Logo = require("../images/logo_borgfinancial.png")

  return (
    <header className="h-20 w-full shadow-md">
      <div className="h-full flex items-center justify-center">
        <img src={Logo} className="w-56 md:w-64" alt="BorgFinancial Logo" />
      </div>
    </header>
  )
}

export default Header
