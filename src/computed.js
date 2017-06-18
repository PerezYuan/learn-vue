const Vue = require('vue');

var vm = new Vue({
    el: "#example",
    data: {
        message: 'Hello',
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar',
        arr1: 1,
        arr2: 2,
        arr3: 3,
        arr: '1 2 3'
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
        arr: {
            get: function() {
                return this.arr1 + ' ' + this.arr2 + ' ' + this.arr3;
            },
            set: function(newVal) {
                var str = newVal.split(' ');
                this.arr1 = str[0];
                this.arr2 = str[1];
                this.arr3 = str[2];
            }
        }
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

document.getElementById('click').onclick = function() {
    vm.arr = '5 6 7';
}