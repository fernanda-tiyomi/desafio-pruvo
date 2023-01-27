<template>
  
  <div>
  
      <h1>Asteroides</h1>
      <p>Meu nome é {{nome}}, sou {{cargo}} da empresa {{empresa}}</p>
      <MultiplosEventos/>
   <div class="imagem">
    <img width="300px" src="../img/astro.jpg"/>
  </div> 
   
    
    <nav>
      
        <a href="/" >Home</a>
        <a href="/">Planetas</a>
        <a href="/">Contato</a>
     
    </nav>

  </div>
   
  
</template>

<script>
import MultiplosEventos from "./MultiplosEventos"

export default{
  name:"PrimeiroComponente",
  components:{
    MultiplosEventos
  },
  data(){
    return {
      nome:'Fernanda',
      cargo: 'Estagiária',
      empresa: 'Pruvo'
    }
  }
}

</script>


<style >

.imagem{
  display: flex;
  justify-content: center;
  background-color: rgb(140, 197, 232);

}


</style>
