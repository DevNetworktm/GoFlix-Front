import { createStore } from 'redux';
import rootReducer from '../reducers/index.jsx';

const Stores = createStore(rootReducer);

export default Stores;
