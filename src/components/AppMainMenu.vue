<template>
    <keep-alive>
        <nav 
            class="app__main__menu"
            :class="{
                compact: !store.expandedMenu
            }"
        >
            <ul class="nav flex-column gap-2">
                <AppMainMenuItem 
                    :route="home"
                />

                <AppMainMenuItem 
                    v-for="item of players"
                    class="nav-item"
                    :route="item"
                />

                <li class="divider"></li>

                <AppMainMenuItem 
                    v-for="item of rules"
                    class="nav-item"
                    :route="item"
                />
            </ul>
        </nav>
    </keep-alive>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import {
    home,
    players,
    rules
} from '../router'
import AppMainMenuItem from './AppMainMenuItem.vue'
import { useMenuStore } from '../store/menu'

const store = useMenuStore();
const route    = useRoute();
const isActive = path => {
    return route.path.startsWith(path);
}
</script>

<style lang="css">
.app__main__menu{
    grid-row: 2/3;
    grid-column: 1/2;
    background: var(--bx-bg);
    border-radius: var(--bx-radius);
    overflow: auto;
    padding: 1rem;

    &.compact {
        .nav-link {
            position: relative;
            
            span {
                display: none;
            }
        }
    }

    button{
        --transform: 0deg;

        .fa-caret-down {
            transition: transform .3s linear;
            transform: var(--transform);
        }

        &[aria-expanded="true"] {
            --transform: rotate(-180deg);
        }
    }
}

.divider {
    border-top: 1px solid rgba(255,255,255,.09)
}

</style>