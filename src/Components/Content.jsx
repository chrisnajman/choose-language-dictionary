import AddRow from "./Dictionary/AddRow"
import SortRows from "./Dictionary/SortRows"
import Table from "./Dictionary/Table"
import ClearLocalStorageButton from "./ClearLocalStorageButton"

function Content() {
  return (
    <main
      id="main-content"
      className="main"
    >
      <AddRow />
      <div>
        <SortRows />
        <Table />
      </div>
      <ClearLocalStorageButton />
    </main>
  )
}

export default Content
