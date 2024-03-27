import PropTypes from "prop-types"
import { useContext } from "react"
import DataContext from "../../context/DataContext"
import { FaTrashAlt } from "react-icons/fa"

function Row() {
  const {
    items,
    handleDelete,
    handleEditSample,
    handleEditNotes,
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
          <td
            data-word
            lang={langCode(language)}
          >
            {item.item}
          </td>
          <td>{item.translation}</td>
          <td>{item.category}</td>
          <td>
            {item.sampleSentence ? (
              <div className="editable">
                <p
                  data-sample
                  lang={langCode(language)}
                >
                  {item.sampleSentence}
                </p>
                <button onClick={(e) => handleEditSample(e, item.id)}>
                  Edit
                </button>
              </div>
            ) : null}
          </td>
          <td>
            {item.notes ? (
              <div className="editable">
                <p data-note>{item.notes}</p>
                <button onClick={(e) => handleEditNotes(e, item.id)}>
                  Edit
                </button>
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
