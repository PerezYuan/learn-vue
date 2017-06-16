const Vue = require('vue');

var vm = new Vue({
    el: "#example",
    data: {
        message: 'Hello'
    },
    methods: {
        nowMethod: function() {
            return Date.now();
        },
        changeMsg: function() {
            this.message = 'Hello';
        }
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('');
        },
        now: function() {
            return Date.now();
        }
    }
})

console.log(vm.reversedMessage) // -> 'olleH'
vm.message = 'Goodbye'
console.log(vm.reversedMessage) // -> 'eybdooG'