var vm = new Vue({
  el: '#example',
  data: {
    awesome: false,
    ok: true,
    type: '',
    loginType: 'username'
  },
  methods: {
    chooseKey: function (key) {
      this.type = key;
    },
    chooseloginType: function (key) {
      this.loginType = key;
    }
  }
})

