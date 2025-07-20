import { Provider } from "react-redux"
import Rootlayout from "./pages/root-layout"
import store from "./store"


function App() {

  return (
    <>
    <Provider store={store}>
      <Rootlayout />
    </Provider>
    </>
  )
}

export default App
