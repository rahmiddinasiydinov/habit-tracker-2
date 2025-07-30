import { Provider } from "react-redux"
import RootLayout from "./pages/root-layout"
import store from "./store"
import { ThemeProvider } from "./shared/theme/provider"

function App() {

  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <RootLayout />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
