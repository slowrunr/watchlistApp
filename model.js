import { v4 as uuidv4 } from "uuid";

// const todosIds = [id1, id2, id3];
// const todosById = {
//   id1: {},
//   id2: {},
// };

export function createTodosModel(todos) {
  return {
    todosIds: [],
    todosById: {},
    createTodo: function ({ title }) {
      const todo = {
        title,
        done: false,
        id: uuidv4(),
      };

      this.todosIds.push(todo.id);
      this.todosById[todo.id] = todo;

      return todo;
    },
    setTodos: function (todos) {
      this.todosIds = [];
      this.todosById = {};

      todos.forEach((todo) => {
        this.todosIds.push(todo.id), (this.todosById[todo.id] = todo);
      });
    },
    // update: function (todos) {
    //   this.todos = todos;
    // },

    getTodos: function () {
      return {
        todosById: this.todosById,
        todosIds: this.todosIds,
      };
    },

    // clear: function () {
    //   this.todos = [];
    // },
    toggleTodo: function (id) {
      this.todosById[id].done = !this.todosById[id].done;
      // this.get().forEach((todo) => {
      //   if (id !== todo.id) {
      //     return;
      //   }

      //   todo.done = !todo.done;

      //   // console.log(todo);
      // });
    },
    getTodo: function (id) {
      return this.todosById[id];
      // let result = null;

      // this.get().forEach((todo) => {
      //   if (id === todo.id) {
      //     result = todo;
      //   }
      // });

      // return result;
    },
  };
}
