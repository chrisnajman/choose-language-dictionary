import PropTypes from "prop-types"
import { useContext } from "react"
import DataContext from "../../context/DataContext"
import Row from "./Row"
import DeleteAllRowsButton from "./DeleteAllRowsButton"

function Table() {
  const { items } = useContext(DataContext)

  return (
    <div
      role="region"
      aria-labelledby="dictionary-entries"
      tabIndex="0"
      className="table-scroller"
    >
      <table
        id="dictionary-entries"
        className="dictionary-table"
      >
        <caption className="visually-hidden">
          Display Dictionary Entries
        </caption>
        <thead>
          <tr className="table-headings">
            <th>Word</th>
            <th>Translation</th>
            <th>Category</th>
            <th>Sample phrase</th>
            <th>Notes</th>
            <th>
              <span className="visually-hidden">Delete</span>
            </th>
          </tr>
        </thead>
        {items.length ? (
          <>
            <tbody className="tbody">
              <Row />
            </tbody>
            {items.length > 1 ? (
              <>
                <tfoot className="tfoot delete-all-rows-button">
                  <tr>
                    <td colSpan="6">
                      <DeleteAllRowsButton />
                    </td>
                  </tr>
                </tfoot>
              </>
            ) : null}
          </>
        ) : (
          <tfoot className="tfoot">
            <tr>
              <td colSpan="6">No entries to display</td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  )
}

Table.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      item: PropTypes.string.isRequired,
    })
  ),
}

Table.defaultProps = {
  items: [],
}

export default Table
