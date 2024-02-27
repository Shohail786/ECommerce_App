import { Provider } from "react-redux";
import MainContainer from "./src/MainContainer.js";
import store from "./src/redux/store/Store.js";

function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}

export default App;
