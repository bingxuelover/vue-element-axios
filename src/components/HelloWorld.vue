<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      axios封装访问，Element-ui按需加载
    </p>
    <p>
      点击http链接，访问axios请求页面，具体操作方法，参考 README.md
    </p>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    props: {
      msg: String,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
</style>
