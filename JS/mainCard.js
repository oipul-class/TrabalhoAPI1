'use strict';

// id do personagem
const id = sessionStorage.getItem('characterId');

//token 

const token = 1687915884717809;

//url 

const url = `https://www.superheroapi.com/api.php/${token}/${id}`;

console.log(url);

// nomes
const nome = document.getElementById('heroName');
const nomeCompleto = document.getElementById('heroFullName');

// imagem

const imagem = document.getElementById('CharacterImage');

// status bars
const statusInteligencia = document.getElementById('statusInteligencia');
const statusForca = document.getElementById('statusForca');
const statusVelocidade = document.getElementById('statusVelocidade');
const statusDurabilidade = document.getElementById('statusDurabilidade');
const statusPoder = document.getElementById('statusPoder');
const statusCombate = document.getElementById('statusCombate');

// Aparição / publicadora

const aparicao = document.getElementById('primeiraAparicao');
const publicadora = document.getElementById('publisher');

// peso e altura
const altura = document.getElementById('alturaPersonagem');
const peso = document.getElementById('pesoPersonagem');

const statusPointsSize = (statusPoint , dados) => {
    const status = dados !=null ? dados : 0;
    tamanho = status/2;
    console.log(tamanho);
    statusPoint.style.width = `${tamanho}vw`;
};

const preencherDados = (dados) => {
    nome.textContent = dados.name;
    nomeCompleto.textContent = dados.biography['full-name'];
    aparicao.textContent += dados.biography["first-appearance"];
    publicadora.textContent += dados.biography.publisher;
    altura.textContent += dados.appearance.height[1];
    peso.textContent += dados.appearance.weight[1];
    imagem.src = dados.image.url;

    statusPointsSize(statusInteligencia , dados.powerstats.intelligence);
    statusPointsSize(statusForca , dados.powerstats.strength);
    statusPointsSize(statusVelocidade , dados.powerstats.speed);
    statusPointsSize(statusDurabilidade , dados.powerstats.durability);
    statusPointsSize(statusPoder , dados.powerstats.power);
    statusPointsSize(statusCombate , dados.powerstats.combat);
    
};

fetch(url).then(response => response.json()).then(data => preencherDados(data));