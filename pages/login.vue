<template>
    <div>
        <div class="singup">注册</div>
        <input type="text" v-model="userNameSingUp" />
        <input type="text" v-model="passWordSingUp" />
        <button @click="SingUp">注册</button>
        <!-- <el-button type="primary" size='mini'>主要按钮</el-button> -->
        <br />
        <div class="singin">登录</div>
        <input type="text" v-model="userName" />
        <input type="text" v-model="passWord" />
        <button @click="Login">登录</button>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    name: "Login",
    data() {
        return {
            userNameSingUp:"",
            passWordSingUp:"",
            userName: "",
            passWord: "",
        };
    },
    methods: {
        ...mapMutations(["setToken"]),
        SingUp(){
            let data = {
                us: this.userNameSingUp,
                ps: this.passWordSingUp,
            };
            this.$axios({
                url: "/api/users/signup",
                method: "post",
                data,
            }).then((res) => {
                console.log(res);
            });
        },
        Login() {
            let data = {
                us: this.userName,
                ps: this.passWord,
            };
            this.$axios({
                url: "/api/users/signin",
                method: "post",
                data,
            }).then((res) => {
                console.log(res,"登录成功")
                this.setToken(res.result.token);
                console.log(this.$router.push("/"))
            });
        },
    },
};
</script>
