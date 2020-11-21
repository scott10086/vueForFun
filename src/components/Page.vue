<template>
  <div>
    <MegaMenu :model="items" />
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Page",
  data() {
    return {
      items: [
        {
          label: "路由跳转",
          command: event => {
            console.log("方法执行了");
          },
          items: [
            [
              {
                label: "路由切换",
                items: [
                  {
                    label: "去Hello2",
                    command: event => {
                      this.$router.push({ path: "/hello2" });
                    }
                  },
                  {
                    label: "去Hello",
                    command: event => {
                      this.$router.push({ path: "/hello" });
                    }
                  }
                ]
              },
              {
                label: "Video 2",
                items: [
                  {
                    label: "去Hello",
                    command: event => {
                      this.$router.push({ path: "/hello2" });
                    }
                  }
                ]
              }
            ]
          ]
        },
        {
          label: "Hello2"
        }
      ]
    };
  }
};
</script>

<style>
#content {
  margin-top: 30px;
}
</style>
