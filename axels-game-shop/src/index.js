import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import games from './components/game_data'
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/index';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


// const action = {
// 	type: "ADD_ITEM",
// 	payload: 'text'
// }

// const action2 = {
// 	type: "DELETE_ITEM",
// 	payload: 'text'
// }
//
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleware(reducer)
// const store = createStore(reducer, applyMiddleware(thunk));
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
