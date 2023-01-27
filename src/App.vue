<template>
  <div id="app">
    
   
      
        <Header_fer/>
        <primeiro-componente/>
        <LifeCycle/>
        <InfoPerson/>
        <Form_fer/>
        <Pessoa_Fer/>
        <Footer_fer/>
      
    
      
    

    <div class="container">


      <div id='busca'>
        <input v-model="inputValue" type="text" placeholder="Digite o que você procura" />
        <button @click="find"  id="btnBusca">Ok</button>
      </div>
    
        

      <div class="nomes">
        
        <table>
        
         
          <ul class="container-lista">
            <li v-for="(asteroide, index) in asteroides" :key="index" class="lista">
              {{ asteroide.name }}
            </li>
          </ul>
          
        
    
        </table>
      </div>
        
    </div>
  </div>
</template>

<script>
import Asteroides from "./services/asteroides";
import collect from 'collect.js'
import PrimeiroComponente from "./components/PrimeiroComponente.vue";
import LifeCycle from "./components/LifeCycle.vue";
import InfoPerson from "./components/InfoPerson.vue"
import Pessoa_Fer from "./components/Pessoa_fer.vue"
import Header_fer from "./components/Header_fer.vue"
import Footer_fer from "./components/Footer_fer.vue"
import Form_fer from "./components/Form_fer.vue"


export default {
  data() {
    return {
      asteroides: [],
      inputValue: '',
     
    };

  },

  components:{
        PrimeiroComponente,
        LifeCycle,
        InfoPerson,
        Pessoa_Fer,
        Header_fer,
        Footer_fer,
        Form_fer
   
      },


  mounted() {
    this.find()
  },
  methods:{
    find () {
      Asteroides.listar()
        .then((resposta) => {
          const dados = collect(resposta.data.near_earth_objects).toArray()
          this.asteroides = collect(dados).collapse().all()
          if (this.inputValue !== '' ) {
            this.asteroides = this.asteroides.filter(item => item.name === this.inputValue)
          }
        })
    }

  }
 
};
</script>

<style>


#app{
  background-color: rgb(221, 238, 253);
}
h1{
  color: rgb(99, 4, 91);
  text-align: center;
  text-decoration: dashed;
  font-size: 50px;
}

.nomes{
  display: flex;
  justify-content: center;
  

  
}

#busca{
  display: flex;
  justify-content: center;
}

.lista{

  border: 1px solid rgb(74, 6, 105);
  margin: 5px;
  margin-bottom: 5px;

}
.container-lista{
  font-display: flex;
  justify-content: center;
}


  
#btnBusca:hover {
    background:#0dd4d4; 
    }
  

</style>
