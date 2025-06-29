const body = document.querySelector('body');

// Estilizando botão que representa a página atual
function markedButton(button){

}

// Renderizando Header
function renderHeader() {
    let header = document.createElement('header');
    let nav = document.createElement('nav');

    // Criando e adicionando links e redirecionamentos
    let sobreMim = document.createElement('a');
    sobreMim.href ='/';
    sobreMim.textContent = 'SOBRE MIM';

    let formacao = document.createElement('a'); 
    formacao.href = '/templates/formacao.html';
    formacao.textContent = 'FORMAÇÃO';

    let portfolio = document.createElement('a');
    portfolio.href = '/templates/portfolio.html';
    portfolio.textContent = 'PORTFOLIO';

    let contato = document.createElement('a');
    contato.href = '/templates/contato.html';
    contato.textContent = 'CONTATO';

    nav.append(sobreMim,formacao,portfolio,contato);
    header.appendChild(nav);
    body.appendChild(header)
}

renderHeader()