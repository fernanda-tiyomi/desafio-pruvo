<template>
   <h1>Olá Terráqueo, {{nome}} </h1>
</template>


<script>
export default{
    name:' LyfeCycle',
    data(){
        return{
            nome:'Seja bem vindo!!'
        }
    },

    created(){
        setTimeout(()=>{
            this.nome='Boa tarde!!'
        },2000);
        this.lifeCycle()
     
    },

    mounted(){
        setTimeout(()=>{
            this.nome='Boa noite!!'
        },4000) ;
        this.lifeCycle()
       
    },
    methods:{
        lifeCycle(){
            console.log("executou")
        }
    }
}

</script>