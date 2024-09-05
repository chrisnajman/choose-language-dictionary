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
        title="Sort by word A-Z"
      >
        Sort by word <span className="visually-hidden">A-Z (ascending)</span>
        <FaSortAlphaDown aria-hidden="true" />
      </SortButton>

      <SortButton
        handleOnClick={handleSortItemsDesc}
        items={items}
        title="Sort by word Z-A"
      >
        Sort by word <span className="visually-hidden">Z-A (descending)</span>
        <FaSortAlphaUpAlt aria-hidden="true" />
      </SortButton>

      <SortButton
        handleOnClick={handleSortCatsAsc}
        items={items}
        title="Sort by category A-Z"
      >
        Sort by category{" "}
        <span className="visually-hidden"> A-Z (ascending)</span>
        <FaSortAlphaDown aria-hidden="true" />
      </SortButton>

      <SortButton
        handleOnClick={handleSortCatsDesc}
        items={items}
        title="Sort by category Z-A"
      >
        Sort by category{" "}
        <span className="visually-hidden">Z-A (descending)</span>
        <FaSortAlphaUpAlt aria-hidden="true" />
      </SortButton>
    </div>
  )
}

export default SortRows
