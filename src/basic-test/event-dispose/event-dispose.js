var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})

var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

// 也可以用 JavaScript 直接调用方法
// example2.greet() // => 'Hello Vue.js!'


new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    },
    warn: function (message, event) {
      // 现在我们可以访问原生事件对象
      if (event) {
        event.preventDefault()
      }
      alert(message)
    }
  }
})

// 在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

// 为了解决这个问题，Vue.js 为 v-on 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。

// .stop
// .prevent
// .capture
// .self
// .once
// .passive

// 为了在必要的情况下支持旧浏览器，Vue 提供了绝大多数常用的按键码的别名：

// keyCode 的事件用法已经被废弃了并可能不会被最新的浏览器支持。

// 使用 keyCode attribute 也是允许的：

// <input v-on:keyup.13="submit">

// .enter
// .tab
// .delete (捕获“删除”和“退格”键)
// .esc
// .space
// .up
// .down
// .left
// .right

// 你还可以通过全局 config.keyCodes 对象自定义按键修饰符别名：

// 可以使用 `v-on:keyup.f1`
// Vue.config.keyCodes.f1 = 112

// 可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。

// .ctrl
// .alt
// .shift
// .meta
// 注意：在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)。在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品，比如 Knight 键盘、space-cadet 键盘，meta 被标记为“META”。在 Symbolics 键盘上，meta 被标记为“META”或者“Meta”。

// .exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。

// .left
// .right
// .middle
// 这些修饰符会限制处理函数仅响应特定的鼠标按钮。


// 为什么在 HTML 中监听事件？
// 你可能注意到这种事件监听的方式违背了关注点分离 (separation of concern) 这个长期以来的优良传统。但不必担心，因为所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图的 ViewModel 上，它不会导致任何维护上的困难。实际上，使用 v-on 有几个好处：

// 扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法。

// 因为你无须在 JavaScript 里手动绑定事件，你的 ViewModel 代码可以是非常纯粹的逻辑，和 DOM 完全解耦，更易于测试。

// 当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除。你无须担心如何清理它们。
