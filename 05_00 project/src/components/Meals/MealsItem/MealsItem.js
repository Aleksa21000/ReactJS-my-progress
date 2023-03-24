import React from "react";

import classes from './MealsItem.module.css';
import MealsItemForm from "./MealsItemForm";

const MealsItem = (props) => {
    const price = `$${props.mealPrice.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.mealName}</h3>
                <div className={classes.description}>{props.mealText}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealsItemForm />
            </div>
        </li>
    );
}

export default MealsItem;