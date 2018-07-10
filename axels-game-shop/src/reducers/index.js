const initialState = {
		gameData: [],
		inventory: [],
    shoppingCart:[],
    cartClicked: false,
		gameFormClicked: false,
		gameDetailsClicked:false,
		loggedIn:false,
		orderNumber:'',
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
			case "GET_GAMES":
		  	return { ...state, gameData: action.payload }

			case "GET_INVENTORY":
			console.log('hit');
				return {...state, inventory: action.payload}

			case "ADD_TO_CART":

				return {...state, shoppingCart: [...state.shoppingCart, action.payload], currentCartItem: action.payload}



			case "SHOW_GAME_DETAILS":
				return {...state, gameDetailsClicked: !state.gameDetailsClicked, currentCartItem: action.payload}

			case "SAVE_ORDER_NUMBER":
				return {...state, orderNumber: action.payload }


			case "LOGIN":
				return {...state, loggedIn: !state.loggedIn}

			case "DELETE_ITEM":
				let filteredCart = state.shoppingCart.filter((itm) => {
					return itm.id !== action.payload.id
				});
				return {...state, shoppingCart: filteredCart};

			case "HANDLE_QUANTITY":
				 let updatedGameData = state.gameData.map((game) => {
					 if (game.id === action.payload.id) {
						 return {
							 ...game,
							 quantity: action.qty
						 }
					 }
					 return game;
				 })

				 return {...state, gameData: updatedGameData};

			default:
				return state;
	}

}

export default reducer;
