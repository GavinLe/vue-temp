<template>
  <div class="menu-wrapper">
    <template v-if="hasOneShowingChild(item.children)">
      <app-link :to="resolvePath(item.path)">
        <el-menu-item :index="resolvePath(item.path)" :class="{'submenu-title-noDropdown': notShow}">
          <item :icon="item.iconcls || ''" :title="item.name" />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="submenu" :index="resolvePath(item.path, item)">
      <template slot="title">
        <item :icon="item.iconcls || ''" :title="item.name" />
      </template>

      <template v-for="child in item.children">
        <sidebar-item v-if="hasOneShowingChild(child.children)" :is-nest="true" :item="child" :key="child.id" :base-path="resolvePath(child.path)" class="nest-menu" />
        <app-link v-else :to="resolvePath(child.path)" :key="child.id">
          <el-menu-item :index="resolvePath(child.path)">
            <item :icon="item.iconcls || ''" :title="item.name" />
          </el-menu-item>
        </app-link>
      </template>
    </el-submenu>

  </div>
</template>

<script>
import path from 'path';
import { isExternal } from '@/utils';
import Item from './Item';
import AppLink from './Link';
import FixiOSBug from './FixiOSBug';

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      onlyOneChild: null,
      notShow: true
    };
  },
  methods: {
    hasOneShowingChild (children, parent) {
      return children === '' || children.length === 0;
    },
    resolvePath (routePath, route) {
      if (routePath == '#') {
        return route.id + routePath;
      } else {
        return routePath;
      }
    },
    isExternalLink (routePath) {
      return isExternal(routePath);
    }
  }
};
</script>
