import { createStore,applyMiddleware } from 'redux';
import reducer from './reducers'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {getGoals, addGoal, updateMoneyOnLine, updateCountdowns} from './actions/goals';
import {signup, login} from './actions/user';
import 'whatwg-fetch';
import {BASE_SERVER_URL} from './constants';

// Centralized application state
// For more information visit http://redux.js.org/
const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const logger = createLogger();
  middlewares.push(logger);
}


const store = createStore(reducer,applyMiddleware(...middlewares));

fetch(`${BASE_SERVER_URL}/delete_all_goals`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  })
}).then(()=>{
  store.dispatch(addGoal({title: 'Impress the Judges' , description: 'Maybe win something at the hackathon???', deadline: Date.now()+1000*60*4, money: 1.00}));
})

export default store;
