import thunk from 'redux-thunk';
import { init } from "@rematch/core";

import { reducers } from '../reducers';

export const store = init({
  redux: {
    reducers: reducers,
    middlewares: [thunk]
  },
});

