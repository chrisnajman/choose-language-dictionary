import { useState, useEffect } from "react"
import { MdDarkMode } from "react-icons/md"
import { MdLightMode } from "react-icons/md"

function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme")
    return savedTheme !== null ? savedTheme : "default" // Handle null case
  })

  useEffect(() => {
    const root = document.querySelector("html")
    root.classList.remove("light-theme", "default")
    root.classList.add(theme)

    // Update icon and mode text based on the initial theme
    updateIconAndMode(theme)
  }, [theme])

  const updateIconAndMode = (currentTheme) => {
    const svgLightMode = document.getElementById("lightmode")
    const svgDarkMode = document.getElementById("darkmode")
    const mode = document.getElementById("mode")

    if (currentTheme === "light-theme") {
      svgDarkMode.classList.add("hide")
      svgLightMode.classList.remove("hide")
      mode.textContent = "off"
    } else {
      svgDarkMode.classList.remove("hide")
      svgLightMode.classList.add("hide")
      mode.textContent = "on"
    }
  }

  const handleThemeToggle = (e) => {
    e.preventDefault()
    const newTheme = theme === "light-theme" ? "default" : "light-theme"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <form
      id="theme-picker"
      className="theme-picker"
    >
      <button
        type="button"
        id="btn-theme-toggle"
        className="btn-theme-toggle"
        aria-pressed
        onClick={(e) => handleThemeToggle(e)}
      >
        <MdDarkMode
          aria-hidden="true"
          className="theme-icon theme-dark"
          id="darkmode"
        />
        <MdLightMode
          aria-hidden="true"
          className="theme-icon theme-light hide"
          id="lightmode"
        />
        <span>Dark Mode:</span>{" "}
        <span
          id="mode"
          className="mode"
        >
          On
        </span>
      </button>
    </form>
  )
}

export default ThemeSwitcher
