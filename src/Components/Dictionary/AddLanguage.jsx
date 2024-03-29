import { useContext, useState, useEffect } from "react"
import DataContext from "../../context/DataContext"

function AddLanguage() {
  const { handleLanguageChange, language } = useContext(DataContext)
  const [selectedLanguage, setSelectedLanguage] = useState(language)

  useEffect(() => {
    setSelectedLanguage(language)
  }, [language])

  const handleLanguageSelect = (e) => {
    const selectedLanguage = e.target.value

    if (selectedLanguage === language) {
      handleLanguageChange(e)
    } else if (
      confirm(
        `You chose '${selectedLanguage.toUpperCase()}' If this is correct, click 'Ok'. If not, click 'Cancel' and choose again. `
      )
    ) {
      handleLanguageChange(e)
      setSelectedLanguage(selectedLanguage)
    } else {
      e.target.value = language
    }
  }

  return (
    <div
      className={`add-language ${language ? "hide" : ""}`}
      aria-hidden={language ? "true" : "false"}
    >
      <h1>
        <span
          className="logo"
          aria-hidden="true"
        ></span>{" "}
        <span>&#x7B;Choose Language&#x7D; Dictionary</span>
      </h1>

      <p>To create a dictionary, choose a language from the dropdown menu.</p>

      <form>
        <div>
          <label
            htmlFor="select-language"
            className="visually-hidden"
          >
            Select language
          </label>
          <select
            id="select-language"
            onChange={handleLanguageSelect}
            value={selectedLanguage}
          >
            <option value="">Select Language</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Italian">Italian</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default AddLanguage
