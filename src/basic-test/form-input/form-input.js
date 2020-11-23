var example1 = new Vue({
  el: '#example-1',
  data: {
    message: '',
    message1: '',
    checked: '',
    checkedNames: [],
  }
})

// v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：

// text 和 textarea 元素使用 value property 和 input 事件；
// checkbox 和 radio 使用 checked property 和 change 事件；
// select 字段将 value 作为 prop 并将 change 作为事件。
// 对于需要使用输入法 (如中文、日文、韩文等) 的语言，你会发现 v-model 不会在输入法组合文字过程中得到更新。如果你也想处理这个过程，请使用 input 事件。

new Vue({
  el: '#example-4',
  data: {
    picked: ''
  }
})

new Vue({
  el: '#example-5',
  data: {
    selected: ''
  }
})

new Vue({
  el: '#example-6',
  data: {
    selected: []
  }
})

new Vue({
  el: '#example-7',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
