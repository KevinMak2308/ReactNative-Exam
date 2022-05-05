import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import Navigation from './components/Navigation';
import chatReducer from './store/reducers/chat.reducer';
import eventReducer from './store/reducers/event.reducer';
import nameReducer from './store/reducers/name.reducer';
import userReducer from './store/reducers/user.reducer';


const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer,
  name: nameReducer,
  event: eventReducer,

  // posts: PostReducer
});
export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
// const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

