<template>
    <div>
        <h1>登录页面</h1>
        <input type="text" placeholder="用户名" v-model="username">
        <input type="password" placeholder="密码" v-model="password">
        <button @click='handleLogin'>登录</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username:'',
            password:''
        }
    },
    methods: {
        handLogin(){
           axios  
        }
    },
}
</script>
