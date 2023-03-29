import React, { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
	const [btnIsHighlighted, setBtnIsHightlighted] = useState(false);
	const cartCtx = useContext(CartContext);

	const {items} = cartCtx

	const numberOfCartItems = items.reduce((curNum, item) => {
		return curNum + item.amount;
	}, 0);

	const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

	useEffect(() => {
		if(items.length === 0) return;
		
		setBtnIsHightlighted(true);

		const timer = setTimeout(() => {
			setBtnIsHightlighted(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		}
	}, [items]);

	return (
		<button onClick={props.onBtnClick} className={btnClasses}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
