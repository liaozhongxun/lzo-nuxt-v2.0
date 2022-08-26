<template>
    <div>跳出测试</div>
</template>

<script>
export default {
    name: "List",
    validate({ query, params }) {
        console.log(query, params);
        return true;
    },
};
</script>
