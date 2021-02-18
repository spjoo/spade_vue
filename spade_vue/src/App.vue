<template>
  <TheLayout>
    <router-view id="app" />
  </TheLayout>
</template>

<script>


import TheLayout from "@/layouts/TheLayout";
export default {
  name: 'App',
  components:{
    TheLayout: TheLayout
  },
}
</script>

<style>
</style>

