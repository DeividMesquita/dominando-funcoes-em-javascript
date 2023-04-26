function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Deivid",
    idade: 21,
}
const pessoa2 = {
    nome: "Ingrid",
    idade: 18,
}

const animal = {
    nome: "Pandora",
    idade: 2,
    raca: "cachorro",
}

console.log(calculaIdade.apply(pessoa1, [30]));