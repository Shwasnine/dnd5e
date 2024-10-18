<template>
    <div class="page__grid">
        <nav class="nav__classes">
            <h3>
                <button 
                    type="button"
                    class="btn btn-toggle-classes"
                    data-bs-toggle="collapse"
                    data-bs-target="#todasAsClasses"
                    aria-expanded="true"
                    @click.prevent="menuDeClassesAberto = !menuDeClassesAberto"
                >
                    <span>{{menuDeClassesAberto ? 'Exibir' : 'Ocultar'}} as Classes</span>

                    <span class="ms-auto d-block">
                        <i 
                            class="fas"
                            :class="{
                                'fa-plus': menuDeClassesAberto,
                                'fa-minus': !menuDeClassesAberto
                            }"
                        ></i>
                    </span>
                </button>
            </h3>

            <div class="collapse show" id="todasAsClasses">
                <ul class="nav flex-column">
                    <li
                        v-for="classe in classes"
                        class="nav-item"
                    >
                        <router-link 
                            class="nav-link"
                            :to="classe.path"
                        >
                            <i :class="classe.icon"></i>
                            <span>{{ classe.name }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <aside class="resumo__classe">
            <button 
                class="btn btn-toggle-classes"
                data-bs-toggle="collapse"
                data-bs-target="#resummoClasse"
            >
                <span>
                    Contrução Rápida
                </span>
                <span class="d-block ms-auto">
                    <i class="fas fa-minus"></i>
                </span>
            </button>
            
            <div
                class="collapse show resumo__classe__collapse" 
                id="resummoClasse"
            >
                <div
                    v-html="resumo"  
                    class="resumo__classe__content" 
                ></div>
            </div>
        </aside>


        <main class="main__content main__content__classes" v-if="classe"
            ref="main__contentRef"
        >

            <div class="classe__header" ref="classeHeaderRef">
                <h1 class="page__title"><span>{{ classe.name }}</span></h1>
                

                <div class="btn-group">
                    <button
                        v-for="subclasse in classe.subclasses" 
                        class="btn btn-success"
                    >
                        {{subclasse.name}}
                    </button>
                </div>
            </div><!--/.classe__header-->


            <div class="classe__table"></div>
            
            <div class="classe__description" ref="conteudoRef"></div>
        </main>

        <nav class="scroll__spy">
            <ul class="nav flex-column" ref="scrollSpyMenu"></ul>
        </nav>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import classes from '../db/classess/classes.json'

const classe = ref(null)
const resumo = ref(null);
const conteudo = ref(null);
const menuDeClassesAberto = ref(false);

// REFS
const conteudoRef = ref(null);
const scrollSpyMenu = ref(null);
const classeHeaderRef = ref(null);
const main__contentRef = ref(null);

const getClasse = className => {
    if(!className) {

        return classes[0];
    }

    return classes.find(classe => classe.name == className);
}

const loadClasse = async () => {
    classe.value = getClasse();

    // Pegando o resumo
    const reqResumo = await fetch(classe.value.resumo);
    resumo.value = await reqResumo.text();

    // Pegando o conteudo
    const reqConteudo = await fetch(classe.value.content);

    conteudo.value = await reqConteudo.text();

    renderConteudo()
}

const renderConteudo = () => {
    conteudoRef.value.innerHTML = conteudo.value;

    createScrollSpy();
}

const createScrollSpy = () => {
    const titulos = conteudoRef.value.querySelectorAll('.classe__nvl_hab');
    const menus = [...titulos].filter(title => title.innerText.startsWith('Nível'));

    scrollSpyMenu.value.innerHTML = menus.map((title, i) => {

        title.id = `section-${i}`;

        return `<li class="nav-item">
            <a class="nav-link" href="#section-${i}">${title.innerText}</a>    
        </li>`
    }).join('\n');

    const classeHeaderStyle = window.getComputedStyle(classeHeaderRef.value);
    const height = classeHeaderStyle.getPropertyValue('height');

    main__contentRef.value.style.setProperty(
        'scroll-padding-top',
        `calc(${height} + 1rem)`
    )
}

const bindEvents = () => {
    scrollSpyMenu.value.addEventListener('click', e => {
        if(e.target.matches('.nav-link')) {
            e.preventDefault();

            const titulos = conteudoRef.value.querySelectorAll('.classe__nvl_hab');
            const title = [...titulos].find(item => item.innerText == e.target.innerText);

            title?.scrollIntoView({
                block: 'start',
                behavior: 'smooth' 
            })
        }
    })
}

onMounted(() => {
    loadClasse();
    bindEvents();
});
</script>

<style>
.page__grid{
    display: grid;
    grid-template-columns: 300px 1fr 220px;
    grid-template-rows: min-content 1fr;
    grid-gap: 8px;
}

.nav__classes,
.scroll__spy{
    background: var(--bx-bg);
    border-radius: var(--bx-radius);
    overflow: auto;
}

.nav__classes,
.resumo__classe__area,
.scroll__spy{
    height: 100%;
}

.nav__classes{
    grid-row: 1/2;
    grid-column: 1/2;

    h3 {
        margin: 0;
    }
}

.resumo__classe{
    grid-column: 1/2;
    grid-row: 2/3;
    max-height: 100%;
    overflow: hidden;
    align-self: flex-start;
    
    display: grid;
    grid-template-rows: min-content 1fr;

    .resumo__classe__collapse{
        max-height: 100%;
        overflow: auto;
    }
}

.resumo__classe {
    font-size: 14px;
    background: var(--bx-bg);
    border-radius: var(--bx-radius);

    display: grid;
    grid-template-rows: min-content 1fr;
    align-items: flex-start;

    .resumo__classe__content{
        padding: 1rem;
    }

    h1, h2,h3, h4, h5, h6, strong {
        color: var(--cor-primaria);
        font-weight: 700; 
    }
    
    h1{
        font-size: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, .12);
    }

    h2, h3 {
        font-size: 18px;
        margin-bottom: 1.5rem;
    }
}

.main__content__classes{
    grid-row: span 3;
    padding: 0 1rem 2rem;
}

.scroll__spy{
    grid-row: span 3;
}

.classe__header{
    position: sticky;
    top: 0;
    background: var(--bx-bg);
    z-index: 5;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, .12);
}

.classe__description{
    h1,h2,h3,h4,h5,h6 {
        color: var(--cor-primaria);
        font-weight: 700;
    }

    h1,h2 {
        font-size: 20px;
        border-bottom: 1px solid currentColor;
        padding-bottom: 1rem;
    }

    h3 {
        font-size: 18px;
    }
}

.habilidade__subclasse:empty {
    padding: 1rem 0;
    background: rgba(255, 255, 255, .12);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    &::before{
        content: 'Habilidade de subclasse';
        font-weight: 400;
        font-size: 1.25rem;
    }
}

.btn-toggle-classes{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    --bs-btn-bg: rgba(255,255,255,.11);
    --bs-btn-hover-bg: rgba(255,255,255,.18);
    --bs-btn-font-weight: 700;
}

.nav__classes {
    .nav {
        padding: 1rem;
        gap: 5px;
    }

    .nav-link {
        display: flex;
        gap: 1rem;
        align-items: center;
        color: #FFF;
        border-radius: 8px;
        background: rgba(255, 255, 255, .12);
        font-weight: 700;
        border: 1px solid transparent;

        i {
            display: flex;
            justify-content: center;
            align-items: center;
            aspect-ratio: 1;

            border-radius: 50%;
            width: 2em;
            background-color: var(--bx-bg);
        }

        &:hover{
            border-color: var(--cor-primaria);

            i{
                background-color: var(--bx-bg);
                color: #FFF;
            }
        }
    }
}

.scroll__spy{
    .nav-link {
        font-size: 14px;
        color: #FFF;
        border-left: 5px solid transparent
    }
}
</style>