<template>
    <div>
        <p v-if= "esta_trabalhando"> Estou trabalhando no momento</p>
        <p v-else> Estou em busca no novas oportunidades</p>
        <p>Eu utilizo as seguintes tecnologias:</p>
        
        <ul>
            <li>JavaScript</li>
        <li>PHP</li>
        <li>Python</li>
        </ul>
        <p v-show=" mostrar_email">Mande uma mensagem para: {{email}}</p>
        <p>Para acessar meu portfolio basta<a v-bind:href="meu_link" target ="_blank"> clicar aqui!! </a> clicar aqui!! </p>
        <Foto_Fer/>
    </div>

</template>

<script>
import Foto_Fer from "../components/Foto_Fer.vue"
export default{
    name: 'InfoPerson',
    components:{
        Foto_Fer
    },
    data(){
        return {
            esta_trabalhando : true,
            mostrar_email: true,
            email:" fernanda.tiyomi@pruvo.app",
            meu_link:'http://instagram.com/fernanda.tiyomi'

        }
    }
}
</script>