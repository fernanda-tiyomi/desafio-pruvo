<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">ASTEROIDES</a>
      </div>
    </nav>

    <div class="container">

     

      <table>


        <tbody>

          <tr>

            <td>{{asteroides}}</td>
            
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>
import Asteroides from './services/asteroides'

export default{

data(){
  return{
    asteroides:[]
  }
},


mounted(){
  Asteroides.listar().then(resposta =>{
    console.log(resposta.data.near_earth_objects)
    this.asteroides = resposta.data.near_earth_objects
   
  })
}
}
</script>

<style>

</style>
