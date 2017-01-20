import {
  GET_GOALS,
  ADD_GOAL,
  UPDATE_MONEY,
  UPDATE_COUNTDOWN
} from "../constants"

const defaultState = {goals: []};
export default function(state = defaultState, action) {
  switch(action.type) {
    case GET_GOALS:
      if(action.status == 'received')
        return Object.assign({}, state, {goals: action.goals});
      return state;
      break;
    case ADD_GOAL:``
      if(action.status == 'received')
        return state;  // TODO ANYTHING ELSE HERE?
      return state;
    case UPDATE_MONEY:
      return Object.assign({}, state, {
        moneyOnLine: action.money
      })
    case UPDATE_COUNTDOWN:
      var result = Object.assign({}, state);
      result.goals.forEach(function(goal) {
        var countdownDate = goal.deadline - Date.now();
        var oldPastDue = goal.pastDue
        goal.pastDue = (countdownDate < 0);
        var countdownString = `${Math.floor(countdownDate/1000/60)}m ${Math.floor(countdownDate%(1000*60)/1000)}s`;
        goal.countdownString = countdownString;
      })
      return result;
    default: return state;
  }
}
