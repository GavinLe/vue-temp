<template>
  <el-scrollbar wrap-class="ysd-aside">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="!sidebar.opened"
      :router="true"
      background-color="#313239"
      text-color="#fff"
      active-text-color="#ffad4a"
      unique-opened
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose">
      <div class="home" @click="toHome">
        <div v-if="sidebar.opened" class="icon">
          <span class="y-icon y-icon-logo" style="width:100%"/>
        </div>
        <div v-else class="icon">
          <span class="y-icon y-icon-uplogo" style="width:100%"/>
        </div>
        <div v-if="sidebar.opened" class="name">小优会OI</div>
      </div>
      <sidebar-item v-for="route in menus" :key="route.id" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>

import Item from './Item';
import SidebarItem from './SidebarItem';
import { mapGetters } from 'vuex';

export default {
  components: {
    SidebarItem,
    Item
  },
  computed: {
    ...mapGetters({
      menus: 'getMenus',
      sidebar: 'sidebar'
    })
  },
  methods: {
    handleOpen (key, keyPath) {
    },
    handleClose (key, keyPath) {
    },
    toHome: function () {
      this.$router.push({path: '/dashboard'});
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
  .ysd-aside {
    flex: 0 0 1;
    background-color: #393a41;
    .el-menu--collapse {
      width: 57px;
    }
    .el-menu-vertical:not(.el-menu--collapse) {
      width: 177px;
    }
    .home {
      display: flex;
      flex-direction: column;
      color: white;
      background-color: #393a41;
      height: 64px;
      cursor: pointer;
      .icon {
        padding: 5px 0;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .name {
        flex: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
      }
    }
  }
</style>
