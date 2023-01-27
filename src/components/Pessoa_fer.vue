<template>
 <div>
    <h2>Essa é a descrição da pessoa: {{nome}}</h2>
    <p> Utilizo as seguintes tecnologias</p>
    <ul>
        <li>Javascript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>VUE.JS</li>
        
    </ul>
 </div>
</template>

<script>
export default{
    name: 'Pessoa_Fer',

    data(){
        return{
            nome: 'Fernanda Tiyomi '
        }
    }
}
</script>
