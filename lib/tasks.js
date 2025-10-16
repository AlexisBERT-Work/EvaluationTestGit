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


function toggleTask(id) {
  const task = tasks.find(tache => tache.id === id);
  if (task) {
    task.done = true;
  }
}


function countTaskDone() {
  return tasks.filter(task => task.done).length;
}

module.exports = { getTasks, reset, addTask, countTaskDone, toggleTask };
