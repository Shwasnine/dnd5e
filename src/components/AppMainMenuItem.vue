<template>
    <li class="nav-item">
        <router-link 
            v-if="compact"
            class="nav-link"
            :to="route.path"
            active-class="active"
            :class="{
                active: activeClass,
            }"
            v-tooltip="{
                title: route.name,
                placement: 'right',
                trigger: 'hover'
            }"
        >
            <i :class="route.icon"></i>
            <span>{{route.name}}</span>
        </router-link>
        
        <router-link 
            v-else
            class="nav-link"
            :to="route.path"
            active-class="active"
            :class="{
                active: activeClass,
            }"
        >
            <i :class="route.icon"></i>
            <span>{{route.name}}</span>
        </router-link>
    </li>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import useDirectives from '../directives'
import { useMenuStore } from '../store/menu';

//===========================================================
// PARAMS
//===========================================================
const props = defineProps({
    route: {
        type: Object,
    },
});
const rota = useRoute();
const store = useMenuStore();

const { vTooltip } = useDirectives();

//==========================================================
// DATA
//==========================================================
const compact = computed(() => !store.expandedMenu);

//==========================================================
// COMPUTED
//==========================================================
const activeClass = computed(() => {

    if(props.route.path === '/') return false;

    return rota.path.startsWith(props.route.path);
});
</script>

<style scoped>

.nav-link{
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 100%;
    --bs-nav-link-color: #FFF;
    --bs-nav-link-hover-color: #1ED760;

    border-radius: 8px;
    border:1px solid transparent;

    &:hover,
    &.active {
        background: rgba(255,255,255,.09);
        /* border-color: var(--bs-nav-link-hover-color); */

        i:not(.fa-caret-down) {
            background: var(--bs-nav-link-hover-color);
            color: var(--bx-bg);
        }
    }

    i:not(.fa-caret-down) {
        width: 2em;
        aspect-ratio: 1;
        border-radius: 50%;
        flex-shrink: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: rgba(255,255,255,.09);
    }
}
</style>