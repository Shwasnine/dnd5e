<template>
    <div class="page__grid">
        <main class="main__content">
            <h1 class="page__title"><span>Espécies</span></h1>
            

            <section 
                class="tabela"
                :class="{
                    disabled: loading
                }"
            >
                <header class="thead">
                    <div class="tr">
                        <div class="th">
                            NOME
                        </div>
                        <div class="th">
                            Habilidade
                        </div>
                        <div class="th">
                            Tamanho
                        </div>
                        <div class="th">
                            Tipo
                        </div>
                        <div class="th">
                            Fonte
                        </div>
                    </div>
                </header>

                <main class="tbody">
                    <router-link 
                        v-for="especie of especies"
                        class="tr"
                        :class="{
                            active: isActive(especie)
                        }"
                        :to="especie.path"
                        @click="loadEspecie(especie)"
                    >
                        <div class="td">
                            {{especie.name}}
                        </div>
                        <div class="td">
                            {{especie.habilidade}}
                        </div>
                        <div class="td">
                            {{especie.tamanho}}
                        </div>
                        <div class="td">
                            {{especie.tipo}}
                        </div>
                        <div class="td">
                            {{especie.fonte}}
                        </div>
                    </router-link>
                </main>
            </section>
        </main>
        <aside 
            class="sidebar"
            :class="{
                'd-flex': loading,
                'justify-content-center': loading,
                'align-items-center': loading,
            }"
        >
            <div
                v-if="loading" 
                class="spinner-border text-success" 
                role="status"
            >
                <span class="visually-hidden">Loading...</span>
            </div>

            <div 
                v-else
                class="especie__descricao" 
                v-html="descricao"  
            ></div>
        </aside><!--/.sidebar-->
    </div><!--/.main__content-->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import especies from '../db/especies/especies.json'

const especieAtual = ref(null);
const descricao = ref(null);
const loading = ref(false);
const route = useRoute();

const isActive = (especie) => {
    if(!especieAtual.value) return false;

    return especieAtual.value.name == especie.name;
}

const loadEspecie = async especie => {
    const rotaDescricao = `/db/especies/${especie.descricao}`;
    
    especieAtual.value = especie;
    loading.value = true;

    const request = await fetch(rotaDescricao);
    const response = await request.text();

    descricao.value = response;
    loading.value = false;
}

onMounted(() => {
    const especieName = route.params.especie;

    if(!especieName) {
        loadEspecie(especies[0]);

        return;
    }
    
    const especie = especies.find(e => e.path.includes(especieName));
        
    if(!especie) return;

    loadEspecie(especie);
});
</script>

<style scoped>
.page__grid {
    display: grid;
    grid-template-columns: 1fr 400px;
    grid-gap: 8px;
}

.page__title {
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 1rem;
}

.tabela{
    &.disabled {
        cursor: progress;

        & > *{
            pointer-events: none;
        }
    }

    .tr {
        display: grid;
        grid-template-columns: 1fr 130px 130px 130px 130px;
    }

    .thead{
        background: var(--bx-bg);
        position: sticky;
        z-index: 2;
        border-bottom: 2px solid rgba(255, 255, 255, .09);
    }

    .th {
        font-weight: bold;
    }

    .th,
    .td {
        padding: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .tbody .td {
        border-bottom: 1px solid rgba(255, 255, 255, .09);
    }

    a{
        color: #FFF;
        text-decoration: none;
        cursor: pointer;

        &:hover,
        &.active {
            color: var(--cor-primaria);
            background: hsl(180deg, 5%, 14%)
        }
    }
}

.especie__descricao{
    padding: 0 1rem 2rem;
}

</style>

<style>
.especie__descricao{
    h2 {
        color: var(--cor-primaria);
        font-weight: 700;
        padding: 1rem 0;
        background: var(--bx-bg);
        position: sticky;
        top: 0;
        z-index: 3;
        border-bottom: 1px solid rgba(255,255,255,.09);
    }

    strong {
        color: var(--cor-primaria);
    }
}

.especie__props{
    list-style: none;
    padding-left: 0;
}
</style>