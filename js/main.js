/**
 * VUE TODO LIST
 */

const app = new Vue({
    el: '#app',
    data: {

        // DEFAUL TODOLIST
        todos: [
            {
                text: 'Chimare avv. Salvini per pratica 1213',
                completed: false,
            },
            {
                text: 'Sollecitare fatture',
                completed: false,
            },
            {
                text: 'Firmare bilancio',
                completed: false,
            },
        ],
        newTodo: '',
    },
    methods: {

        // INSERT A NEW TODO
        addTodo(){
            if(this.newTodo !== ''){

                this.todos.push({
                    text: this.newTodo,
                    completed: false,
                });

                this.newTodo = '';
                this.$refs.todoInput.focus();
            }
        },

         // REMOVE TODO
        removeTodo(index) {
            this.todos.splice(index, 1);
        },

        // UPDATE TODOS
        updateStatus(index) {
            this.todos[index].completed = ! this.todos[index],
            completed;
        }
    }
});