<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppMainMenu from './components/AppMainMenu.vue'
import { computed } from 'vue'
import { useMenuStore } from './store/menu'

const store = useMenuStore();
const expandedMenu = computed(() => store.expandedMenu)
</script>

<template>
  <div 
    class="app__layout"
    :class="{
      menu__expanded: expandedMenu,
    }"
  >
    <AppHeader />
    <AppMainMenu />

    <router-view></router-view>
  </div><!--/#app-->
</template>

<style>
.app__layout {
  --menu-size: min-content;
  --grid-template-columns: var(--menu-size) 1fr;

  display: grid;
  grid-template-columns: var(--grid-template-columns);
  grid-template-rows: min-content 1fr;
  grid-gap: 8px;
  padding: 8px;
  height: 100vh;

  &.menu__expanded {
    --menu-size: 270px;
  }
}

.main__content{
  height: 100%;
  overflow: auto
}

.main__content,
.sidebar{
  background: var(--bx-bg);
  border-radius: var(--bx-radius);
}
</style>