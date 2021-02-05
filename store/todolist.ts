import { Priority, Todo } from '~/assets/types';

export const state = () => ({
	todos: []
});

export const mutations = {
	addTodo: (state: any, { text, priority, isDone }) => {
		const Todo: Todo = {
			id: `${text}-${Date.now()}`,
			date: new Date(),
			text,
			priority,
			isDone
		};
		state.todos.push(Todo);

		return Todo;
	},
	removeTodo: (state: any, id: string) => {
		const idx = state.todos.findIndex((item: Todo) => item.id === id);
		if (idx < 0) {
			return;
		}
		console.log(idx);
		return state.todos.splice(idx, 1);
	},
	setPriority: (state: any, { id, priority }: {id: string, priority: boolean}) => {
		const idx = state.todos.findIndex((item: Todo) => item.id === id);
		state.todos[idx].priority = priority;
	},
	setDone: (state: any, { id, done }: {id: string, done: boolean}) => {
		const idx = state.todos.findIndex((item: Todo) => item.id === id);
		state.todos[idx].isDone = done;
	}
}