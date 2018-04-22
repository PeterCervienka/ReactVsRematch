import React from 'react';
import { connect } from 'react-redux';

function Application(props) {
  return (
    <div className="application">
      {props.children}
    </div>
  );
}

export default connect(state => state)(Application);
