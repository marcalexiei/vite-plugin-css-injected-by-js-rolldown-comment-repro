import './style.css';

document.body.textContent = 'hello';
import('./lazy.js').then(({ lazy }) => console.log(lazy));
