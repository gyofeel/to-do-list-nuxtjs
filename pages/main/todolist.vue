<template>
<div class="to-do-list-page">
    <h2 class="title">To Do List</h2>
    <!-- <h3>Hi, {{name}}</h3> -->
    <List 
      class="todos"
      :title="'To Do'"
      :list="todos"
    >
      <template #item="{ index, item }">
        <TodoItem 
          :index="index"
          :item="item"
          @bedone="onClickTodoDone"
          @delete="onClickTodoDelete"
        />
      </template>
    </List>
    <List 
      class="dones"
      :title="'Done'"
      :list="dones"
    >
      <template #item="{ index, item }">
        <TodoItem 
          :index="index" 
          :item="item" 
          @bedone="onClickTodoDone"
          @delete="onClickTodoDelete"
        />
      </template>
    </List>
    <Input @click="onClickAdd" />
</div>
</template>

<script lang="ts">
import { Todo } from '../../assets/types';

// import List from '../../components/List.vue';
// import TodoItem from '../../components/Todo.vue';
// import Input from '~components/Input.vue';

export default {
  asyncData({ app: { $accessor } }: any) {
      return {
          name: $accessor.userName
      }
  },
  computed: {
      $todolist() {
        return this.$accessor.todolist;
      },
      todos(): Todo[] {
        return this.$todolist.todos.filter((el:Todo) => !el.isDone);
      },
      dones(): Todo[] {
        return this.$todolist.todos.filter((el:Todo) => el.isDone);
      }
  },
  methods: {
    onClickAdd(e) {
      console.log(e.text);
      const { text, priority } = e;
      this.$todolist.addTodo({ 
        text: text, 
        priority: priority,
        isDone: false
      });
    },
    onClickTodoDone(e: any) {
      const { id, done } = e;
      this.$todolist.setDone({ id, done });
    },
    onClickTodoDelete(e: any) {
      this.$todolist.removeTodo(e.id);
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: bold;
}
</style>