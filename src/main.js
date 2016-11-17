let Vue = require('vue');

var app = new Vue({
    el: '#app',
    data: {
        titleStr: 'You loaded this page on ' + new Date(),
        message : 'reverse message',
        seen : true,
        todos : [
            {text : 'list1'},
            {text : 'list2'},
            {text : 'list3'}
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
        addOne : function () {
            this.todos.push({text : 'list' + (this.todos.length + 1)});
        }
    }
})

var toggleBtn = document.getElementById('toggle');
toggleBtn.onclick = function () {
    app.seen = !app.seen;
}

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data,
  methods : {
    changeA : function() {
        this.a = 2;
    }
  }
})
vm.$data === data // -> true
vm.$el === document.getElementById('example') // -> true
// $watch 是一个实例方法
vm.$watch('a', function (newVal, oldVal) {
  alert("修改了");
})