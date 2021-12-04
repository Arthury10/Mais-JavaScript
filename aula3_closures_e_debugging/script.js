// let item1 = 1

// function funcao1() {
// 	let item2 = 2
// 	function funcao2() {
// 		let item3 = 3
// 		console.log(item1, item2, item3)
// 	}
// 	funcao2()
// }

// funcao1()

function contagem() {
	let total = 0
	return function incremento() {
		total++
		console.log(total)
	}
}

const ativarIncremento = contagem()
ativarIncremento()
ativarIncremento()
ativarIncremento()
ativarIncremento()
