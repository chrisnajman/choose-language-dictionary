import { useContext, useState, useEffect } from "react"
import DataContext from "../context/DataContext"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import AddLanguage from "./Dictionary/AddLanguage"
import SkipLink from "./SkipLink"

function Page() {
  const { language } = useContext(DataContext)
  const [isLanguageSelected, setIsLanguageSelected] = useState(
    Boolean(language)
  )
  useEffect(() => {
    setIsLanguageSelected(Boolean(language))
  }, [language])

  return (
    <>
      <AddLanguage />

      <div
        className={isLanguageSelected ? "" : "hide"}
        aria-hidden={isLanguageSelected ? "false" : "true"}
      >
        <SkipLink />
        <div className="page-container">
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Page
