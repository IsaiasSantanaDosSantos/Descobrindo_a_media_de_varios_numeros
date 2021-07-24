var nuns = document.getElementById('nuns') 
var nunsAdd = document.getElementById('nunsAdd')
var resultado = document.getElementById('result')
var lista = []

function isNumero(n) {
    if(Number(n) != 0) {
        return true
    } else {
        return false
    }
}

function incluir() { // quando clicar no boão
   if (isNumero(nuns.value)) { //Se for número
       lista.push(Number(nuns.value)) //Incluir o valor na lista
       var item = document.createElement('option') //Criar elemento "item"
        item.text = `Você adicionou ${nuns.value}.` //Nostrar texto no elemento criado
        nunsAdd.appendChild(item) //Adicional elemento filho na variável item criada
        resultado.innerHTML = ' ' //Esvaziar resultado ao incluir número
   } else { //Se nuns estiver vazia...
       alert('Precisa adicionar um valor.')
}
nuns.value = '' //Limpar campo
nuns.focus() //Deixar pronto para digitar novamente

}

function calcular() { //Ao clicar no botão calcular...
    if (lista.length <= 1) { //Se a lista tiver a quantidade nenor ou igual a 1...
        alert('Para calcular a média é preciso ter 2 números ou mais na lista.\nPor favor, adicionar mais números!')
    } else { 
        var totalNunsLista = lista.length //Total de item na lista
        var maiorNuns = lista[0] //Maior valor sempre começa no primerio item
        var menorNuns = lista[0] //Menor valor sempre começa no primerio item
        var media = 0 //Média a principio tem que ser 0
        var soma = 0 //Soma a principio tem que ser 0
        //Para saber qual é o maior ou o menor número da lista.
        for (var posicao in lista) { //Para cada posição na lista...
            soma += lista[posicao] //0 = 0 + posições da lista
            if (lista[posicao] > maiorNuns) { //Se posições da lista for maior que maior Número...
                maiorNuns = lista[posicao] // O maior será o da posição lista...
            } if (lista[posicao] < menorNuns) { //Se posições da lista for menor que o menor número...
                menorNuns = lista[posicao] // O menor será o da posição lista...
            }
        }
        media = soma / totalNunsLista //Media dos números
        resultado.innerHTML= '' //Limpar resuldados anteriores
        resultado.innerHTML += `<p>Você digitou ${totalNunsLista} números;</p><br>`
        resultado.innerHTML += `O <strong style="Color: blue;">maior</strong> número digitado foi o <strong style="Color: blue;">${maiorNuns}</strong>;<br>`
        resultado.innerHTML += `O <strong style="Color: blue;">menor</strong> número digitado foi o <strong style="Color: blue;">${menorNuns}</strong>;<br>`
        resultado.innerHTML += `A <strong style="Color: blue;">soma</strong> de todos os números digitados é <strong style="Color: blue;">${soma}</strong> e<br>`
        resultado.innerHTML += `A <strong style="Color: blue;">média</strong> te todos os números digitados é <strong style="Color: blue; font-size: 20px;">${media}</strong>.`
    }
}