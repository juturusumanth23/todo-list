import { Todo } from "./todos";
export { Project };

class Project {
  constructor(name, user = "Default") {
    this.name = name;
    this.todos = {};
    this.user = user;
    this.priorities = {
      veryImportant: [],
      important: [],
      normal: [],
    };
    console.log(`${name} Project Created by the ${user} User`);
  }
  addTodo(todo) {
    this.todos[todo.name] = todo;
    console.log(`${todo.name} is added to the "${this.name}" Project`);
  }
}

const deletes = () => ({
  delete: function (todo) {
    console.log(this.todos[todo.name]);
    console.log(`${todo.name} is deleted from the "${this.name}" Project`);
  },
});

const changes = () => ({
  change: (todo, dest) => {
    this.delete(todo);
    dest.addTodo(todo);
  },
});

const completes = () => ({
  complete: (todo) => {
    todo.checkList = true;
  },
});

const prints = () => ({
  print: function (item) {
    console.log(this[item]);
  },
});

const setsPriority = () => ({
  setPriority: function (item, priority) {
    this.priority[priority].push(item);
  },
});

Object.assign(
  Project.prototype,
  deletes(),
  changes(),
  completes(),
  prints(),
  setsPriority(),
);

export const defaultProject = new Project("default");

const todo1 = new Todo("sumanth");

defaultProject.print("todos");
defaultProject.addTodo(todo1);
defaultProject.print("todos");

defaultProject.delete(todo1);
defaultProject.print("todos");
console.log(
  Project.prototype,
  typeof Project.prototype.delete,
  typeof Project.prototype.change,
);
defaultProject.print("priorities");
