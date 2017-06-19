const Vue = require('vue');

var vm = new Vue({
    el: "#example",
    data: {
        isActive: true,
        hasError: true,
        classObject: {
            active: true,
            'text-danger': false
        },
        styleObject: {
            transition: '1s',
            transform: 'translateX(100px)',
            'color': 'red'
        }
    },
    computed: {
        computedObj: function() {
            return {
                active: this.isActive && false,
                'text-danger': true
            }
        }
    }
})