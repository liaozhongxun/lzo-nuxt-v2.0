<template>
    <div>跳出测试 <span class="xxx">child</span></div>
</template>

<script>
export default {
    name: "List",
    validate({ query, params }) {
        console.log(query, params,' -- validate query params');
        return true;
    },
};
</script>

<style scoped lang="scss">
    div{
        background: #f00;
        .xxx{
            color:#f0f
        }
    }
</style>