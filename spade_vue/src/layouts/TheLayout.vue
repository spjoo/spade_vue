<template>
    <component :is="layout" v-if="layout">
        <router-view/>
    </component>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';

export default {
  name: 'TheLayout',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      {
        rel: 'stylesheet',
        href:'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Roboto:wght@400;500;700&display=swap'
      },
    ]
  },
  components: {
      MainLayout,
  },
  data() {
      return {
          layout: null
      }
  },
  mounted() {
      let route = this.$route;
      this.layout = route.meta.layout;
  },
}
</script>

<style src="../assets/css/base.css"></style>
<style src="../assets/css/grid.css"></style>

