<template>
  <div class="nav-menu">
    <div class="logo">
      <svg-icon class="img" :color="'white'" icon-class="tv" />
      <span class="title">Vue3+TS</span>
    </div>
  </div>
  <el-menu default-active="2" class="el-menu-vertical">
    <template v-for="item in userMenus" :key="item.id">
      <el-submenu>
        <i v-if="item.icon" :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </el-submenu>
      <template v-if="item.type === 1">
        <template v-for="subitem in item.children" :key="subitem.id">
          <el-menu-item>
            <i v-if="subitem.icon" :class="subitem.icon"></i>
            <span>{{ subitem.name }}</span>
          </el-menu-item>
        </template>
      </template>
      <template v-else-if="item.type === 2">
        <el-menu-item>
          <i v-if="item.icon" :class="item.icon"></i>
          <span>{{ item.name }} </span>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
const { state } = useStore()
const userMenus = state.login.userMenus

// const userMenus = store.state.login.userMenus
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  // background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
}
</style>
