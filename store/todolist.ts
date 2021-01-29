import { Priority } from '~/assets/types';

export const state = () => ({
	todos: [],
	dones: []
});

export const mutations = {
	addTodo: (state:any, text: String, priority: Priority, isDone: Boolean) => {
		state.todos.push(
			text,
			priority,
			isDone
		);
	}
}