import PropTypes from "prop-types"
import { useContext } from "react"
import DataContext from "../../context/DataContext"
import EditButton from "./EditButton"
import { FaTrashAlt } from "react-icons/fa"

function Row() {
  const {
    items,
    handleDelete,
    handleEditWord,
    handleEditTranslation,
    handleEditSample,
    handleEditNotes,
    handleEditCategory,
    language,
    langCode,
  } = useContext(DataContext)
  return (
    <>
      {items.map((item) => (
        <tr
          className="word-row"
          key={item.id}
          id={item.id}
        >
          <td>
            {item.item ? (
              <div className="editable">
                <p
                  data-word
                  lang={langCode(language)}
                >
                  {item.item}
                </p>
                <EditButton
                  handleOnClick={(e) => handleEditWord(e, item.id)}
                  titleTerm="word"
                />
              </div>
            ) : null}
          </td>

          <td>
            {item.translation ? (
              <div className="editable">
                <p data-translation>{item.translation}</p>
                <EditButton
                  handleOnClick={(e) => handleEditTranslation(e, item.id)}
                  titleTerm="translation"
                />
              </div>
            ) : null}
          </td>
          <td>
            {item.category ? (
              <div className="editable">
                <p data-category>{item.category}</p>
                <EditButton
                  handleOnClick={(e) => handleEditCategory(e, item.id)}
                  titleTerm="category"
                />
              </div>
            ) : null}
          </td>
          <td>
            {item.sampleSentence ? (
              <div className="editable">
                <p
                  data-sample
                  lang={langCode(language)}
                >
                  {item.sampleSentence}
                </p>
                <EditButton
                  handleOnClick={(e) => handleEditSample(e, item.id)}
                  titleTerm="phrase"
                />
              </div>
            ) : null}
          </td>
          <td>
            {item.notes ? (
              <div className="editable">
                <p data-note>{item.notes}</p>
                <EditButton
                  handleOnClick={(e) => handleEditNotes(e, item.id)}
                  titleTerm="note"
                />
              </div>
            ) : null}
          </td>

          <td>
            <button
              onClick={() => handleDelete(item.id)}
              className="delete-entry no-text"
              title="Delete entry"
            >
              <span className="visually-hidden">Delete {item.item}</span>
              <FaTrashAlt aria-hidden="true" />
            </button>
          </td>
        </tr>
      ))}
    </>
  )
}

Row.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      item: PropTypes.string.isRequired,
    })
  ),
}

Row.defaultProps = {
  items: [],
}

export default Row
