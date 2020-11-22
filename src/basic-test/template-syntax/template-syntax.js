new Vue({
  el: '#app',
  data: {
    a: 'create init',

    msg: 'demo',

    rawHtml: `<span style="color:red">This should be red.</span>`,

    dynamicId: 'not mustache bind',
    isButtonDisabled: true,

    number: 2,
    ok: '',
    message: 'wo shi yi tiao huang men ji!',
    id: 'test id',

    seen: true,
    url: 'https://www.baidu.com/',
    attribute_name: 'href',
    event_name: 'focus',
    bar: 'syntax error',
    value: 'test',
    someattr: 'title',

    key: 'href',
    event: 'click',
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  },
  methods: {
    doSomething: function () {
      window.open('https://www.baidu.com/');
    },
    onSubmit: function () {
      window.open('https://www.baidu.com/');
    }
  }
})


// <!-- 这是语句，不是表达式 -->
// {{ var a = 1 }}

// <!-- 流控制也不会生效，请使用三元表达式 -->
// {{ if (ok) { return message } }}
