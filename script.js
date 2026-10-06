// for --> para

// dentro do () do for terá três valores, separados por:

// valor1; valor2; valor3

// valor1 quantas vezes o loop ja ocorreu
// valor2 onde ocorre a parada
// valor3 oq fazer cada vez que acontecer o loop

// for (let i = 0; i < 10000; i++) {
//     console.log("Heitor" + i)
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// const numero = 67;

// for (let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`)
// }

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
    console.log("----------------------------------------------------")
}