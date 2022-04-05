import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
// import cart_reducer from './reducer/cart_reducer';
// import Main from './Pages/Main';
import { Provider } from 'react-redux';
import finalReducer from './FinalReducer/finalReducer';
import MyRoutes from './MyRoutes';
// import game_reducer from './reducer/game_reducer';
// import ourCombinedReducer from './reducer/combinedReducer';

function App() {
  // const myStore = createStore(cart_reducer)
  // const game = createStore(game_reducer)

  // const store = createStore(ourCombinedReducer)

  const store = createStore(finalReducer)

  return (
    // <Provider store={myStore}>
    // <Provider store={game}>
    <Provider store={store}>
      {/* <Main /> */}

      <MyRoutes/>
    </Provider>
  );
}

export default App;
