<template>
  <div class="login-vue">
    <div class="container">
      <p class="title">WELCOME</p>
      <div class="input-c">
        <el-input id="username" v-model="username" placeholder="请输入账号" clearable @blur="verifyAccount">
          <span slot="prepend">账号</span>
        </el-input>
        <p class="error">{{accountError}}</p>
      </div>
      <div class="input-c">
        <el-input id="pwd" placeholder="请输入密码" v-model="pwd" show-password clearable @blur="verifyPwd">
          <span slot="prepend">密码</span>
        </el-input>
        <p class="error">{{pwdError}}</p>
      </div>
      <el-button class="submit" @click="submit" round>登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "admin",
      pwd: "admin",
      accountError: "",
      pwdError: ""
    };
  },
  methods: {
    verifyAccount() {
      if (this.username !== "admin") {
        this.accountError = "账号为admin";
      } else {
        this.accountError = "";
      }
    },
    verifyPwd() {
      if (this.pwd !== "admin") {
        this.pwdError = "密码为admin";
      } else {
        this.pwdError = "";
      }
    },
    submit() {
      if (this.username === "admin" && this.pwd === "admin") {
        // 登陆成功
        alert("欢迎您！");
        // 将用户名和密码存入本地存储
        localStorage.setItem("username", this.username);
        localStorage.setItem("pwd", this.pwd);
        localStorage.setItem(
          "userImg",
          "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        );
        // 编程式跳转到首页
        this.$router.push("/home/shownow");
      } else {
        if (this.username !== "admin") {
          this.accountError = "账号为admin";
        }
        if (this.pwd !== "admin") {
          this.pwdError = "密码为admin";
        }
      }
    }
  }
};
</script>

<style>
.login-vue {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-image: url("../assets/bg00.jpg");
}

.login-vue .container {
  background: rgba(255, 255, 255, 0.5);
  width: 300px;
  text-align: center;
  border-radius: 10px;
  padding: 30px;
}

.login-vue .title {
  font-size: 30px;
  margin-bottom: 20px;
}

.login-vue .input-c {
  margin: auto;
  width: 260px;
}

.login-vue .error {
  color: red;
  text-align: left;
  margin: 5px auto;
  font-size: 12px;
  padding-left: 30px;
  height: 20px;
}

.login-vue .submit {
  width: 200px;
}
</style>
