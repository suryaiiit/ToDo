import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    todos: [],
    title: null
  },
  actions: {
    saveToDo(context, todo) {
      todo.done = false;
      context.commit('saveTodo', todo);
    }
  },
  
  mutations: {
    saveTodo: (state, todo) =>{
      if(!state.todos) { state.todos = []; }
      //Create another Mutation for the above line
      state.todos.push(todo);
    state.title = ""; //For this also - another Mutation ... only one change in one mutation
    localStorage.setItem("todos", JSON.stringify(this.todos));
  },
  completeTask: (state, index)=> {
    state.todos[index].done = true;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  },
    deleteTodoby: (state, index)=>{
      state.todos.splice(index,1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    completeTodo: state=>{
        state.$emit("completeTask");
    },
      deleteTodo: state=>
      {
        state.$emit("deleteTodo");
      }
}
})
