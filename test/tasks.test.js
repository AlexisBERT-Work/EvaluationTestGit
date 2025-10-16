const { getTasks, reset, addTask, countTaskDone } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

test('add tasks', () => {
  const task1 = addTask(1, 'Task 1');
  const task2 = addTask(2, 'Task 2');
  expect(getTasks()).toEqual([task1, task2]);
});

test('count tasks done', () => {
  addTask(1, 'Task 1', true);
  addTask(2, 'Task 2', false);
  addTask(3, 'Task 3', true);
  expect(countTaskDone()).toBe(2);
});