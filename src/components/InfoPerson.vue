<template>
    <div>
        <p v-if= "esta_trabalhando"> Estou trabalhando no momento</p>
        <p v-else> Estou em busca de novas oportunidades</p>
        <p>Eu utilizo as seguintes tecnologias:</p>

        
        <ul v-for="(tecnologia,index) in tecnologias" v-bind:key="index">
            <li>{{tecnologia}}</li>
        
        
        </ul>
        <div>
            <button @click="showEmail">{{textoBotao}}</button>
        </div>
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
            mostrar_email: false,
            email:" fernanda.tiyomi@pruvo.app",
            meu_link:'http://instagram.com/fernanda.tiyomi',
            textoBotao:"Mostrar E-mail",
            tecnologias:['HTML', 'CSS','Vue.Js' ]

        }
    },

    methods:{
        showEmail(){
           this.mostrar_email = !this.mostrar_email
           if(!this.mostrar_email){
            this.textoBotao = "Mostrar E-mail"

           }else{
            this.textoBotao = "Esconder E-mail"
           }
        }
    }
}
</script>