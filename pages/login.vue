<template>
    <div>
        <div>登录页面</div>
        <button @click="Login">直接登录</button>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    name: "Login",
    methods: {
        ...mapMutations(["setToken"]),
        Login(){
            console.log(this.$router.push("/"))
            this.setToken("login token 123");
        },
    },
};
</script>
