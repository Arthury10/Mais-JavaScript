// const frutas = ['Banana', 'Morango', 'Uva']
// const frase = 'Isso é JavaScript'

// for (const fruta of frutas) {
// 	console.log(fruta)
// }

// // for (const char of frase) {
// // 	console.log(char)
// // }

// const buttons = document.querySelectorAll('button')

// for (const btn of buttons) {
// 	btn.style.color = 'blue'
// }

// console.log(...buttons)
// // fetch('https://pokeapi.co/api/v2/pokemon/').then(({ headers }) =>
// // 	console.log(headers)
// // )

// const carro = {
// 	marca: 'Ford',
// 	ano: 2018
// }

// Object.defineProperties(carro, {
// 	rodas: {
// 		value: 4,
// 		enumerable: true
// 	}
// })

// for (const key in carro) {
// 	console.log(carro[key])
// }

// for (const f in frutas) {
// 	console.log(frutas[f])
// }

// const btnUnico = document.querySelector('button')
// const btnStyles = getComputedStyle(btnUnico)

// for (const style in btnStyles) {
// 	console.log(`${style}: ${btnStyles[style]}`)
// }

// let i = 0

// do {
// 	console.log(i++)
// } while (i <= 500)
/**************************************/

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const ul = document.querySelector('ul')

ul.innerHTML = `
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
	<li>Item 4</li>
`

console.log(ul)

const li = document.querySelectorAll('li')

for (const l of li) {
	l.classList.add('lista')
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const windowKey in window) {
	console.log(windowKey + ': ' + window[windowKey])
}
