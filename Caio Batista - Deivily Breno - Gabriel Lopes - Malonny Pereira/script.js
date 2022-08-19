let mensal = '';

function simulacao () {
    let nome = document.getElementById('nome').value;

    let prazo = document.getElementById('prazo').value;
  
    if (nome !== '' && prazo !== '') {
      
      prazo = prazo * 12;
      
      emprestimo = (parcelamento() * prazo).toFixed(2);
      
      resposta.innerHTML = nome + ", o valor de cada parcela ficou R$ " + mensal + ", e o valor total foi de R$ " + emprestimo + ".";
  
      return emprestimo;
    }
    else {
      resposta.innerHTML = "ERRO! Preencha os campos corretamente!";
    }
}

function parcelamento () {
    let valor = document.getElementById('valor').value;

    let juros = document.getElementById('juros').value;
  
    let prazo = document.getElementById('prazo').value;
  
    if (valor !== '' && juros !== '' && prazo !== '') {
      
      prazo = prazo * 12;
  
      juros = juros / 100;
  
      mensal = (valor * juros / (1 - (1/(1 + juros) ** prazo))).toFixed(2);
  
      return mensal;
    }
    else {
      resposta.innerHTML = "ERRO! Preencha os campos corretamente!";
    }
}

function tabela(nome, mensal, juros, prazo, emprestimo) {
    var tabela = document.getElementById('tabela');
    var linhas = tabela.rows.lenght;
    var linha = tabela.insertRow(linhas);
  
    var cellNome = linha.insertCell(0);
    var cellParcela = linha.insertCell(1);
    var cellMensal = linha.insertCell(2);
    var cellJuros = linha.insertCell(3);
    var cellPrazo = linha.insertCell(4);
    var cellEmprestimo = linha.insertCell(5);
  
    cellNome.innerHTML = nome;
    cellParcela.innerHTML = parcelamento();
    cellJuros.innerHTML = juros;
    cellMensal.innerHTML = mensal;
    cellPrazo.innerHTML = prazo;
    cellEmprestimo.innerHTML = simulacao();
}