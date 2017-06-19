const Vue = require('vue');

var app = new Vue({
    el: '#example',
    data: {
        ok: false,
        loginType: 'username'
    },
    methods: {
        changeOk: function() {
            this.ok = !this.ok;
        },
        changeType: function() {
            this.loginType === 'username' ?
            this.loginType = 'email' :
            this.loginType = 'username'
        }
    }
})