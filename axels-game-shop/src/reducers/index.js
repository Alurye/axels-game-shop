import games from '../components/game_data'


const initialState = {
	gameData: games,
    shoppingCart:[],
    cartClicked: false,
    query: '',
    cartCount:0,
    currentCartItem: {
        title:'',
        console:'',
        quantity:0,
        price:'',
        genre:'',
        img:'',
        description:''
  

	}

}
const reducer = (state = initialState, action) => {
		switch(action.type) {
			case "ADD_TO_CART":
			console.log(state.shoppingCart);
			let newState
			if (state.shoppingCart.includes(action.payload)) {
				newState = {...state}
			} else {
				newState = {...state, shoppingCart: [...state.shoppingCart, action.payload]}
			}
			return newState;

		default: 
			return state;
	}
	
}

export default reducer;