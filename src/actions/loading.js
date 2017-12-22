import * as types from 'constants/types.js';

const loading = () => ({
  type: types.app.LOADING,
});

const loaded = () => ({
  type: types.app.LOADED,
});

export { loading, loaded };
