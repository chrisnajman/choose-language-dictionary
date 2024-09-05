import { useContext } from "react"
import DataContext from "../context/DataContext"
import ThemeSwitcher from "./Theme/ThemeSwitcher"

function Header() {
  const { language } = useContext(DataContext)

  return (
    <header className="page-header">
      <h2 className="h1">
        <span
          className="logo"
          aria-hidden="true"
        ></span>{" "}
        <span>{language} Dictionary</span>
      </h2>
      <ThemeSwitcher />
    </header>
  )
}

export default Header
