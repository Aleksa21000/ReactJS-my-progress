import React, { useContext } from "react";

import classes from './MealsItem.module.css';
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../../store/cart-context";

const MealsItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.mealPrice.toFixed(2)}`;
    
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.mealName,
            amount: amount,
            price: props.mealPrice
        });
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.mealName}</h3>
                <div className={classes.description}>{props.mealText}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealsItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
}

export default MealsItem;