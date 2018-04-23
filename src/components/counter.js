import React       from 'react';
import { connect } from 'react-redux';

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
  count: state.counter,
});

const mapToDispatch = dispatch => ({
  increment: () => dispatch.counter.increment(1),
  decrement: () => dispatch.counter.decrement(1),
});

export default connect(mapState, mapToDispatch)(Counter);
