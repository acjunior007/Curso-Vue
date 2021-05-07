export default {
	computed: {
		fraseComVirgula() {
			return this.frase.replace(/\s/g, ',');
		},
		fraseCoomTamanho() {
			return this.frase.split(' ').map(p => `${p} (${p.length})`).join(' ')
		}
	}    
}