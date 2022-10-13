class Task {
    constructor() {
        console.log("task instantiated!")
    }

    showId() {
        console.log(23)
    }

    static loadAll() {
        console.log("Loading all tasks...")
    }
}


console.log(typeof Task)
let task = new Task(); // task instantiated!
task.showId(); // 123
Task.loadAll(); // Loading all tasks...