export function addToCart(item) {
	return {
		type: "ADD_TO_CART",
		payload: item
	}
}



export function deleteItem(item) {
	return {
		type: "DELETE_ITEM",
		payload: item
	}
}

// export function cartCount() {
// 	return {
// 		type: "CART_COUNT"
// 	}
// }

// export function updateQuantity(quantity, id){
// 	type: "UPDATE_QUANTITY",
// 	payload:
// }
