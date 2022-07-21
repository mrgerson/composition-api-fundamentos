<template>
    <!-- <button @click="$emit('accion')">{{textoBoton}}</button> -->
    <button @click="accionHijo">{{textoBoton}}</button>
</template>

<script>
export default {
    props: ['textoBoton'],
    setup(props, context){

        //el context se utuliza para poder acceder al emit y otros mètodos màs
        const accionHijo = () => {
            context.emit('accion')
        }

        return {accionHijo}
    }
}
</script>