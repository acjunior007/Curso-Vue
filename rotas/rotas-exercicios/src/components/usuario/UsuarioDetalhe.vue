<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <hr>
        <p><strong>Código: </strong> {{ id }} </p>
        <!-- <router-link :to="`/usuario/${id}/editar`" tag="button" primario>Editar</router-link> -->
        <router-link 
        :to="{ name: 'editarUsuario', params: { id },
            query: { completo: true, lingua: 'pt' },
            hash: '#rodape' }" tag="button" primario>
            Editar</router-link>
    </div>
</template>

<script>
export default {
    props: ['id'],
    beforeRouteEnter (to, from, next) {
        // aqui o componente ainda nao foi criado, por esse motivo, nao tem acesso a propriedade id
        console.log('Dentro do componente - UsuarioDetalhe')
        next()
    }
    // data() {
    //     return {
    //         id: this.$router.params.id
    //     }
    // },
    // watch: {
    //     $$route(to, from) {
    //         this.id = to.params.id
    //     }
    // }
}
</script>

<style>

</style>
