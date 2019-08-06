<template>
    <el-container class="showmain">
        <el-main>
            <h2>欢迎登录,{{UserName}}！</h2>
        </el-main>
    </el-container>
</template>

<script>
export default {
  computed: {
    // 用户图像
    CircleUrl: function() {
      return localStorage.getItem("userImg");
    },
    // 用户名称
    UserName: function() {
      return localStorage.getItem("username");
    }
  }
};
</script>


<style>
.showmain {
  height: 100%;
}
</style>


