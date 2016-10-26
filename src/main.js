let Vue = require('vue');

var app = new Vue({
  el: '#app-1',
  data: {
    message: 'Hello Vue.js!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date(),
    seen : true,
    todos : [
        {text : 'list1'},
        {text : 'list2'},
        {text : 'list3'}
    ]
  }
})

var toggleBtn = document.getElementById('toggle');
toggleBtn.onclick = function () {
    app2.seen = !app2.seen;
}

var addOneBtn = document.getElementById('addOne');
addOneBtn.onclick = function () {
    app2.todos.push({text : 'list' + (app2.todos.length + 1)});
}