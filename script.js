 const requestURL = "tec.json";

 const tec = new XMLHttpRequest();
 tec.open("GET", requestURL);
 tec.responseType = "json";
 tec.send();


 tec.onload = function () {
    const dev = tec.response;

    const conteudoDIv = document.getElementById("conteudo");

    let htmlContent = ""; 

    for (let i = 0; i < dev.lenght; i++) {
        htmlContent += '<p>nome: ${tecnologias[i].nome}<p>'
        htmlContent += '<p>tipo: ${tecnologias[i].tipo}<p>'
        htmlContent += '<p>categoria: ${tecnologias[i].categoria}<p>'
        htmlContent += '<p>descricao: ${tecnologias[i].descricao}<p>'
        htmlContent += '<p>popularidade: ${tecnologias[i].popularidade}<p>'
        htmlContent += '<p>ano_lancamento: ${tecnologias[i].ano_lancamento}<p>'
        htmlContent += '<p>criador: ${tecnologias[i].criador}<p>'
        htmlContent += '<hr>'
        htmlContent += '<p>'

        
        conteudoDIv.innerHTML = htmlContent;
     }
};