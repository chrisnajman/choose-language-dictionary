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
              placeholder="Add word"
              required
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              lang={langCode(language)}
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
              placeholder="Add translation"
              required
              value={translation}
              onChange={(e) => setTranslation(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="partOfSpeech">
              Part of speech <span className="required">*</span>{" "}
              <span className="visually-hidden">Required field</span>
            </label>
            <select
              id="partOfSpeech"
              required
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">Select an option</option>
              <option value="Verb">Verb</option>
              <option value="Pronoun">Pronoun</option>
              <option value="Noun">Noun</option>
              <option value="Article">Article</option>
              <option value="Adjective">Adjective</option>
              <option value="Adverb">Adverb</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="sampleSentence">Sample phrase or sentence</label>
            <textarea
              id="sampleSentence"
              placeholder="Add sample phrase or sentence (optional)"
              value={sampleSentence}
              onChange={handleSampleChange}
              lang={langCode(language)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              placeholder="Add notes (optional)"
              value={notes}
              onChange={handleNotesChange}
              lang=""
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
