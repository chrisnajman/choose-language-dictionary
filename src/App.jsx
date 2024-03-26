import { DataProvider } from "./context/DataContext"

import Page from "./Components/Page"

function App() {
  return (
    <DataProvider>
      <Page />
    </DataProvider>
  )
}

export default App
