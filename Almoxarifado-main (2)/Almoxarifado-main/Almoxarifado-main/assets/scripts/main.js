
/*
document.getElementById('departamento').addEventListener('focus', function(){
    const inputDepartamento = document.getElementById('departamento');
    inputDepartamento.style.backgroundColor="aliceblue"
});

document.getElementById('departamento').addEventListener('blur', function(){
    const inputDepartamento = document.getElementById('departamento');
    inputDepartamento.style.backgroundColor="white"
});
*/

function adicionarCorAoFocarInput(){
    const listInput = document.querySelectorAll("input[type=text]")

    console.log(listInput.length);
    console.log(listInput);

/*
    listInput[2].style.backgroundColor="aliceblue";

    for (let i = 0; i < listInput.length; i++) {
        listInput[i].style.backgroundColor="aliceblue";
      }
      */
     /*
     listInput.forEach(function(campo){
        campo.style.backgroundColor="aliceblue"
     })
     */

     listInput.forEach(function(item){
        item.addEventListener('focus', function(){
            item.style.backgroundColor="aliceblue";
        });

        item.addEventListener('blur', function(){
            item.style.backgroundColor="white";
        });
     })
     

}

function carregarCategorias(){

    const selectCategoria = document.getElementById('categoriaMotivo');
    selectCategoria.innerHTML="";

    const optFirst = document.createElement('option');
    optFirst.value=-1;
    optFirst.text="";
    selectCategoria.add(optFirst);
   
    console.log(categorias);
    console.log("dcdssss");
    categorias.forEach(function(categoria){
        var opt = document.createElement('option');
        opt.value=categoria.idCategoria;
        opt.text=categoria.Descricao;
        selectCategoria.add(opt);
    })
}

function carregarMotivos(){
    const selectMotivo = document.getElementById('Motivo');
    selectMotivo.innerHTML="";
    const optFirst = document.createElement('option');
    optFirst.value=-1;
    optFirst.text="";
    selectMotivo.add(optFirst);
    //words.filter((word) => word.length > 6);
    const valorCategoria = document.getElementById('categoriaMotivo').value;
    const motivosFiltrados = motivos.filter((m)=> m.idCategoria==valorCategoria);

    motivosFiltrados.forEach(function(motivo){
        var opt = document.createElement('option');
        opt.value=motivo.idMotivo;
        opt.text=motivo.Descricao;
        selectMotivo.add(opt);
    });
}

document.getElementById('categoriaMotivo').addEventListener('change', function(){
    carregarMotivos();
})

// function carregarProdutos(){
//     const selectProduto = document.getElementById('Produto');
//     selectProduto.innerHTML="";
//     const optFirst = document.createElement('option');
//     optFirst.value=-1;
//     optFirst.text="";
//     selectProduto.add(optFirst);
//     //words.filter((word) => word.length > 6);
//     const valorProduto = document.getElementById('categoriaMotivo').value;
//     const produtosFiltrados = produtos.filter((m)=> m.idCategoria==valorCategoria)

//     produtor.forEach(function(produto){
//         var opt = document.createElement('option');
//         opt.value=produto.idProduto;
//         opt.text=produto.Descricao;
//         selectProduto.add(opt);
//     });
// }

document.getElementById('CodigoProduto').addEventListener("keyup",function(){
    const codigoPesquisado = document.getElementById('CodigoProduto').value;
    let produtosFiltrados = produtos.filter((p)=> p.idProduto==codigoPesquisado);

    if (produtosFiltrados.length>0) {
        document.getElementById('DescricaoProduto').value=produtosFiltrados[0].Descricao;
        
    }else{
        document.getElementById('DescricaoProduto').value="";
    }
});

document.getElementById('idDepartamento').addEventListener("keyup",function(){
    const codigoPesquisado = document.getElementById('idDepartamento').value;
    let departamentosFiltrados = departamentos.filter((p)=> p.idDepartamento==codigoPesquisado);
    console.log(departamentosFiltrados);
    if (departamentosFiltrados.length>0) {
        document.getElementById('departamento').value=departamentosFiltrados[0].Descricao;
        
    }else{
        document.getElementById('departamento').value="";
    }
});

document.getElementById('idFuncionario').addEventListener("keyup",function(){
    const codigoPesquisado = document.getElementById('idFuncionario').value;
    let funcionariosFiltrados = funcionarios.filter((p)=> p.idFuncionario==codigoPesquisado);
    console.log(funcionariosFiltrados);
    if (funcionariosFiltrados.length>0) {
        document.getElementById('NomeFuncionario').value=funcionariosFiltrados[0].Nome;       
         document.getElementById('cargo').value=funcionariosFiltrados[0].Cargo;


        
    }else{
        document.getElementById('NomeFuncionario').value="";
        document.getElementById('cargo').value="";

    }
});

document.getElementById('btnGravar').addEventListener('click',function(){
    const elementosObrigatorios = document.querySelectorAll('[data-obrigatorio="true"]');
    // console.log(elementosObrigatorios);
    
    let validadoCamposPreenhcidos=true;

    setTimeout(function(){
        // validadoCamposPreenhcidos=true;
        if(validadoCamposPreenhcidos){
            document.getElementById('modalSucesso').style.display='block';
        }
    },1000);

    elementosObrigatorios.forEach(function(item){
        if (item.value=="" || item.value==-1){
            item.style.backgroundColor='red';
            validadoCamposPreenhcidos=false;
        }
    })

    const chkUrgenteValue = document.getElementById('urgente').checked;
    const chkMedioValue = document.getElementById('medio').checked;
    const chkBaixoValue = document.getElementById('baixo').checked;
    if (chkUrgenteValue==false && chkMedioValue==false && chkBaixoValue==false){
        const divPrioridade = document.getElementById("radioPrioridade");
        divPrioridade.classList.remove('radioPrioridade');
        divPrioridade.classList.add('radioPrioridadeDesabilitado');
        document.getElementById('urgente').classList.remove('chkPrioridade');
        document.getElementById('urgente').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('medio').classList.remove('chkPrioridade');
        document.getElementById('medio').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('baixo').classList.remove('chkPrioridade');
        document.getElementById('baixo').classList.add('chkPrioridadeDesabilitado');
        validadoCamposPreenhcidos=false;
    }
});

function eventoClickPrioridadeHabilitarCor(){
    const checkboxesPrioridade = document.querySelectorAll('.chkPrioridade'); 
    console.log(checkboxesPrioridade);
    checkboxesPrioridade.forEach(function(checkbox) {
        checkbox.addEventListener('click', function() {
            const divPrioridade = document.getElementById("radioPrioridade");
            divPrioridade.classList.add('radioPrioridade');
            divPrioridade.classList.remove('radioPrioridadeDesabilitado');
            document.getElementById('urgente').classList.add('chkPrioridade');
            document.getElementById('urgente').classList.remove('chkPrioridadeDesabilitado');
            document.getElementById('medio').classList.add('chkPrioridade');
            document.getElementById('medio').classList.remove('chkPrioridadeDesabilitado');
            document.getElementById('baixo').classList.add('chkPrioridade');
            document.getElementById('baixo').classList.remove('chkPrioridadeDesabilitado');
        });
    });
}

document.getElementById('BtnInserirItens').addEventListener('click', function(){
    const tabelaItens = document.getElementById('tabelaItens');

    const campoProduto = document.getElementById('CodigoProduto');
    const campoDescricaoProduto = document.getElementById('DescricaoProduto');
    const campoQuantidade = document.getElementById('Quantidade');
    const totalRequisicao = document.getElementById('total');

    const linha = document.createElement('tr');

    const tdCodigo = document.createElement('td');
    const tdDescricao = document.createElement('td');
    const tdQuantidade = document.createElement('td');
    const tdUnd = document.createElement('td');
    const tdPreco = document.createElement('td');
    const tdTotalLinha = document.createElement('td');
    const tdBtnRemover = document.createElement('tr');

    const produtoPesquisado = produtos.filter((p)=> p.idProduto==campoProduto.value);

    tdCodigo.innerHTML = campoProduto.value;
    tdDescricao.innerHTML = campoDescricaoProduto.value;
    tdQuantidade.innerHTML = campoQuantidade.value;
    tdUnd.innerHTML = produtoPesquisado[0].Unidade;
    tdPreco.innerHTML = produtoPesquisado[0].Preco;
    tdTotalLinha.innerHTML = campoQuantidade.value*produtoPesquisado[0].Preco;

    linha.appendChild(tdCodigo);
    linha.appendChild(tdDescricao);
    linha.appendChild(tdQuantidade);
    linha.appendChild(tdUnd);
    linha.appendChild(tdPreco);
    linha.appendChild(tdTotalLinha);
    tabelaItens.appendChild(linha);

    totalRequisicao.value = parseFloat(totalRequisicao.value) + parseFloat(campoQuantidade.value*produtoPesquisado[0].Preco);

    tdBtnRemover.appendChild(criarBtnRemover(tabelaItens, linha));
        linha.appendChild(tdBtnRemover);
        tabelaItens.appendChild(linha); 

});

    function adicionarRegraCamposSomenteNumeros(){
        const elementosAceitaSoNumeros = document.querySelectorAll('[data-only-number="true"]');
        elementosAceitaSoNumeros.forEach(function(item){
            item.addEventListener('keypress', function(e){
                    if (e.keCode<48 || e.keyCode>59){
                        e.preventDefault();
                    };
            });
        })
    }

function criarBtnRemover(tabela, objLinha, numeroLinha){
  const btnRemoverItem = document.createElement('div');
    btnRemoverItem.className = "BtnRemover";
    btnRemoverItem.id = 'btnRemover' + numeroLinha;
    btnRemoverItem.innerHTML = '<span>Remover</span>';

    btnRemoverItem.addEventListener('click', function () {
        if (objLinha && tabelaItens.contains(objLinha)) {
            tabelaItens.removeChild(objLinha);
        }

        const totalRequisicao = document.getElementById('total');
        const colunas = objLinha.getElementsByTagName('td');
        let valorLinha = colunas[5].innerText;
        

        totalRequisicao.value=parseFloat(totalRequisicao.value-parseFloat(valorLinha));
    });

    return btnRemoverItem
}

carregarCategorias();
carregarMotivos();
adicionarCorAoFocarInput();

console.log(categorias);