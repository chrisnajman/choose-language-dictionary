import { FaPlus } from "react-icons/fa"
import { useContext } from "react"
import DataContext from "../../context/DataContext"

function AddRow() {
  const {
    newItem,
    setNewItem,
    handleSubmit,
    category,
    handleCategoryChange,
    handleSampleChange,
    sampleSentence,
    handleNotesChange,
    notes,
    translation,
    setTranslation,
    language,
    langCode,
  } = useContext(DataContext)

  return (
    <>
      <h3 className="visually-hidden">Create Dictionary Entry</h3>
      <form
        className="add-word"
        onSubmit={handleSubmit}
      >
        <p>
          Fields marked <span className="required">*</span> are required.
        </p>

        <div className="form-items">
          <div>
            <label htmlFor="addWord">
              Add word <span className="required">*</span>{" "}
              <span className="visually-hidden">Required field</span>
            </label>
            <input
              id="addWord"
              type="text"
              required
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              lang={language ? langCode(language) : "en"}
            />
          </div>
          <div>
            <label htmlFor="translateWord">
              Add translation <span className="required">*</span>{" "}
              <span className="visually-hidden">Required field</span>
            </label>
            <input
              id="translateWord"
              type="text"
              required
              value={translation}
              onChange={(e) => setTranslation(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="partOfSpeech">
              Category <span className="required">*</span>{" "}
              <span className="visually-hidden">Required field</span>
            </label>
            <select
              id="partOfSpeech"
              required
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">Select</option>
              <option value="Verb">Verb</option>
              <option value="Noun">Noun</option>
              <option value="Pronoun">Pronoun</option>
              <option value="Adjective">Adjective</option>
              <option value="Adverb">Adverb</option>
              <option value="Article">Article</option>
              <option value="Preposition">Preposition</option>
              <option value="Conjunction">Conjunction</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="sampleSentence">Sample phrase or sentence</label>
            <textarea
              id="sampleSentence"
              value={sampleSentence}
              onChange={handleSampleChange}
              lang={language ? langCode(language) : "en"}
            ></textarea>
          </div>
          <div>
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              value={notes}
              onChange={handleNotesChange}
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          title="Submit form"
        >
          <span>Add entry</span>
          <FaPlus aria-hidden="true" />
        </button>
      </form>
    </>
  )
}

export default AddRow
