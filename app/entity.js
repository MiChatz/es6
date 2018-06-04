
class Entity {
	constructor(name, height){
		this.name = name;
		this.height =height;
	}

	greet(){
		console.log(`Hi! I Am ${this.name} from middle earth!`);
	}
}

export default Entity;