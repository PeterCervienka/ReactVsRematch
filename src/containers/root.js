import React from 'react';
import { Provider } from 'react-redux';
import Counter from '../components/counter';

export default function Root(props) {
  return (
    <Provider store={props.store}>
      <Counter />
    </Provider>
  );
}
