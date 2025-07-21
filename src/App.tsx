import { Provider } from "react-redux"
import Rootlayout from "./pages/root-layout"
import store from "./store"
import { ThemeProvider } from "./shared/theme/provider"

function App() {

  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <Rootlayout />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
