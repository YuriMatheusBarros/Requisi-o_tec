const requestURL = "tec.json";

const tec = new XMLHttpRequest();
tec.open("GET", requestURL);
tec.responseType = "json";
tec.send();

tec.onload = function () {
    let data = tec.response;
    let dev = data.tecnologias;
    const conteudoDIv = document.getElementById("conteudo");

    let htmlContent = "";

    for (let i = 0; i < dev.length; i++) {
        htmlContent += `<p>Nome: ${dev[i].nome}</p>`;
        htmlContent += `<p>Tipo: ${dev[i].tipo}</p>`;
        htmlContent += `<p>Categoria: ${dev[i].categoria}</p>`;
        htmlContent += `<p>Descrição: ${dev[i].descricao}</p>`;
        htmlContent += `<p>Popularidade: ${dev[i].popularidade}</p>`;
        htmlContent += `<p>Ano de Lançamento: ${dev[i].ano_lancamento}</p>`;
        htmlContent += `<p>Criador: ${dev[i].criador}</p>`;
        
        dev[i].bibliotecas_populares?.forEach(bibliotecas => {       
            htmlContent += `<h4>Biblioteca Popular:</h4>`;
            htmlContent += `<p>Nome: ${bibliotecas.nome}</p>`;
            htmlContent += `<p>Descricao: ${bibliotecas.descrição}</p>`;
            htmlContent += `<p>Ano de lançamento: ${bibliotecas.ano_lancamento}</p>`;
            htmlContent += `<p>Desenvolvedor: ${bibliotecas.desenvolvedor}</p>`  
        });
        htmlContent += `<hr>`
    }
    conteudoDIv.innerHTML = htmlContent;
};
