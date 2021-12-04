// const carro = {
// 	marca: 'Honda',
// 	modelo: 'Uno',
// 	ano: 2020
// }

// const { marca, ano, modelo } = carro

// console.log(marca)
// console.log(ano)
// console.log(modelo)

// const cliente = {
// 	nome: 'Pedro',
// 	compras: {
// 		digitais: {
// 			livros: ['Livro 1', 'Livro 2'],
// 			videos: ['Video 35', 'Video HTML']
// 		},
// 		fisicas: {
// 			cadernos: ['Caderno 1']
// 		}
// 	}
// }

// const {
// 	digitais,
// 	fisicas,
// 	digitais: { livros, videos }
// } = cliente.compras

// console.log(digitais)
// console.log(fisicas)
// console.log(livros)
// console.log(videos)

// const cliente = {
// 	nome: 'Pedro',
// 	compras: 10
// }

// const { nome: nomeAndre } = cliente

// const cliente = {
// 	nome: 'Andre',
// 	compras: 10,
// 	email: 'andre@gmail.com'
// }

// const { nome: nomeAndre, email = 'email@gmail.com' } = cliente

// console.log(email)

// const frutas = ['Banana', 'Maçã', 'Uva']

// const [fruta1, fruta2, fruta3] = frutas

// console.log(frutas[0])

// const [primeira, segunda, terceira] = ['item 1', 'item 2', 'item 3']

// console.log(primeira)

// function handleKeyboard({ key, keyCode }) {
// 	console.log(key, keyCode)
// }

// document.addEventListener('keyup', handleKeyboard)

// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button')

const btnStyles = getComputedStyle(btn)

const { backgroundColor, color, margin } = btnStyles

console.log(backgroundColor, color, margin)

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript'
let cursoInativo = 'HTML'

;[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]

console.log(cursoAtivo, cursoInativo)
// Corrija o erro abaixo
const cachorro = {
	nome: 'Bob',
	raca: 'Labrador',
	cor: 'Amarelo'
}

const { cor: bobCor } = cachorro

console.log(bobCor)
