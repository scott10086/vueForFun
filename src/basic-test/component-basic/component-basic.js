// 因为组件是可复用的 Vue 实例，所以它们与 new Vue 接收相同的选项，例如 data、computed、watch、methods 以及生命周期钩子等。仅有的例外是像 el 这样根实例特有的选项。
// 组件
// 一个组件的 data 选项必须是一个函数
// 两种组件的注册类型：全局注册和局部注册。至此，我们的组件都只是通过 Vue.component 全局注册的：
// 全局注册的组件可以用在其被注册之后的任何 (通过 new Vue) 新创建的 Vue 根实例，也包括其组件树中的所有子组件的模板中。
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

// Prop 是你可以在组件上注册的一些自定义 attribute。当一个值传递给一个 prop attribute 的时候，它就变成了那个组件实例的一个 property。为了给博文组件传递一个标题，我们可以用一个 props 选项将其包含在该组件可接受的 prop 列表中：
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

// 根实例
new Vue({ el: '#components-demo' })

new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  }
})

Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `
})

new Vue({
  el: '#blog-post-demo1',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', content: `<h7>666</h7>` },
      { id: 2, title: 'Blogging with Vue', content: `<h7>666</h7>` },
      { id: 3, title: 'Why Vue is so fun', content: `<h7>666</h7>` }
    ]
  }
})

Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})
new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', content: `<h7>666</h7>` },
      { id: 2, title: 'Blogging with Vue', content: `<h7>666</h7>` },
      { id: 3, title: 'Why Vue is so fun', content: `<h7>666</h7>` }
    ],
    postFontSize: 1
  }
})

Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post1.title }}</h3>
      <button v-on:click="$emit('enlarge-text',0.1)">
        Enlarge text
      </button>
      <div v-html="post1.content"></div>
    </div>
  `,
  data:function(){
    return{
      post1:this.post
    }
  }
})
new Vue({
  el: '#blog-posts-events-demo1',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', content: `<h7>666</h7>` },
      { id: 2, title: 'Blogging with Vue', content: `<h7>666</h7>` },
      { id: 3, title: 'Why Vue is so fun', content: `<h7>666</h7>` }
    ],
    postFontSize: 1
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += this.postFontSize + enlargeAmount;
    }
  }
})

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})
// 插槽   <slot></slot>
Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})
new Vue({
  el: '#blog-posts-events-demo2',
  data: {
    searchText: 1
  }
})


// 动态组件
// 有的时候，在不同组件之间进行动态切换是非常有用的，比如在一个多标签的界面里：

// 上述内容可以通过 Vue 的 <component> 元素加一个特殊的 is attribute 来实现：

// <!-- 组件会在 `currentTabComponent` 改变时改变 -->
// <component v-bind:is="currentTabComponent"></component>
// 在上述示例中，currentTabComponent 可以包括

// 已注册组件的名字，或
// 一个组件的选项对象
// 你可以在这里查阅并体验完整的代码，或在这个版本了解绑定组件选项对象，而不是已注册组件名的示例。

// 请留意，这个 attribute 可以用于常规 HTML 元素，但这些元素将被视为组件，这意味着所有的 attribute 都会作为 DOM attribute 被绑定。对于像 value 这样的 property，若想让其如预期般工作，你需要使用 .prop 修饰器。

// 到目前为止，关于动态组件你需要了解的大概就这些了，如果你阅读完本页内容并掌握了它的内容，我们会推荐你再回来把动态和异步组件读完。

// 解析 DOM 模板时的注意事项
// 有些 HTML 元素，诸如 <ul>、<ol>、<table> 和 <select>，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 <li>、<tr> 和 <option>，只能出现在其它某些特定的元素内部。

// 这会导致我们使用这些有约束条件的元素时遇到一些问题。例如：

// <table>
//   <blog-post-row></blog-post-row>
// </table>
// 这个自定义组件 <blog-post-row> 会被作为无效的内容提升到外部，并导致最终渲染结果出错。幸好这个特殊的 is attribute 给了我们一个变通的办法：

// <table>
//   <tr is="blog-post-row"></tr>
// </table>
// 需要注意的是如果我们从以下来源使用模板的话，这条限制是不存在的：

// 字符串 (例如：template: '...')
// 单文件组件 (.vue)
// <script type="text/x-template">
// 到这里，你需要了解的解析 DOM 模板时的注意事项——实际上也是 Vue 的全部必要内容，大概就是这些了。恭喜你！接下来还有很多东西要去学习，不过首先，我们推荐你先休息一下，试用一下 Vue，自己随意做些好玩的东西。

// 如果你感觉已经掌握了这些知识，我们推荐你再回来把完整的组件指南，包括侧边栏中组件深入章节的所有页面读完。
