import { Todo } from "./todos";

class Project {
	constructor(name) {
		this.name = name;
		this.todos = {};
		console.log(`${name} Project Created`);
	}
	addTodo(todo) {
		this.todos[todo.name]=todo;
		console.log(`${todo.name} is added to the "${this.name}" Project`);
	}
}

const deleter = () => ({
	delete: function (todo) {
		console.log(this.todos[todo.name]);
		console.log(`${todo.name} is deleted from the "${this.name}" Project`);
	}
})

const changer = () => ({
	change: (todo, dest) => {
		this.delete(todo);
		dest.addTodo(todo);
	}
})

const completer = () => ({
	complete: (todo) => {
		todo.checkList = true;
	}
})

const canPrint = () => ({
	print: function(item) {
		console.log(this[item]);
	}
})

Object.assign(Project.prototype, deleter(), changer(), completer(), canPrint());


const defaultProject = new Project("default");
const project1 = new Project("project1");

const todo1 = new Todo({name:"sumanth"});

defaultProject.addTodo(todo1);
console.log(defaultProject.todos)

defaultProject.delete(todo1);
defaultProject.print("todos");
console.log(Project.prototype, typeof Project.prototype.delete, typeof Project.prototype.change);
defaultProject.print("todos");