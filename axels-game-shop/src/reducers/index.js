import games from '../components/game_data'


const initialState = {
	gameData: games,
    shoppingCart:[],
    cartClicked: false,
		gameFormClicked: false,
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
			let newState
			if (state.shoppingCart.includes(action.payload)) {
				newState = {...state}
			} else {
				let totalCartItems = 0;
					console.log('hit', totalCartItems, action.type);
						 	state.shoppingCart.map((item) => {

								return console.log(totalCartItems+=item.quantity)
								console.log(totalCartItems)
					});

				newState = {...state, shoppingCart: [...state.shoppingCart, action.payload], cartCount: totalCartItems}
			}
			console.log('hit',newState);

			return newState;

			case "DISPLAY_FORM":
			return {...state, gameFormClicked: !state.gameFormClicked, cartClicked: false};

			case "DISPLAY_CART":
			return {...state, cartClicked: !state.cartClicked, gameFormClicked: false};

			case "DELETE_ITEM":
			let filteredCart = state.shoppingCart.filter((itm) => {
				return itm.id !== action.payload.id
			});
			return {...state, shoppingCart: filteredCart};



			default:
			return state;
	}

}

export default reducer;
