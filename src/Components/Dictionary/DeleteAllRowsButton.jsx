import { IoMdWarning } from "react-icons/io"
import { FaTrashAlt } from "react-icons/fa"

function DeleteAllRowsButton() {
  const deleteAllRows = () => {
    if (
      window.confirm(
        "WARNING: Clicking 'Ok' will permanently delete all dictionary entries!"
      )
    ) {
      const keyToRemove = "lang-dictionary--items"
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key.startsWith(keyToRemove)) {
          localStorage.removeItem(key)
        }
      }
      window.location.reload()
    } else {
      return
    }
  }

  return (
    <button onClick={deleteAllRows}>
      Delete all entries? <FaTrashAlt /> <IoMdWarning />
    </button>
  )
}

export default DeleteAllRowsButton
