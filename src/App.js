import Header from "./Components/Header";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";
import { StylesProvider } from "@material-ui/core/styles";
import Main from "./Components/Main";
import styled from "styled-components";

export let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {


  return (
    <AppContainer className="App">
      {/* Provide access to the redux store through entire application */}
      <Provider store={store}>
      {/* Styles Provider for modifying Material-UI default styles with StyledComponents  */}
        <StylesProvider injectFirst>
          <Header />
          <Main />
        </StylesProvider>
      </Provider>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: #e0f2f1;
  min-height: 100vh;
`
