<template>
    <div>
        <h3>首页</h3>
        <button @click="upCount">更新数1据 {{ count }}</button>
        <a href="/list?id=1">a标签跳转页面</a>
        <nuxt-link to="/list">标签跳转页面</nuxt-link>
        <nuxt-link :to="{ name: 'list', query: { id: 1 } }"
            >标签跳转页面 query</nuxt-link
        >
        <button @click="goLink('/list')">JS query 跳转页面</button>
        <button @click="goLinkParams('list')">JS params 跳转页面</button>
        <button @click="goLink('/news')">新闻</button>
        <button @click="getUserInfo">获取用户信息 {{ userName }}</button>
        <!-- <Tutorial /> -->
        <!-- <Tutorial /> -->
    </div>
</template>

<script>
export default {
    name: "IndexPage",
    data() {
        return {
            userName:"",
            count: 0,
        };
    },
    middleware: "staticAuth",
    validate({ params, query }) {
        console.log("3、页面中 validate");
        // 校验参数是否正确，正确则 return true,正常，否则返回false,跳转空页面
        return true; // 否则会跳转空页面
    },
    asyncData({ store, params }) {
        console.log("4、页面请求接口前 asyncData ");
    },
    fetch({ app, store, params }) {
        console.log("5、页面和组件请求接口前 fetch ");
    },
    beforeCreate() {
        console.log("6、服务器客户端共有 beforeCreate ");
    },
    created() {
        console.log("7、服务器客户端共有 reated ");
    },
    beforeMount() {
        console.log("8、客户端 beforeMount ");
    },
    mounted() {
        console.log("9、客户端 mounted ");
    },
    beforeUpdate() {
        console.log("10、客户端 beforeUpdate");
    },
    updated() {
        console.log("11、客户端 updated");
    },
    beforeDestroy() {
        console.log("12、客户端 beforeDestroy");
    },
    destroyed() {
        console.log("13、客户端 destroyed");
    },
    head() {
        return {
            title: "页面独有 head 属性设置",
        };
    },
    methods: {
        upCount() {
            this.count++;
        },
        goLink(path) {
            this.$router.push({
                path: path,
            });
        },
        goLinkParams(path) {
            this.$router.push({
                name: path,
                params: {
                    id: 1,
                },
            });
        },
        getUserInfo() {
            this.$axios({
                url: "/api/users/userinfo",
                method: "get",
            }).then((res) => {
                console.log(res, "userinfo");
                this.userName = res.result.us;
            });
        },
    },
};

// 通过插件映入elementui
// 研究一下传token名称的地方
</script>
