var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})


var example3 = new Vue({
  el: '#example-3',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})

new Vue({
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    },

    numbers: [1, 2, 3, 4, 5],


    sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]],

    items: [
      { msg: '提示信息', id: 6 },
      { msg: '提示信息2', id: 8 },
    ],

    todos: [
      { todo: '信息', isComplete: true },
      { todo: '信息2', isComplete: false },
      { todo: '信息3', isComplete: false },
    ],

    todos1: []
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})

Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})


// Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：

// push()
// pop()
// shift()
// unshift()
// splice()
// sort()
// reverse()

// example1.items.push({ message: 'Baz' })


// 变更方法，顾名思义，会变更调用了这些方法的原始数组。相比之下，也有非变更方法，例如 filter()、concat() 和 slice()。它们不会变更原始数组，而总是返回一个新数组。当使用非变更方法时，可以用新数组替换旧数组

// example1.items = example1.items.filter(function (item) {
//   return item.message.match(/Foo/)
// })

// 你可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表。幸运的是，事实并非如此。Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。

// 由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。深入响应式原理中有相关的讨论。
