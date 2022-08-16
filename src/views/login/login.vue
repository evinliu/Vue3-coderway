<template>
  <div id="login"><login-panel /></div>
</template>

<script lang="ts" setup>
import LoginPanel from './comps/LoginPanel.vue'
</script>

<style scoped>
#login {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
