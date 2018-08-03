import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import teamBuilderReducer from './store/reducers/teamBuilder';
import thunk from 'redux-thunk';
import registerReducer from './store/reducers/register'
import authReducer from './store/reducers/auth'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  teamBuilder: teamBuilderReducer,
  register: registerReducer,
  auth: authReducer
})

// const logger = store => {
//   return next => {
//     return action => {
//       console.log('[Middleware] dispatching', action);
//       const result = next(action);
//       console.log('[Middleware] next state', store.getState)
//       return result
//     }
//   }
// }
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
