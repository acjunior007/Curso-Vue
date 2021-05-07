<template>
    <div>
        <ul>
            <li v-for="(fruta, i) in frutas" :key="i">{{ fruta }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
</template>

<script>
import usuarioMixin from './usuarioMixin'
import frutasMixin  from './frutasMixin'
export default {
    mixins: [frutasMixin, usuarioMixin],
    created() {
        console.log('Created - Frutas.vue')
    }    
}
</script>

<style>

</style>
