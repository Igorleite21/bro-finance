function tipoOperacao() {
    const transacao = document.getElementById("sl_tipo_transacao").value
    const descricao = document.getElementById("txt_descricao").value
    const valor = document.getElementById("txt_valor").valueAsNumber



    if (transacao != "" && descricao != "" && valor > 0) {
        realizaOperacao(transacao, descricao, valor)
    }
}

function realizaOperacao(transacao, descricao, valor) {

    const icones = {
        entrada: '<i class="bi bi-arrow-up-circle"></i>',
        saida: '<i class="bi bi-arrow-down-circle"></i>'
    }

    const novosValores = {
        total: "",
        valorOperacao: ""
    }

    let iconeHTML = ""


    const valoresPaineis = {
        entrada: document.getElementById("valor_entrada").innerText,
        saida: document.getElementById("valor_saida").innerText,
        total: document.getElementById("valor_total").innerText


    }

    if (transacao == "entrada") {

        novosValores.valorOperacao = valor + Number(valoresPaineis.entrada)

        novosValores.total = valor + Number(valoresPaineis.total)

        document.getElementById("valor_entrada").innerText = novosValores.valorOperacao

        iconeHTML = icones.entrada


    } else {
    

        novosValores.valorOperacao = valor + Number(valoresPaineis.saida)

        novosValores.total = Number(valoresPaineis.total) - valor

        document.getElementById("valor_saida").innerText = novosValores.valorOperacao

        iconeHTML = icones.saida


    }

    

    document.getElementById("valor_total").innerText = novosValores.total

    const html = `
                    <div class="registro">
                    <div class="linha">
                        <span>
                            ${iconeHTML}
                        </span>
                    </div>

                    <div class="linha">
                        <span>
                            ${descricao}
                        </span>
                    </div>

                    <div class="linha">
                        <span>
                            ${valor}
                        </span>
                    </div>

                    <div class="linha">
                        <span>
                            ${dataAtual()}
                        </span>
                    </div>
    `

    document.getElementById("lista_transacoes").innerHTML += html

}

function dataAtual(){
    const data = new Date()
    const DataAtual = data.toLocaleDateString()

    return DataAtual
} 

