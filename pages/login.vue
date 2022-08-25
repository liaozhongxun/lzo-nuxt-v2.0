<template>
  <div>登录页面</div>
</template>

<script>
export default {
  name: "Login",
  validate({query,params}){
      console.log(query,params);
      return true
  }
};
</script>
