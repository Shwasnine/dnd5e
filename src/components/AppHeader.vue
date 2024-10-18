<template>
    <header>
        <div class="d-flex">
            <button 
                class="btn toggler"
                :class="{
                    active
                }" 
                type="button" 
                @click="store.toggleMenu"
                v-tooltip="{
                    title: active ? 'Retrair Menu' : 'Expandir Menu',
                    placement: 'bottom',
                    trigger: 'hover'
                }"
            >
                <i class="fas fa-bars"></i>
            </button>
        </div>

        <div class="d-flex">
            <router-link to="/" class="btn btn-home d-flex align-items-center justify-content-center">
                <i class="fas fa-house"></i>
            </router-link>

            <div class="search w-100">
                <input type="search" placeholder="Pelo que está procurando?" class="form-control" id="global-search">
                <label class="fas fa-search" for="global-search">
                    <span class="visually-hidden" aria-hidden="true">Search</span>
                </label>
            </div>
        </div>

        <div class="d-flex ms-auto">
            <div class="dropdown">
                <button class="btn" type="button" data-bs-toggle="dropdown">
                    <i class="fas fa-bell"></i>
                </button>

                <div class="dropdown-menu">
                    <div class="text-center text-bold">
                        Atualizações
                    </div>
                </div><!--/.drodown-menu-->
            </div><!--/.dropdown-->
        </div><!--/.app__tray-->
    </header>
</template>

<script setup>
import { computed } from 'vue'
import { useMenuStore } from '../store/menu.js'
import useDirectives from '../directives/index.js' 

const { vTooltip } = useDirectives();
const store = useMenuStore();

const active = computed(() => store.expandedMenu)

</script>

<style lang="css" scoped>
header{
    --gap: 8px;
    grid-column: 1/-1;
    grid-row: 1/2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
}

.btn{
    --transition-duration: .3s;

    aspect-ratio: 1;
    min-width: 48px;
    flex-shrink: 0;
    transition: 
        background var(--transition-duration) linear,
        color var(--transition-duration) linear
    ;

    --bs-btn-border-radius: 50%;

    --bs-btn-hover-bg: hsl(180deg, 5%, 7%);
    --bs-btn-hover-border-color: hsl(180deg, 5%, 7%);
    
    --bs-btn-active-bg: #1ED760;
    --bs-btn-active-color: hsl(180deg, 5%, 7%);
    --bs-btn-active-border-color: hsl(180deg, 5%, 7%);
}

.btn-home{
    --bs-btn-bg: hsl(180deg, 5%, 7%);
    --bs-btn-border-color: hsl(180deg, 5%, 7%);
    
    --bs-btn-active-bg: hsl(180deg, 5%, 14%);
    --bs-btn-active-border-color: hsl(180deg, 5%, 14%);
    --bs-btn-hover-bg: hsl(180deg, 5%, 14%);
    --bs-btn-hover-border-color: hsl(180deg, 5%, 14%);
    
    --bs-btn-active-bg: hsl(180deg, 5%, 14%);
    --bs-btn-active-border-color: hsl(180deg, 5%, 14%);
}

.dropdown-menu{
    background: hsl(180deg, 5%, 14%);
    padding: .5rem;
}

.d-flex {
    gap: var(--gap);
}

.search{
    position: relative;

    --bs-body-color: hsl(180deg, 5%, 75%);

    .fas {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
    }

    input{
        border-radius: 3rem;
        padding-left: 3rem;
        min-height: 48px;

        --bs-body-bg: hsl(180deg, 5%, 7%);
        --bs-border-color: hsl(180deg, 5%, 7%);

        &::placeholder {
            color: hsl(180deg, 5%, 62%);
        }
    }
}


</style>