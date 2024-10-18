import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'

export const home = {
    path: '/',
    name: 'Home',
    icon: 'fas fa-house',
    component: Home,
}
export const players = [
    {
        path: '/especies',
        name: 'Espécies',
        icon: 'fas fa-users',
        component: () => import('../pages/Especies.vue')
    },
    {
        path: '/classes',
        name: 'Classes',
        icon: 'fas fa-hat-wizard',
        component: () => import('../pages/Classes.vue')
    },
    {
        path: '/talentos',
        name: 'Talentos',
        icon: 'fa-solid fa-award',
    },
    {
        path: '/opcoes-e-recursos',
        name: 'Opções e recursos',
        icon: 'fas fa-drafting-compass',
    },
    {
        path: '/antecedentes',
        name: 'Antecedentes',
        icon: 'fa-solid fa-portrait',
    },
    {
        path: '/itens',
        name: 'Itens',
        icon: 'fa-solid fa-toolbox',
    },
    {
        path: '/stat-generator',
        name: 'Stat Generator',
        icon: 'fa-solid fa-dice',
    },
]
export const rules = [
    {
        path: '/aventuras',
        name: 'Aventuras',
        icon: 'fa-solid fa-dungeon',
    },
    {
        path: '/livros',
        name: 'Livros',
        icon: 'fa-solid fa-book',
    },
    {
        path: '/glossario-de-regras',
        name: 'Glossário de Regras',
        icon: 'fa-solid fa-book-skull',
    },
    {
        path: '/condicoes',
        name: 'Condições',
        icon: 'fa-solid fa-info',
    },
    {
        path: '/bestiario',
        name: 'Bestiário',
        icon: 'fa-solid fa-dragon',
    },
    {
        path: '/loot-generator',
        name: 'Loot Generator',
        icon: 'fa-solid fa-toolbox',
    },
    {
        path: '/calculadora-de-cr',
        name: 'Caluladora de CR',
        icon: 'fa-solid fa-calculator',
    },
]

const routes = [
    home,
    ...players,
    ...rules,
    {
        path: '/especies/:especie',
        name: 'Espécies Detalhes',
        icon: 'fas fa-users',
        component: () => import('../pages/Especies.vue')
    },
    // {
    //     path: '*',
    //     component: NotFound
    // }
];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;