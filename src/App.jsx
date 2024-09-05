import { DataProvider } from "./context/DataContext"
import { useState, useEffect } from "react"
import PageLoader from "./Components/PageLoader"
import Page from "./Components/Page"

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <DataProvider>
          <Page />
        </DataProvider>
      )}
    </>
  )
}

export default App
