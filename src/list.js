const Vue = require('vue');

var app = new Vue({
    el: '#example',
    data: {
        // 享有对父级作用域的访问权限
        Parent: 'Parent String',
        arr: [
            {
                id: 15,
                text: 'I want to learn vue'
            },
            {
                id: 16,
                text: 'Fighting!'
            }
        ],
        // Object.keys()获取的key值
        forObj: {
            firstName: 'Perez',
            lastName: 'Yuan',
            age: 24
        }
    }
})

Vue.component('todo-item', {
    template: `
        <li>
        {{ title }}
        <button v-on:click="$emit('remove')">X</button>
        </li>
    `,
    props: ['title']
})
var app2 = new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            'Do the dishes',
            'Take out the trash',
            'Mow the lawn'
        ]
    },
    methods: {
        addNewTodo: function () {
            debugger;
            this.todos.push(this.newTodoText);
            this.newTodoText = '';
        }
    }
})