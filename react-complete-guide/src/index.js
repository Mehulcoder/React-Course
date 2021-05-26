import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// This is executed at first
// It renders the first arg, between the second arg
// The angle brackets are used for components, it will make the first arg replaced by the transformed browser friendly code (The one returned by App)
console.log(<App></App>);
ReactDOM.render(<App />, document.getElementById('root'));
