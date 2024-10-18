import { defineStore } from "pinia"
import { ref } from 'vue'

export const useMenuStore = defineStore('menu', () => {
    let isMenuExpanded = localStorage.getItem('menuExpanded') || 'false';

    const expandedMenu = ref(JSON.parse(isMenuExpanded));

    const toggleMenu = () => {
        expandedMenu.value = !expandedMenu.value;
        localStorage.setItem('menuExpanded', expandedMenu.value)
    }

    return {
        expandedMenu,
        toggleMenu,
    }
}) 