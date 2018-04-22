import React       from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions/counter';

function Counter(props) {
  return (
    <div className="counter">
      <div>
        <span>{props.count}</span>
      </div>
      <button onClick={props.increment}>increment</button>
    </div>
  );
}

const mapState = (state) => ({
  count: state.counter.count,
});

const mapToDispatch = dispatch => ({
  increment: () => dispatch(increment()),
});

export default connect(mapState, mapToDispatch)(Counter);
