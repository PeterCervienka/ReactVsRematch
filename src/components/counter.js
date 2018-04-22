import React       from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counter';

function Counter(props) {
  return (
    <div className="counter">
      <div>
        <span>{props.count}</span>
      </div>
      <button onClick={props.increment}>++</button>
      <button onClick={props.decrement}>--</button>
    </div>
  );
}

const mapState = (state) => ({
  count: state.counter.count,
});

const mapToDispatch = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(mapState, mapToDispatch)(Counter);
