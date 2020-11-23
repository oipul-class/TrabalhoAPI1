'use strict';

let dados = null;
const token = 1687915884717809;

const randomId = () => {
    const number = Math.floor(Math.random() * 732);
    return number;
};


const insertDataToCards = (data) => {
    dados = data;
    console.log(dados);
};

const fetchInformation  = (url , type) => {

    const getCharacter = (alignment) => {
        const number = randomId();
        const url = `https://www.superheroapi.com/api.php/${token}/${number}`;
        console.log(url);
        fetch(url).then(response => response.json()).then(data => {
            if (data.biography.alignment==alignment) {
                insertDataToCards(data);
            }else {
                return getCharacter(alignment);
            }
        });

    };

    switch (type) {

        //case:

        case ("hero"):
            getCharacter("good");
        break;

        case ("villain"):
            getCharacter("bad");
        break;

        case ("neutral"):
            getCharacter("neutral");
        break;

        default:
            fetch(url).then(response => response.json()).then(data => insertDataToCards(data));
        break;
    }
};

const getByName = (nome) => {
    const url = `https://www.superheroapi.com/api.php/${token}/search/${nome}`;
    fetchInformation(url);
};

const getById = (id) => {

    const url = `https://www.superheroapi.com/api.php/${token}/${id}`;
    fetchInformation(url);
};

const randomCard = () => {
    const number = randomId;
    const url = `https://www.superheroapi.com/api.php/${token}/${number}`;
    fetchInformation(url, "random");
}


const getCharacterByAlignment = (alignment) => {
    fetchInformation( "" , alignment);
}

const all = () => {
    for (let i = 1 ; i < 722; i++) {
    const url = `https://www.superheroapi.com/api.php/${token}/${i}`;
    fetchInformation(url);
    }
};

