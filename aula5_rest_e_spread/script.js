// function perimetro(lado, totalLados = 4) {
// 	const argArray = Array.from(arguments)
// 	console.log(argArray)
// 	argArray.forEach(arg => {
// 		console.log(arg)
// 	})
// 	return lado * totalLados
// }

// console.log(perimetro(10, 4))

// function perimetro(lado, totalLados, ...listaArgumentos) {
// 	console.log(listaArgumentos)
// 	return lado * totalLados
// }

// console.log(perimetro(10, 4, 30, 'oi', 'teste'))

// function anunciarGanhadores(premio, ...listaGanhadores) {
// 	listaGanhadores.forEach(ganhador => {
// 		console.log(`O ganhador do prêmio ${premio} é ${ganhador}`)
// 	})
// }

// anunciarGanhadores('FIFA', 'João', 'Maria', 'José')

// const frutas = ['Banana', 'Maçã', 'Uva']
// const legumes = ['Batata', 'Cenoura', 'Cebola']

// const frutasLegumes = [...frutas, 'pizza', ...legumes]

// console.log(frutasLegumes)

// const todosOsNumeros = [
// 	3, 5, 7, 9, 11, 13, 15, 2, 5, 25, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100, 3, 5, 7, 9, 11, 13, 15, 2, 5, 25, 10, 15, 20, 30,
// 	40, 50, 60, 70, 80, 90, 100, 3, 5, 7, 9, 11, 13, 15, 2, 5, 25, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100
// ]

// const numeroMaximo = Math.max(...todosOsNumeros)

// console.log(numeroMaximo)

// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = 'blue', color = 'red') {
	const buttonElement = document.createElement('button')
	buttonElement.style.background = background
	buttonElement.style.color = color
	return buttonElement
}

const redButton = createButton()
console.log(redButton)

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango']
const comidas = ['Pizza', 'Batata']

comidas.push(...frutas)

console.log(comidas)
