const { getTasks, reset } = require('../lib/tasks');

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