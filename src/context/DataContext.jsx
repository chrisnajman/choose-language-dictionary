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
  const [sampleSentence, setSampleSentence] = useState("...")
  const [notes, setNotes] = useState("...")
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
    setSampleSentence("...")
    setNotes("...")
  }

  // SORT BUTTONS
  const handleSort = (items, length, asc, sortBy) => {
    if (items.length >= length) {
      if (asc) {
        const sortAsc = [...items].sort((a, b) =>
          a[sortBy].localeCompare(b[sortBy])
        )
        setAndSaveItems(sortAsc)
      } else {
        const sortDesc = [...items].sort((a, b) =>
          b[sortBy].localeCompare(a[sortBy])
        )
        setAndSaveItems(sortDesc)
      }
    }
  }

  const handleSortItemsAsc = () => {
    handleSort(items, 2, true, "item")
  }

  const handleSortCatsAsc = () => {
    handleSort(items, 2, true, "category")
  }

  const handleSortItemsDesc = () => {
    handleSort(items, 2, false, "item")
  }

  const handleSortCatsDesc = () => {
    handleSort(items, 2, false, "category")
  }

  // TABLE ROW
  const handleEdit = (e, id, targetAttribute, propertyName) => {
    const parent = e.target.closest(".word-row")
    const target = parent.querySelector(`[data-${targetAttribute}]`)

    if (e.target.innerText === "Edit") {
      e.target.innerText = "Save edit"
      target.contentEditable = true
      target.focus()
    } else {
      e.target.innerText = "Edit"
      target.contentEditable = false
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          return { ...item, [propertyName]: target.textContent.trim() }
        }
        return item
      })
      setAndSaveItems(updatedItems)
    }
  }

  const handleEditWord = (e, id) => {
    handleEdit(e, id, "word", "item")
  }

  const handleEditTranslation = (e, id) => {
    handleEdit(e, id, "translation", "translation")
  }

  const handleEditCategory = (e, id) => {
    handleEdit(e, id, "category", "category")
  }

  const handleEditSample = (e, id) => {
    handleEdit(e, id, "sample", "sampleSentence")
  }

  const handleEditNotes = (e, id) => {
    handleEdit(e, id, "note", "notes")
  }

  const handleDelete = (id) => {
    // item.id !== id : return new list of items that DO NOT contain the id of the clicked button
    const listItems = items.filter((item) => item.id !== id)
    setAndSaveItems(listItems)
  }

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
        handleEditWord,
        handleEditTranslation,
        handleEditCategory,
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
