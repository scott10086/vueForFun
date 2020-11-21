<template>
  <div class="hello">
    <Panel header="hello2">
      <img src="../assets/logo.png" />
      <br />
      <a>
        <router-link to="/hello2">{{msg}}</router-link>
      </a>
    </Panel>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "HelloWorld ： 只是想测试一下路由跳转"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  font-weight: normal;
  text-align: center;
}
a {
  color: #42b983;
}
</style>
