'use strict';

let dados = null;


const insertDataToCards = (data) => {
    dados = data;
};

const fetchInformation  = (url) => {
    fetch(url).then(response => response.json()).then(data => insertDataToCards(data));
};


const getId = (nome) => {
    const token = 1687915884717809;

    const url = `https://www.superheroapi.com/api.php/${token}/search/${nome}`;
    fetchInformation(url);
};



