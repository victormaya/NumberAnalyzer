let valores = []
function adicionar(){
    let resultado = document.getElementById('res')
    resultado.innerHTML = ''
    var numero = document.getElementById('fnum')
    let lista = document.getElementById('flista')
    if (numero.value.length == 0){
        window.alert('Por Favor, digite um valor')
    }else {
        if(valores.indexOf(Number(numero.value))==-1 && Number(numero.value)>=1 && Number(numero.value)<=100){
            n = Number(numero.value)
            valores.push(n)
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            lista.appendChild(item)
        }else{
            window.alert('Valor invalido ou já encontrado na lista.')
        }
    }
}

function finalizar(){
    if (valores.length==0){
        window.alert('Por Favor, digite um valor')
    }else{

    let resultado = document.getElementById('res')
    let quantidade = valores.length
    let maior = 0
    let menor = 101
    for (var num in valores){
        if  (valores[num]>maior){
            maior = valores[num]
        }
        if (valores[num]<menor){
            menor = valores[num]
        }
            1
    }
    let soma = 0
    for (let x in valores){
        soma+=valores[x]

    }
    let media = soma/quantidade
    resultado.innerHTML = `Ao todo, temos ${quantidade} números cadastrados.<br>`
    resultado.innerHTML += `O maior valor informado foi ${maior}.<br>`
    resultado.innerHTML += `O menor valor informado foi ${menor}.<br>`
    resultado.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
    resultado.innerHTML += `A média dos valores digitados é ${media}.<br>   `
}

}
