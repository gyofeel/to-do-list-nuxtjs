import { getAccessorType } from 'typed-vuex';
import * as todolist from '~/store/todolist';

export const state = () => ({
  userName: 'Gyopil'
});

export const indexAccessor = getAccessorType({
  state
})

export const todolistAccessor = getAccessorType({
  modules: {
    todolist,
  },
})
