'use strict';

let dados = null;
const token = 1687915884717809;

const insertDataToCards = (data) => {
    dados = data;
    console.log(dados);
};

const fetchInformation  = (url , type) => {
    switch (type) {
        case ("none"):
            fetch(url).then(response => response.json()).then(data => insertDataToCards(data));
        break;

        case ("hero"):
            let dadosRecebidos = null;
            fetch(url).then(response => response.json()).then(data => dadosRecebidos = data);
            dadosRecebidos.forEach(element => {
                
            });
        break;
    }
};

const getByName = (nome) => {

    const url = `https://www.superheroapi.com/api.php/${token}/search/${nome}`;
    fetchInformation(url , "none");
};

const getById = (id) => {

    const url = `https://www.superheroapi.com/api.php/${token}/${id}`;
    fetchInformation(url , "none");
};

const randomCard = () => {
    const number = Math.floor(Math.random() * 732);

    const url = `https://www.superheroapi.com/api.php/${token}/${number}`;
    fetchInformation(url, "none");
}


const randomSixCard = () => {
    for (let i = 1 ; i <=6 ; i++) {
    const number = Math.floor(Math.random() * 732);

    const url = `https://www.superheroapi.com/api.php/${token}/${number}`;
    fetchInformation(url, "none");
    }
}

const randomHero = () => {
    for (let i = 1 ; i <=6 ; i++) {
    const number = Math.floor(Math.random() * 732);

    const url = `https://www.superheroapi.com/api.php/${token}/${number}`;
    fetchInformation(url , "hero");
    }
}

