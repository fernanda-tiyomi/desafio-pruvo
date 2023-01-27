<template>
<div>
<ul>
    <li> <a href="#"> Home</a> </li>
    <li> <a href="#">Contato</a> </li>
</ul>
</div>
</template>

<script>
export default{
    name: "Header_fer"
}
</script>

<style scoped>
ul{
    list-style: none;
    display: flex;
}
li{
    margin-right:10px ;
}
a{
    color: rgb(3, 29, 49);
    text-decoration: none; 
    transition: .5s;
    font-size:30px;
}
a:hover{
    color:aquamarine
}


</style>