<template>
    <div>
        通过 nuxt-child 标签，显示新闻子路由首页
        <ul class="list">
            <li v-for="item in newList" :key="item.id" @click="showItem(item)">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newList: [
                { id: 1, title: "消息 1" },
                { id: 2, title: "消息 2" },
                { id: 3, title: "消息 3" },
                { id: 4, title: "消息 4" },
                { id: 5, title: "消息 5" },
            ],
        };
    },
    methods:{
        showItem(item){
            this.$router.push({
                path:`/news/${item.id}`
            })
        },
    }
};
</script>

<style lang="scss" scoped></style>
