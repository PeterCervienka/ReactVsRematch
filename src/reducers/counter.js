import * as Actions from '../actions/counter';

const defaultState = {
  count: 0,
};

export default function counter(state = defaultState, action) {
  switch (action.type) {
    case Actions.INCREMENT:
      return { count: state.count + 1 };

    case Actions.DECREMENT:
      return { count: state.count - 1 };

    default:
      return state;
  }
}
