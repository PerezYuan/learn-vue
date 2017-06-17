const Vue = require('vue');

var vm = new Vue({
    el: "#example",
    data: {
        message: 'Hello',
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
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
        },
        // computed计算fullName
        // fullName: function() {
        //     return this.firstName + ' ' + this.lastName;
        // }
    },
    // 利用watch来监听，代码重复不建议使用
    watch: {
        firstName: function(val) {
            this.fullName = val + ' ' + this.lastName;
        },
        lastName: function(val) {
            this.fullName = this.firstName + ' ' + val;
        }
    }
})

console.log(vm.reversedMessage) // -> 'olleH'
vm.message = 'Goodbye'
console.log(vm.reversedMessage) // -> 'eybdooG'