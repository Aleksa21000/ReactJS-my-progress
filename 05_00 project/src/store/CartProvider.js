import React, { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

		// Check if item in cart items array contains new added item & findind his index if true
		const existingCartItemIndex = state.items.findIndex((item) => {
			return item.id === action.item.id;
		});

		// Accessing existing cart item
		const existingCartItem = state.items[existingCartItemIndex];
		let updatedItems;

		/* If item exist in old array: setting new amount for duplicate & 
        creating new array with old items + rewrite existing item to new updated item;
        else adding new item to array of old items */
		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: (existingCartItem.amount += action.item.amount),
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItem] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	if (action.type === 'REMOVE') {
		// Check if item in cart items array contains new added item & findind his index if true
		const existingCartItemIndex = state.items.findIndex((item) => {
			return item.id === action.id;
		});

		// Accessing existing cart item
		const existingCartItem = state.items[existingCartItemIndex];
		// Updating total amount
		const updatedTotalAmount = state.totalAmount - existingCartItem.price;
		let updatedItems;

		/* If existing cart item has amount 1 we removing it (filter method)
        else we create new updated item with new amount & rewrite old item with new created
        if that item exists in old array */
		if (existingCartItem.amount === 1) {
			updatedItems = state.items.filter((item) => {
				return item.id !== action.id;
			});
		} else {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount--,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItem] = updatedItem;
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	if (action.type === 'CLEAR') {
		return defaultCartState;
	}

	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({
			type: 'ADD',
			item: item,
		});
	};

	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({
			type: 'REMOVE',
			id: id,
		});
	};

	const clearCartHandler = () => {
		dispatchCartAction({ type: 'CLEAR' });
	};

	const cartContextValue = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
		clearCart: clearCartHandler,
	};

	return <CartContext.Provider value={cartContextValue}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
