export default {
    state: {
        quantidade: 2,
        preco: 19.90        
    },

    // equivalente so setters
    mutations: {
        setQuantidade(state,payload) {
            state.quantidade = payload
        },

        setPreco(state, payload) {
            state.preco = payload
        }
    }    
}