function calcularGanho(){
    var valorVendas = Number(inputVendas.value)
    var entradasTotais = Number(inputEntradasTotais.value)
    var qtdVendas = Number(inputEntradasCaixa.value)

    var naoCompradores = entradasTotais - qtdVendas;
    var mediaPorComprador = valorVendas/ qtdVendas;
    
    
    
    var inpSemProblemas = document.getElementById('inputSP')   // Mensagem apenas de aviso para melhorar taxa de conversão
    var inpPoucosProblemas = document.getElementById('inputPP') // Mensagem dizendo que o cliente está começando a perder clientes
    var inpAlgunsProblemas = document.getElementById('inputAP') // Perdendo 1/3 dos clientes
    var inpMuitosProblemas = document.getElementById('inputMP') // Perdendo de 1/2 dos clientes

    var taxaConversao = (qtdVendas/entradasTotais) * 100   // Taxa de conversão da loja

    var qtdVendasPosFilas = qtdVendas;      // Usarei essa váriavel mais tarde pra atribuir o valor de aumento das vendas e renda após a melhora nas filas

    var qtdVendasPosConversao = qtdVendas + (qtdVendas*0.60) // Após um aumento nas vendas de 60% que foi a melhor hipótese segundo pesquisas

    var qtdVendasCombinando = qtdVendasPosConversao   // Isso é contado após a taxa de conversão ser aumentada em 60% resultando na melhor hipótese
    
    var resposta = document.getElementById('resposta')
    
   if(qtdVendas > entradasTotais){
    alert('Suas vendas não podem sem maiores que suas entradas')
   }else{
if(taxaConversao < 30){
exibeCalculo.innerHTML = `<span class="spanRed">Com esses números oferecidos sua taxa de conversão é: <b>${taxaConversao}%</b></span> <br><br>
Atualmente seu estabelecimento faz ${qtdVendas} mensais <br><br>
Aplicando nossa solução e utilizando nossos serviços de maneira correta suas vendas podem aumentar em até <b>60%</b>
E nessa hipótese seu valor total de vendas mensais seria de ${(qtdVendasPosConversao).toFixed}
e se sua renda acompanhasse seria de R$:${(qtdVendasPosConversao *mediaPorComprador).toFixed(0)}<br><br>`
}
  if(taxaConversao >= 30) {
    exibeCalculo.innerHTML = `<span class="spanTexto">Com esses números oferecidos sua taxa de conversão é: <b>${taxaConversao}%</b></span> <br><br>
Atualmente seu estabelecimento faz ${qtdVendas} mensais <br><br>
Aplicando nossa solução e utilizando nossos serviços de maneira correta suas vendas podem aumentar em até <b>60%</b>
E nessa hipótese seu valor total de vendas mensais seria de ${(qtdVendasPosConversao).toFixed(0)} e se sua renda acompanhasse seria 
de R$:${(qtdVendasPosConversao *mediaPorComprador).toFixed(0)}<br><br>`
  } 




    if(inpSemProblemas.checked) {
        exibeCalculo.innerHTML += `É bom que seu estabelecimento não tenha problemas com filas mas ainda podemos melhorar sua conversão`
   }
   if(inpPoucosProblemas.checked){
        exibeCalculo.innerHTML += `Segundo pesquisas depois de 2 minutos em filas, seus clientes começarão a ficar frustrados e você está começando a perde-los`
   }
   if(inpAlgunsProblemas.checked){

    // preço_com_desconto_percentual_incluído / (1- taxa_de_desconto) / 100)
    // inverter desconto

    qtdVendasCombinando = qtdVendasCombinando /(1-(33/100))

    qtdVendasPosFilas = qtdVendas / (1-(33/100))

    exibeCalculo.innerHTML += `Segundo a "Retail Costumer Experience" 1/3 
    dos clientes que esperam até 5 minutos nas filas abandonam a mesma logo em seguida.<br><br>
                                                         
    Portanto, é possível dizer que seu estabelecimento deixou de fazer 1/3 das vendas. Caso não 
    houvesse problemas com as filas seu total de vendas seria de  ${qtdVendasPosFilas.toFixed(0)} 
    vendas e você teria arrecadado R$:${(qtdVendasPosFilas*mediaPorComprador).toFixed(0)}<br><br>
    E se combinassemos tudo seu estabelecimento teria <b>${qtdVendasCombinando.toFixed(0)}</b> vendas mensais e uma renda de 
    <b>R$:${(qtdVendasCombinando *mediaPorComprador).toFixed(0)}</b> 
    `
   }

   if(inpMuitosProblemas.checked){

    qtdVendasCombinando = qtdVendasCombinando /(1-(50/100))

    qtdVendasPosFilas = qtdVendas/(1-(50/100))
    exibeCalculo.innerHTML += `50% dos seus clientes vão desistir de comprar se esperarem mais do que cinco minutos na fila segundo pesquisas<br><br>
    Então é possível que seus problemas com filas estejam diminuindo pela metade as suas vendas 
    e se não houvessem problemas com filas seu total de vendas seria de ${qtdVendasPosFilas.toFixed(0)} 
    e você teria arrecadado R$:${(qtdVendasPosFilas*mediaPorComprador).toFixed(0)}<br><br>
    E se combinassemos tudo seu estabelecimento teria <b>${qtdVendasCombinando}</b> vendas mensais e uma renda de 
    <b>R$:${(qtdVendasCombinando *mediaPorComprador).toFixed(0)}</b> 
    `
   }
    
}

}
