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
            {{ name }}
            <button v-on:click="$emit('remove')">X</button>
        </li>
    `,
    props: ['name']
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
// 当你利用索引直接设置一个项时,不会检测到
app2.todos[3] = 'asadada';
// Vue.set(app2.todos, 3, asadada); app2.todos.splice(3, 1, 'asadada')
// 修改数组长度，不会检测到
app2.todos.length = 10;
// app2.todos.splice(10)