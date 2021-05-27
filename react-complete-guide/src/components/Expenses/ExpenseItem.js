import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {
	/**
	 * This basically makes sure that whenever there is a change in the variable/state(props.title here) the component function is called again
	 * The initialization is done only once.
	 */
	const [title, setTitle] = useState(props.title);

	function clickHandler() {
		//You cannot set it like, title = "Updated!"
		setTitle('Updated!');
		console.log('Clicked');
	}
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date}></ExpenseDate>
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
				<button onClick={clickHandler}> Change Title </button>
			</div>
		</Card>
	);
}

export default ExpenseItem;
