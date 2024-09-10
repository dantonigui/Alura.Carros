let btn = document.getElementById("btn")


//  btn.addEventListener("click", pesquisar)

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    section.innerHTML = ""
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "Insira a Marca do seu carro favorito"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = ""
    let titulo = "";
    let descricao = "";


    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()        
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {

        resultados += `   <div class="item-resultado">
                            <h2>${dado.titulo}</h2>
                            <p class="descricao-meta">${dado.descricao}</p>
                            <a href=${dado.link} target="_blank">Mais Informações</a>
                        </div> 
    `;}
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado!</p>"
    }
    section.innerHTML += resultados;
}



