/* globals process */
import prodStore from './configureStore.prod';
import devStore from './configureStore.dev';

let isProduction = process.env.NODE_ENV === 'production';

export default isProduction ? prodStore : devStore;
