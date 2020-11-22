<template>
  <div class="hello">
    <Panel header="hello">
      <img src="../../assets/logo.png" />
      <br />
      <a>
        <router-link to="/hello">{{msg}}</router-link>
      </a>
    </Panel>
  </div>
</template>

<script>
export default {
  name: "HelloWorld2",
  data() {
    return {
      msg: "HelloWorld2 ： 只是想测试一下"
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
