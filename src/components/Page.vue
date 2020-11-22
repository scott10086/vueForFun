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
          label: "基础语法练习",
          items: [
            [
              {
                label: "路由切换",
                items: [
                  {
                    label: "Basic1",
                    command: event => {
                      this.$router.push({ path: "/basic1" });
                    }
                  },
                  {
                    label: "去Hello",
                    command: event => {
                      this.$router.push({ path: "/hello" });
                    }
                  }
                ]
              }
            ]
          ]
        },
        {
          label: "路由跳转",
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
              }
            ]
          ]
        }
      ],
      items1: [
        {
          label: "路由跳转",
          items: [
            [
              {
                label: "路由切换",
                items: [
                  { label: "去Hello2", url: "/hello2" },
                  { label: "去Hello", url: "/hello2" }
                ]
              },
              {
                label: "Video 2",
                items: [{ label: "去Hello", url: "/hello2" }]
              }
            ]
          ]
        },
        {
          label: "Hello2",
          items: []
        }
      ]
    };
  },
  created: function() {
    const newList = this.dealTreeData(this.items1);
    console.log(newList);
  },
  computed: {
    menuItems: function() {
      const newList = this.dealTreeData(this.items);
      console.log(newList);
      return newList;
    }
  },
  methods: {
    dealTreeData: function(arr) {
      return (arr = arr.map(item => {
        if (item.label) {
          item.label = item.label;
          if (item.items) {
            this.dealTreeData(item.items);
          } else {
            item.command = event => {
              this.$router.push({ path: item.urlKey });
            };
          }
        } else {
          this.dealTreeData(item);
        }
        return item;
      }));
      return this.dealTreeData(this.items);
    }
  }
};
</script>

<style>
#content {
  margin-top: 30px;
}
</style>
