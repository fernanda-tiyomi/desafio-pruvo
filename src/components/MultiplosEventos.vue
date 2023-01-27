<template>
    <div>
        <button @click="primeiro($event), segundo($event)">Multiplos eventos</button>
        <p>{{multiplos_eventos}}</p>
    </div>
</template>

<script>
export default{
    name:"MultiplosEventos",
    data(){
        return {
            multiplos_eventos:""
        }
    },
    methods:{
        primeiro(){
            this.multiplos_eventos = "primeiro evento ativado"

        },
        segundo(){
            setTimeout(()=> this.multiplos_eventos =" segundo evento ativado",1500)
        }
    }
}

 

</script>

<style>

div{
    margin:100px;
}
</style>