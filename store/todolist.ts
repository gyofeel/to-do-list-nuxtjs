import { Priority, Todo } from '~/assets/types';

export const state = () => ({
	todos: []
});

export const mutations = {
	addTodo: (state: any, text: string, priority: Priority, isDone: boolean) => {
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
		return state.todos.splice(state.todos.findIndex((item: Todo) => item.id === id));
	},
	setPriority: (state: any, id: string, priority: Priority) => {
		const idx = state.todos.findIndex((item: Todo) => item.id === id);
		state.todos[idx].priority = priority;
	},
	setDone: (state: any, id: string, done: boolean) => {
		const idx = state.todos.findIndex((item: Todo) => item.id === id);
		state.todos[idx].isDone = done;
	}
}