<template>
    <div>第 {{ id }} 个动态页面</div>
</template>

<script>
export default {
    head() {
        return {
            title: `${this.id} 标题`,
        };
    },
    data() {
        return {
            id: 0,
        };
    },
    created() {
        this.id = this.$route.params.id;
    },
};
</script>

<style lang="scss" scoped></style>
