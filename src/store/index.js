import { init } from "@rematch/core";

import counter from '../models/counter';

export const store = init({
  models: {counter},
});

