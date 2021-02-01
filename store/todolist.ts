import { Priority, Todo } from '~/assets/types';

export const state = () => ({
	todos: [],
	dones: []
});

export const mutations = {
	addNewTodo: (state: any, text: string, priority: Priority, isDone: boolean) => {
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
	addTodo: (state: any, todo: Todo) => {
		state.todos.push(todo);
	},
	addDone: (state: any, done: Todo) => {
		state.dones.push(done);
	},
	removeTodo: (state: any, id: string) => {
		return state.todos.splice(state.todos.findIndex((item: Todo) => item.id === id));
	},
	removeDone: (state: any, id: string) => {
		return state.dones.splice(state.dones.findIndex((item: Todo) => item.id === id));
	},
	setPriority: (state: any, id: string, priority: Priority) => {
		const idx = state.todos.findIndex((item: Todo) => item.id === id);
		state.todos[idx].priority = priority;
	},
	setDoneTrue: ({ state, commit }: {state: any, commit: any}, id: string) => {
		const idx = state.todos.findIndex((item: Todo) => item.id === id);
		state.todos[idx].isDone = true;
		commit('addDone', Object.assign({}, state.todos[idx]));
		commit('removeTodo', state.todos[idx].id);
	},
	setDoneFalse: ({ state, commit }: {state: any, commit: any}, id: string) => {
		const idx = state.dones.findIndex((item: Todo) => item.id === id);
		state.dones[idx].isDone = false;
		commit('addTodo', Object.assign({}, state.dones[idx]));
		commit('removeDone', state.dones[idx].id);
	}
}