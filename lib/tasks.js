let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}


function reset() {
  tasks = [];
  nextId = 1;
}

function addTask(id, nom, done = false) {
  const task = { id, nom, done};
  tasks.push(task);
  return task;
}

module.exports = { getTasks, reset, addTask };