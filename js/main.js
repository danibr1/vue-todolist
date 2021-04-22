/**
 * VUE TODO LIST
 */

const app = new Vue({
    el: '#app',
    data: {
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
        ]
    }
});