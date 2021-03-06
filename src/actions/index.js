export function addToCart(item, q) {
	return {
		type: "ADD_TO_CART",
		payload: item,
		qty: q
	}
}

export function totalCartItems() {
	return {
		type: "TOTAL_CART_ITEMS",
		payload: null
	}
}

export function cartTotal() {
	return {
		type: "CART_TOTAL",
		payload: null
	}
}
export function refreshCart(item) {
	return {
		type: "REFRESH_CART",
		payload: item
	}
}

export function clearCart(){
	return {
		type: "CLEAR_CART",
		payload: []
	}
}

export function clearCartCount(){
	return {
		type: "CLEAR_CART_COUNT",
		payload: 0
	}
}

export function clearCartAmount(){
	return {
		type: "CLEAR_CART_AMOUNT",
		payload: 0
	}
}
export function showGameDetails(game) {
	return {
		type: "SHOW_GAME_DETAILS",
		payload: game
	}
}

export function deleteItem(item) {
	return {
		type: "DELETE_ITEM",
		payload: item
	}
}

export function handleQuantity(item) {
	return {
		type: "HANDLE_QUANTITY",
		payload: item
	}
}

export function resetCurrentCartItem() {
	return {
		type: "RESET_CURRENT_CART_ITEM",
		payload: null
	}
}

export function log_In(state) {
	return {
		type: "LOGIN",
		payload: state,
	}
}

export function saveOrderNumber(num) {
	return {
		type: "SAVE_ORDER_NUMBER",
		payload: num
	}
}

export function getInventory() {
	let url = `http://localhost:3000/api/v1/admin/${localStorage.getItem("id")}/games`

	return(dispatch, getState) => {
			 fetch(url, {
			headers: {
				'content-type': 'application/json',
				'authorization': localStorage.getItem("token")
			},
		}).then(res => res.json())
		.then(json => {
			console.log(json)
			dispatch({type: "GET_INVENTORY", payload:json});

		});

	}


}

export function getOrders() {
	const url = `http://localhost:3000/api/v1/admin/${localStorage.getItem("id")}/orders`

	return (dispatch, getState) => {
		fetch(url,{
	 headers: {
		 'content-type': 'application/json',
		 'authorization': localStorage.getItem("token")
	 }
 }).then(res => res.json())
	 .then(json => {
		 console.log(json)
			dispatch({type: "GET_ORDERS", payload: json});
		});
	}

}

export function getGames() {
	let url = 'http://localhost:3000/api/v1/games';

	return(dispatch, getState) => {
			 fetch(url, {
			headers: {
				'content-type': 'application/json',
				'authorization': localStorage.getItem("token")
			},
		}).then(res => res.json())
		.then(json => {
			dispatch({type: "GET_GAMES", payload:json});

		});

	}


}

export function deleteGame(id) {
	let url = `http://localhost:3000/api/v1/games/${id}`;

	return(dispatch, getState) => {
			 fetch(url, {
			method: "DELETE",
			headers: {
				'content-type': 'application/json',
				'authorization': localStorage.getItem("token")
			},
		}).then(res => res.json())
		.then(json => {
			dispatch({type: "DELETE_GAME", payload:id});

		});

	}

}
