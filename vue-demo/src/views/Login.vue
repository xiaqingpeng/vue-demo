<template>
  <div id="login">
    <h1>登录页面</h1>
    <p>
      <label for>用户名：</label>
      <input type="text" placeholder="用户名" id="username" class="L_height" v-model="username">
    </p>
    <br>
    <p>
      <label for>密码：</label>
      <input type="password" placeholder="密码" class="L_height" v-model="password">
    </p>
    <br>
    <button @click="handleLogin" class="L_height">登录</button>
  </div>
</template>
<style lang="less">
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  .L_height {
    height: 30px;
  }
  #username {
    margin: 10px 0;
  }
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return { username: "", password: "" };
  },
  methods: {
    handleLogin() {
      console.log(this);
      var _this = this;
      axios.get("./json/login.json").then(function(res) {
        let data = res.data;
        // console.log(data);
        console.log(data[0].username, data[0].password);
        if (
          _this.username === data[0].username &&
          _this.password === data[0].password
        ) {
          console.log("登录成功");

          _this.$router.replace({
            path:'/money'
          });
        } else {
          console.log("登录失败");
        }
      });
    }
  }
};
</script>

