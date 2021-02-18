<template>
  <main>
    <Logo />
    <h1>vue sample page</h1>
    <div class="btn_area">
      <a v-for="(btn, i) in buttons" :key="i" :href="btn.url" target="_blank" >{{ btn.label }}</a>
    </div>
  </main>
</template>

<script>
import Logo from '../components/Logo.vue'
export default {
  name: "main",
  components: {
    Logo
  },
  data () {
    return {
      buttons: [
        {
          label: 'Website',
          url: 'http://spadecompany.kr/'
        },
        {
          label: '로복관제센터 퍼블리싱',
          url: 'http://spjsp.cafe24.com/robots'
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
