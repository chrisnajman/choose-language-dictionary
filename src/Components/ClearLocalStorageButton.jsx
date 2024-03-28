import { IoMdWarning } from "react-icons/io"

function ClearLocalStorageButton() {
  const clearLocalStorage = () => {
    if (
      window.confirm(
        "WARNING: Clicking 'Ok' will permanently delete any and all dictionary entries and language settings, and return you to the home screen!"
      )
    ) {
      window.localStorage.clear()
      window.location.reload()
    } else {
      return
    }
  }
  return (
    <div className="clear-local-storage">
      <button onClick={clearLocalStorage}>
        Reset and return to home screen <IoMdWarning />
      </button>
    </div>
  )
}

export default ClearLocalStorageButton
