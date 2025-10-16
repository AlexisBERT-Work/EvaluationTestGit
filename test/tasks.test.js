const { getTasks, reset, addTask, toggleTask } = require('../lib/tasks');

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

test('toggleTask to done', () => {
  const task = addTask(1, 'Task 1', false);
  expect(task.done).toBe(false);
  toggleTask(1);
  expect(task.done).toBe(true);
});