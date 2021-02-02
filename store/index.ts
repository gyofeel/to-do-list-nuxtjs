import { getAccessorType } from 'typed-vuex';
import * as todolist from '~/store/todolist';

export const state = () => ({
  userName: 'User'
});

export const indexAccessor = getAccessorType({
  state
})

export const todolistAccessor = getAccessorType({
  modules: {
    todolist,
  },
})
