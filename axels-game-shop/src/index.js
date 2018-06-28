import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import games from './components/game_data'
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';



// const action = {
// 	type: "ADD_ITEM",
// 	payload: 'text'
// }

// const action2 = {
// 	type: "DELETE_ITEM",
// 	payload: 'text'
// }
// 
const store = createStore(reducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
