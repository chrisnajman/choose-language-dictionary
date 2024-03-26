import { useContext } from "react"
import DataContext from "../../context/DataContext"
import SortButton from "./SortButton"
import { FaSortAlphaDown, FaSortAlphaUpAlt } from "react-icons/fa"

function SortRows() {
  const {
    handleSortItemsAsc,
    handleSortItemsDesc,
    handleSortCatsAsc,
    handleSortCatsDesc,
    items,
  } = useContext(DataContext)

  return (
    <div className="sort">
      <h3 className="visually-hidden">Sort Entries</h3>
      <SortButton
        handleOnClick={handleSortItemsAsc}
        items={items}
        title="Sort words A-Z"
      >
        Sort <span className="visually-hidden">words A-Z (ascending)</span>
        <FaSortAlphaDown aria-hidden="true" />
      </SortButton>

      <SortButton
        handleOnClick={handleSortItemsDesc}
        items={items}
        title="Sort words Z-A"
      >
        Sort <span className="visually-hidden"> words Z-A (descending)</span>
        <FaSortAlphaUpAlt aria-hidden="true" />
      </SortButton>

      <SortButton
        handleOnClick={handleSortCatsAsc}
        items={items}
        title="Group parts of speech A-Z"
      >
        Group parts of speech{" "}
        <span className="visually-hidden"> A-Z (ascending)</span>
        <FaSortAlphaDown aria-hidden="true" />
      </SortButton>

      <SortButton
        handleOnClick={handleSortCatsDesc}
        items={items}
        title="Group parts of speech Z-A"
      >
        Group parts of speech{" "}
        <span className="visually-hidden">Z-A (descending)</span>
        <FaSortAlphaUpAlt aria-hidden="true" />
      </SortButton>
    </div>
  )
}

export default SortRows
