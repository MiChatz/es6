import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { students,total } from './students';
import { add,multiply } from './calculator';
import Entity from './entity';

console.log(students, total);
console.log(add(3,5));
console.log(multiply(3,5));

class Hobbit extends Entity {
	constructor(name, height){
		super(name,height);

	}

	greet(){
		console.log(`Hello! I'm ${this.name} from the Shire!`);
	}
}

let Frodo = new Hobbit("Frodo Baggins",4.5);
Frodo.greet();

class App extends Component{
	render(){
		return(
			<div> React JS and JSX in action!</div>

			)

	}
}

ReactDOM.render(<App/>, document.getElementById('root'));
