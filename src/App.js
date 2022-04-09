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
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react';


function App() {
  // const myStore = createStore(cart_reducer)
  // const game = createStore(game_reducer)
  // const store = createStore(ourCombinedReducer)
  const persistConfig = {
    key: 'root',
    storage,
  }

  const our_persistedReducer = persistReducer(persistConfig, finalReducer)
  const our_store = createStore(our_persistedReducer)
  let our_persistor = persistStore(our_store)

  return (
    // <Provider store={myStore}>
    // <Provider store={game}>
    <Provider store={our_store}>
      {/* <Main /> */}
      <PersistGate persistor={our_persistor}>
        <MyRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
