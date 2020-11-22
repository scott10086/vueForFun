
Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})

var vm = new Vue({
  el: '#example',
  data: {
    isActive: true,
    hasError: false,

    classObject: {
      active: true,
      'text-danger': false
    },

    error: null,

    activeClass: 'active',
    errorClass: 'text-danger',

    activeColor: 'red',
    fontSize: 30,

    styleObject: {
      color: 'red',
      fontSize: '13px'
    },
    baseStyles: {
      fontSize: '13px'
    },
    overridingStyles: {
      color: 'blue',
    },
    transFormStyle: {
      transform: 'rotate(-7deg)'
    }
  },
  computed: {
    classObjectMethod: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})

