<template>
    <main class="main__content">

        <h2><span>Players</span></h2>

        <nav class="home__nav mb-5">
            <router-link 
                v-for="item of players"
                :to="item.path"
            >
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
            </router-link>
        </nav>

        <h2><span>Regras</span></h2>

        <nav class="home__nav">
            <router-link 
                v-for="item of rules"
                :to="item.path"
            >
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
            </router-link>
        </nav>
    </main>
</template>

<script setup>
import { players, rules } from '../router'

</script>

<style scoped>
.main__content {
    padding: 0 1rem 2rem;
}

h1 {
    font-weight: 700;
    margin-bottom: 2rem;
}

h2{
    font-weight: 700;
    border-bottom: 1px solid rgba(255, 255, 255, .09);
    padding-bottom: 1rem;
    padding-top: 1rem;
    margin-bottom: 2rem;
    background-color: #111313;
    position: sticky;
    top: 0;
    z-index: 2;
}

h1, h2 {
    span {
        background: linear-gradient(45deg, #1ED760, #4376e5);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}

a{
    background: rgba(255,255,255,.09);
    padding: 1rem;
    border-radius: 1rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
    text-decoration: none;
    font-weight: 700;
    color: #FFF;
    font-size: 1.5rem;

    border: 1px solid transparent;

    &:hover {
        border-color: var(--cor-primaria);
    }


    i {
        font-size: 2rem;
        color: var(--bs-body-bg);
        
        width: 2.5em;
        border-radius: 50%;
        background: var(--cor-primaria);
        aspect-ratio: 1;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span {
        display: block;
        margin: auto;
    }
}

.home__nav{
    overflow: auto;

    a{
        flex-shrink: 0;
        width: 100%;
        max-width: 250px;
        text-align: center;
    }
}

@media(min-width: 1200px) {
    .home__nav {
        flex-wrap: wrap;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
        grid-gap: 1rem;
    }
}
</style>