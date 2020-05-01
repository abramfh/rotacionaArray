
function rotacionar(numeros, qtd) {
    for (let i = 1; i <= qtd; i++) {
        i -= numeros.length * Math.floor(i / numeros.length);
        numeros.push.apply(numeros, numeros.splice(0, i));
        console.log(numeros);
    }
}

rotacionar([3, 8, 9, 7, 6], 3);


