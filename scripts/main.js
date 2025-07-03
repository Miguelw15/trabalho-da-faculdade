const body = document.querySelector('body');

// Estilizando botão que representa a página atual
function markedButton(page){
    console.log(page)
    const button = document.getElementById(page);
    button.style.background = 'white'
    button.style.color = 'black'
}

// Renderizando Header
function renderHeader() {
    let header = document.createElement('header');
    let nav = document.createElement('nav');

    // Criando e adicionando links e redirecionamentos
    let sobreMim = document.createElement('a');
    sobreMim.href ='/';
    sobreMim.textContent = 'SOBRE MIM';
    sobreMim.id = 'sobre-mim';

    let formacao = document.createElement('a'); 
    formacao.href = '/templates/formacao.html';
    formacao.textContent = 'FORMAÇÃO';
    formacao.id = 'formacao';

    let portfolio = document.createElement('a');
    portfolio.href = '/templates/portfolio.html';
    portfolio.textContent = 'PORTFOLIO';
    portfolio.id = 'portfolio';

    let contato = document.createElement('a');
    contato.href = '/templates/contato.html';
    contato.textContent = 'CONTATO';
    contato.id = 'contato';

    nav.append(sobreMim,formacao,portfolio,contato);
    header.appendChild(nav);
    body.appendChild(header);

}

// Renderizando o footer
function renderFooter(){
    let footer = document.createElement('footer');

    let links = document.createElement('div');
    links.classList.add('links');

    let tittle = document.createElement('p');
    tittle.textContent = 'LINKS';

    let nav = document.createElement('nav');

    let instagram = document.createElement('a');
    instagram.href = 'https://www.instagram.com/slk_migel';
    instagram.target = '_blank';
    instagram.classList.add('link');
    let instagramImg = document.createElement('img');
    instagramImg.src = '/assets/Instagram.svg';
    instagram.appendChild(instagramImg);
    instagram.appendChild(document.createTextNode('Instagram'));

    let gitHub = document.createElement('a');
    gitHub.href = 'https://github.com/Miguelw15';
    gitHub.target = '_blank';
    gitHub.classList.add('link');
    let gitHubImg = document.createElement('img');
    gitHubImg.src = '/assets/GitHub.svg';
    gitHub.appendChild(gitHubImg);
    gitHub.appendChild(document.createTextNode('GitHub'));

    let linkedIn = document.createElement('a');
    linkedIn.href = 'https://www.linkedin.com/in/miguel-gonçalves-1b7494257/';
    linkedIn.target = '_blank';
    linkedIn.classList.add('link');
    let linkedInImg = document.createElement('img');
    linkedInImg.src = '/assets/LinkedIn.svg';
    linkedIn.append(linkedInImg,document.createTextNode('LinkedIn'));

    let copyright = document.createElement('p');
    copyright.textContent = '© 2025 Miguel. All rights reserved.';

    nav.append(instagram,gitHub,linkedIn);
    links.append(tittle,nav);
    footer.append(links,copyright);
    body.appendChild(footer);
}

renderHeader();
renderFooter();
markedButton(currentPage);
