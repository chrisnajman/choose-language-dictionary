import PropTypes from "prop-types"
import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"

const DataContext = createContext({})

const LOCAL_STORAGE_KEY = "lang-dictionary-"
const DICTIONARY_ITEMS_STORAGE_KEY = `${LOCAL_STORAGE_KEY}-items`
const LANGUAGE_STORAGE_KEY = `${LOCAL_STORAGE_KEY}-language`

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(DICTIONARY_ITEMS_STORAGE_KEY)) || []
  )

  const [language, setLanguage] = useState(
    localStorage.getItem(LANGUAGE_STORAGE_KEY) || ""
  )
  const [newItem, setNewItem] = useState("")
  const [translation, setTranslation] = useState("")
  const [category, setCategory] = useState("")
  const [sampleSentence, setSampleSentence] = useState("")
  const [notes, setNotes] = useState("")
  const [, setIsLanguageSelected] = useState(false)

  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem(DICTIONARY_ITEMS_STORAGE_KEY, JSON.stringify(newItems))
  }

  // SET LANGUAGE
  const setAndSaveLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
  }

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value

    setAndSaveLanguage(selectedLanguage)
    setIsLanguageSelected(true)
  }

  const langCode = (language) => {
    switch (language) {
      case "English":
        return "en"
      case "French":
        return "fr"
      case "German":
        return "de"
      case "Italian":
        return "it"
      case "Portuguese":
        return "pt"
      case "Spanish":
        return "es"
      default:
        return ""
    }
  }
  // END SET LANGUAGE

  // FORM
  const addItem = (item, translation, category, sampleSentence, notes) => {
    const id = uuidv4() // uuidv4 just generates unique ids and keys
    const myNewItem = {
      id,
      category,
      sampleSentence,
      notes,
      item,
      translation,
    }
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems)
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handleSampleChange = (e) => {
    setSampleSentence(e.target.value)
  }

  const handleNotesChange = (e) => {
    setNotes(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return
    addItem(newItem, translation, category, sampleSentence, notes)
    setNewItem("")
    setTranslation("")
    setCategory("")
    setSampleSentence("")
    setNotes("")
  }

  // END FORM

  // TABLE ROW

  const handleEditSample = (e, id) => {
    const parent = e.target.closest(".word-row")
    const sample = parent.querySelector("[data-sample]")

    if (e.target.innerText === "Edit") {
      e.target.innerText = "Save edit"
      sample.contentEditable = true
      sample.focus()
    } else {
      e.target.innerText = "Edit"
      sample.contentEditable = false
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          return { ...item, sampleSentence: sample.textContent.trim() }
        }
        return item
      })
      setAndSaveItems(updatedItems)
    }
  }

  const handleEditNotes = (e, id) => {
    const parent = e.target.closest(".word-row")
    const note = parent.querySelector("[data-note]")

    if (e.target.innerText === "Edit") {
      e.target.innerText = "Save edit"
      note.contentEditable = true
      note.focus()
    } else {
      e.target.innerText = "Edit"
      note.contentEditable = false
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          return { ...item, notes: note.textContent.trim() }
        }
        return item
      })
      setAndSaveItems(updatedItems)
    }
  }

  const handleDelete = (id) => {
    // item.id !== id : return new list of items that DO NOT contain the id of the clicked button
    const listItems = items.filter((item) => item.id !== id)
    setAndSaveItems(listItems)
  }

  // END TABLE ROW

  // SORT BUTTONS
  // Words
  const handleSortItemsAsc = () => {
    if (items.length >= 2) {
      const itemsAsc = [...items].sort((a, b) => a.item.localeCompare(b.item))
      setAndSaveItems(itemsAsc)
    }
  }

  const handleSortItemsDesc = () => {
    if (items.length >= 2) {
      const itemsDesc = [...items].sort((a, b) => b.item.localeCompare(a.item))
      setAndSaveItems(itemsDesc)
    }
  }

  // categories

  const handleSortCatsAsc = () => {
    if (items.length >= 2) {
      const catsAsc = [...items].sort((a, b) =>
        a.category.localeCompare(b.category)
      )
      setAndSaveItems(catsAsc)
    }
  }

  const handleSortCatsDesc = () => {
    if (items.length >= 2) {
      const catsDesc = [...items].sort((a, b) =>
        b.category.localeCompare(a.category)
      )
      setAndSaveItems(catsDesc)
    }
  }
  // end SORT BUTTONS

  return (
    <DataContext.Provider
      value={{
        newItem,
        setNewItem,
        handleSubmit,
        handleDelete,
        category,
        notes,
        handleCategoryChange,
        handleNotesChange,
        items,
        handleSortItemsAsc,
        handleSortItemsDesc,
        handleSortCatsAsc,
        handleSortCatsDesc,
        handleEditNotes,
        handleEditSample,
        handleSampleChange,
        sampleSentence,
        setTranslation,
        translation,
        handleLanguageChange,
        language,
        langCode,
        setLanguage,
        setIsLanguageSelected,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DataContext
