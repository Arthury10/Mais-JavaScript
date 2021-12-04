// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.')
priceNumber('R$ 99,99')

console.log(priceNumber('R$ 99,99'))
// Crie uma IIFE e isole o escopo
// de qualquer código JS.

const instrumento = 'Guitarra'

;(() => {
	const instrumento = 'Bateria'
	console.log(instrumento)
})()

console.log(instrumento)

// Como podemos utilizar
// a função abaixo.
const active = callback => callback()

active(() => console.log('teste'))
