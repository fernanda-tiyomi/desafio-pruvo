<template>
    <div>
        <h2>Meu formulário</h2>
        <form action="" @submit="enviarFormulario($event)" >

            <input type v-model="name"/> 
            <input type v-model="email"/> 
    
            <button @click="limpar()">Enviar</button>
        </form>
       
  
    </div>


</template>

<script>
export default{
    name: "Form_fer",


    data(){
    return{
    name: "",
    email: ""
}
},

    methods:{
    enviarFormulario(e){
        e.preventDefault();
        const name =this.name;
        const email = this.email
 
        console.log(" o nome é: " +name)
        console.log(" o email é: " +email)


    },
    limpar(){
        this.name= '',
        this.email=''
    }

}


}

</script>