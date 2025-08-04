import { Project } from "./projects";
import { defaultProject } from "./projects";
import { Todo } from "./todos";

class User {
    constructor(name) {
        this.name = name;
        this.projects = {};
    }
}

const createsProject = () => ({
    createProject: function(name) {
        this.projects[name] = new Project(name,this.user);
    }
})

const createsTodo = () => ({
    createTodo: function(name, project = defaultProject) {
        const todoObj = new Todo(name);
        project.addTodo(todoObj);
        project.setPriority(todoObj,"normal");
    }
})

Object.assign(User.prototype, createsProject(), createsTodo());