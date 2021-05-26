import './Card.css';

//We pass className as a prop and children is a builtin prop which hold the 'transformed' data between <Card className = 'expenses'> and </Card>
function Card(props) {
	const classes = 'card ' + props.className;
	return <div className={classes}>{props.children}</div>;
}

export default Card;
