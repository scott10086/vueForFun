非 Prop 的 Attribute
一个非 prop 的 attribute 是指传向一个组件，但是该组件并没有相应 prop 定义的 attribute。

因为显式定义的 prop 适用于向一个子组件传入信息，然而组件库的作者并不总能预见组件会被用于怎样的场景。这也是为什么组件可以接受任意的 attribute，而这些 attribute 会被添加到这个组件的根元素上。

例如，想象一下你通过一个 Bootstrap 插件使用了一个第三方的 <bootstrap-date-input> 组件，这个插件需要在其 <input> 上用到一个 data-date-picker attribute。我们可以将这个 attribute 添加到你的组件实例上：

<bootstrap-date-input data-date-picker="activated"></bootstrap-date-input>
然后这个 data-date-picker="activated" attribute 就会自动添加到 <bootstrap-date-input> 的根元素上。

对于绝大多数 attribute 来说，从外部提供给组件的值会替换掉组件内部设置好的值。所以如果传入 type="text" 就会替换掉 type="date" 并把它破坏！庆幸的是，class 和 style attribute 会稍微智能一些，即两边的值会被合并起来，从而得到最终的值：form-control date-picker-theme-dark。

禁用 Attribute 继承
如果你不希望组件的根元素继承 attribute，你可以在组件的选项中设置 inheritAttrs: false。例如：

Vue.component('my-component', {
inheritAttrs: false,
// ...
})
这尤其适合配合实例的 \$attrs property 使用，该 property 包含了传递给一个组件的 attribute 名和 attribute 值，例如：

{
required: true,
placeholder: 'Enter your username'
}
有了 inheritAttrs: false 和 \$attrs，你就可以手动决定这些 attribute 会被赋予哪个元素。在撰写基础组件的时候是常会用到的：

Vue.component('base-input', {
inheritAttrs: false,
props: ['label', 'value'],
template: `<label> {{ label }} <input v-bind="$attrs" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" > </label>`
})
注意 inheritAttrs: false 选项不会影响 style 和 class 的绑定。

这个模式允许你在使用基础组件的时候更像是使用原始的 HTML 元素，而不会担心哪个元素是真正的根元素：

<base-input
v-model="username"
required
placeholder="Enter your username"

> </base-input>

将原生事件绑定到组件
你可能有很多次想要在一个组件的根元素上直接监听一个原生事件。这时，你可以使用 v-on 的 .native 修饰符：

<base-input v-on:focus.native="onFocus"></base-input>
在有的时候这是很有用的，不过在你尝试监听一个类似 <input> 的非常特定的元素时，这并不是个好主意。比如上述 <base-input> 组件可能做了如下重构，所以根元素实际上是一个 <label> 元素：

<label>
  {{ label }}
  <input
    v-bind="$attrs"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  >
</label>
这时，父级的 .native 监听器将静默失败。它不会产生任何报错，但是 onFocus 处理函数不会如你预期地被调用。

为了解决这个问题，Vue 提供了一个 \$listeners property，它是一个对象，里面包含了作用在这个组件上的所有监听器。例如：

{
focus: function (event) { /_ ... _/ }
input: function (value) { /_ ... _/ },
}
有了这个 $listeners property，你就可以配合 v-on="$listeners" 将所有的事件监听器指向这个组件的某个特定的子元素。对于类似 <input> 的你希望它也可以配合 v-model 工作的组件来说，为这些监听器创建一个类似下述 inputListeners 的计算属性通常是非常有用的：

Vue.component('base-input', {
inheritAttrs: false,
props: ['label', 'value'],
computed: {
inputListeners: function () {
var vm = this
// `Object.assign` 将所有的对象合并为一个新对象
return Object.assign({},
// 我们从父级添加所有的监听器
this.\$listeners,
// 然后我们添加自定义监听器，
// 或覆写一些监听器的行为
{
// 这里确保组件配合 `v-model` 的工作
input: function (event) {
vm.\$emit('input', event.target.value)
}
}
)
}
},
template: `<label> {{ label }} <input v-bind="$attrs" v-bind:value="value" v-on="inputListeners" > </label>`
})
现在 <base-input> 组件是一个完全透明的包裹器了，也就是说它可以完全像一个普通的 <input> 元素一样使用了：所有跟它相同的 attribute 和监听器都可以工作，不必再使用 .native 监听器
