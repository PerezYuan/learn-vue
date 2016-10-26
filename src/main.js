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