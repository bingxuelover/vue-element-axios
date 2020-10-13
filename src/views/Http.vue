<template>
  <div class="box">
    <el-row>
      <el-col> get: {{ getResult }} </el-col>
    </el-row>
    <el-row>
      <el-col> post: {{ postResult }} </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "http",
    data() {
      return {
        getResult: "",
        postResult: "",
      };
    },
    created() {
      this.get();
      this.post();
    },
    methods: {
      get() {
        this.$get("getPath", {}).then(res => {
          if (res.code == 200) {
            this.getResult = res.data;
          }
        });
      },
      post() {
        this.$post("postPath", {}).then(res => {
          if (res.code == 200) {
            this.postResult = res.data;
          }
        });
      },
    },
  };
</script>

<style scoped>
  .box {
    margin: 100px 0;
  }
</style>
