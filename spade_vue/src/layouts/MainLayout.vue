<template>
  <div>
    <header>
      Header
    </header>
      <slot/>
    <footer>
      Footer
    </footer>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
  updated() {
    console.log('main update');
  }
}
</script>

<style src="../assets/css/style.css"></style>
