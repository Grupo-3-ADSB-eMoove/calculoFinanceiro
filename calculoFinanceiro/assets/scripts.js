function calcularGanho(){
    var valorVendas = Number(inputVendas.value)
    var entradasTotais = Number(inputEntradasTotais.value)
    var qtdVendas = Number(inputEntradasCaixa.value)
    var naoCompradores = entradasTotais - qtdVendas;
    var mediaPorComprador = valorVendas/ qtdVendas;
    
    var inpSemProblemas = document.getElementById('inputSP')
    var inpPoucosProblemas = document.getElementById('inputPP') 
    var inpAlgunsProblemas = document.getElementById('inputAP')
    var inpMuitosProblemas = document.getElementById('inputMP')

    var taxaConversao = (qtdVendas/entradasTotais) * 100
    var qtdVendasPosFilas = qtdVendas;
    var qtdVendasPosConversao = qtdVendas + (qtdVendas*0.60) 
    var qtdVendasCombinando = qtdVendasPosConversao
    
    var resposta = document.getElementById('resposta')
    
  if(qtdVendas > entradasTotais){
    alert('Suas vendas não podem ser maiores que suas entradas')
  }else{
if(taxaConversao < 30){
exibeCalculo.innerHTML = `<span class="spanRed">Com esses números oferecidos sua taxa de conversão é: <b>${taxaConversao}%</b></span> <br><br>
Atualmente seu estabelecimento faz <b>${qtdVendas}</b> mensais <br><br>
Aplicando nossa solução e utilizando nossos serviços de maneira correta suas vendas podem aumentar em até <b>30%</b>
E nessa hipótese seu valor total de vendas mensais seria de <b>${(qtdVendasPosConversao).toFixed}</b>
e se sua renda acompanhasse seria de <b>R$:${(qtdVendasPosConversao *mediaPorComprador).toFixed(0)}</b><br><br>`
}
  if(taxaConversao >= 30) {
    exibeCalculo.innerHTML = `<span class="spanTexto">Com esses números oferecidos sua taxa de conversão é: <b>${taxaConversao}%</b></span> <br><br>
Atualmente seu estabelecimento faz <b>${qtdVendas}</b> mensais <br><br>
Aplicando nossa solução e utilizando nossos serviços de maneira correta suas vendas podem aumentar em até <b>60%</b>
E nessa hipótese seu valor total de vendas mensais seria de <b>${(qtdVendasPosConversao).toFixed(0)}</b> e se sua renda acompanhasse seria 
de <b>R$:${(qtdVendasPosConversao *mediaPorComprador).toFixed(0)}</b><br><br>`
  } 


  if(inpSemProblemas.checked) {
    exibeCalculo.innerHTML += `É bom que seu estabelecimento não tenha problemas com filas mas ainda podemos melhorar sua conversão`
  }
  if(inpPoucosProblemas.checked){
    exibeCalculo.innerHTML += `Segundo pesquisas depois de 2 minutos em filas, seus clientes começarão a ficar frustrados e você está começando a perde-los`
  }
  if(inpAlgunsProblemas.checked){
    qtdVendasCombinando = qtdVendasCombinando /(1-(33/100))
    qtdVendasPosFilas = qtdVendas / (1-(33/100))
    exibeCalculo.innerHTML += `Segundo a "Retail Costumer Experience" 1/3 
    dos clientes que esperam até 5 minutos nas filas abandonam a mesma logo em seguida.<br><br>
    Portanto, é possível dizer que seu estabelecimento deixou de fazer 1/3 das vendas. Caso não 
    houvesse problemas com as filas seu total de vendas seria de aproximadamente <b>${qtdVendasPosFilas.toFixed(0)}</b> 
    vendas e você teria arrecadado aproximadamente <b>R$:${(qtdVendasPosFilas*mediaPorComprador).toFixed(0)}</b><br><br>
    E se combinassemos tudo seu estabelecimento teria aproximadamente <b>${qtdVendasCombinando.toFixed(0)}</b> vendas mensais e uma renda de aproximadamente
    <b>R$:${(qtdVendasCombinando *mediaPorComprador).toFixed(0)}</b> 
    `
  }

  if(inpMuitosProblemas.checked){
    qtdVendasCombinando = qtdVendasCombinando /(1-(50/100))
    qtdVendasPosFilas = qtdVendas/(1-(50/100))
    exibeCalculo.innerHTML += `50% dos seus clientes vão desistir de comprar se esperarem mais do que cinco minutos na fila segundo pesquisas<br><br>
    Então é possível que seus problemas com filas estejam diminuindo pela metade as suas vendas 
    e se não houvessem problemas com filas seu total de vendas seria de <b>${qtdVendasPosFilas.toFixed(0)}</b> 
    e você teria arrecadado <b>R$:${(qtdVendasPosFilas*mediaPorComprador).toFixed(0)}</b><br><br>
    E se combinassemos tudo seu estabelecimento teria <b>${qtdVendasCombinando}</b> vendas mensais e uma renda de aproximadamente
    <b>R$:${(qtdVendasCombinando *mediaPorComprador).toFixed(0)}</b> 
    `
  }
    
}

}
