import React, { useEffect, useState } from 'react';

import classes from './AvailableMeals.module.css';
import Card from '../../UI/Card/Card';
import MealsItem from '../MealsItem/MealsItem';

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState();

	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch('https://react-http-practice-887d5-default-rtdb.firebaseio.com/meals.json');

			if (!response.ok) {
				throw new Error('Something went wrong');
			}

			const responseData = await response.json();
			const loadedMeals = [];

			for (const key in responseData) {
				loadedMeals.push({
					id: key,
					...responseData[key],
				});
			}

			setMeals(loadedMeals);
			setIsLoading(false);
		};

		fetchMeals().catch((error) => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, []);

	if (isLoading) {
		return (
			<section className={classes.MealsLoading}>
				<p>Loading...</p>
			</section>
		);
	}

	if (httpError) {
		return (
			<section className={classes.MealsError}>
				<p>{httpError}</p>
			</section>
		);
	}

	const mealsList = meals.map((meal) => (
		<MealsItem
			key={meal.id}
			id={meal.id}
			mealName={meal.name}
			mealText={meal.description}
			mealPrice={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
