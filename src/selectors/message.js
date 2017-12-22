import { createSelector } from 'reselect';

const NAME = 'message';

const getAll = (state) => state[NAME];

const getMessage = createSelector(
  getAll,
  (message) => {
    return message;
  }
);

export { getMessage };
