<template>
  <div class="container">
    <h1>To-Do App</h1>
    <md-field>
      <md-input 
        v-model="currentTodo" 
        @keydown.enter="addTodo()" 
        placeholder="What do you need to do?">
      </md-input>
    </md-field>

    <div class="todo-list">
      <ul class="todos">
        <li 
          class="todo-item" 
          v-for="todo in todos" 
          :key="todo.id">
          <span>
            <input
              class="completed"
              type="checkbox"
              @change="togglecompleted"
              v-model="todo.completed"
            />

            <span
              v-if="todo.editing === false"
              class="todo-item-label"
              :class="{'is-complete': todo.completed}"
              @dblclick="editTodo(todo)">
            {{ todo.label }}
            </span>
            
            <div v-if="todo.editing">
              <md-field>
                <md-input
                  type="text"
                  v-model="todo.label"
                  @keyup.enter="cancelEdit(todo)"
                  @keyup.esc="cancelEdit(todo)"
                  @focusout="cancelEdit(todo)"
                  placeholder="Edit this to-do">
                </md-input>
              </md-field>
            </div>
          </span>

          <md-button 
            class="md-raised 
            md-ripple:false" 
            @click="editTodo(todo)">
            Edit
          </md-button>

          <md-button 
            class="md-raised md-accent" 
            @click="removeTodo(todo)">
            Delete
          </md-button>

        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      todos: [],
      currentTodo: "",
      editedTodo: ""
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length,
        label: this.currentTodo,
        completed: false,
        editing: false
      });
      this.currentTodo = "";
    },
    togglecompleted() {
      this.todos.completed = !this.todos.completed;
    },
    removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    editTodo(todo) {
      todo.editing = true;
    },
    cancelEdit(todo) {
      todo.editing = false;
    }
  }
};
</script>

<style>
body {
  margin: 5% 10% !important;  
  color: #FEE5ED;
}

.container {
  background-color: #AB083A;
  padding: 2%;
  border-radius: 35px;
}

h1 {
  text-align: center;
  margin-bottom: 50px;
  font-weight: 700;
  letter-spacing: 2px;
}

.is-complete {
  text-decoration: line-through;
  color: #B5B5B5;
}

ul {
  list-style-type: none;
}

.md-field .md-input,
.md-field .md-textarea {
  background-color: whitesmoke !important;
}

.todos .md-raised {
  margin-top: -5px;
  font-size: 12px;
  border-radius: 25px;
}

span.todo-item-label {
  font-size: 18px;
}

.md-button .md-ripple {
  padding: -1px -1px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gainsboro;
}
</style> 