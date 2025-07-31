import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import RootLayout from "./pages/root-layout"
import { persistor, store } from "./store"
import { ThemeProvider } from "./shared/theme/provider"

function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <ThemeProvider>
            <RootLayout />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
