'use strict';

let dados = null;
const searchInput = document.getElementById('searchBar');
const searchButton = document.getElementById('searchIcon');
const token = 1687915884717809;

const randomId = () => {
    const number = Math.floor(Math.random() * 732);
    return number;
};

const clearContainer = (container) => {
    container.innerHTML = "";  
};

const createCard = (data) => {
    const div = document.createElement('div');
    div.classList.add('viewCard');
    div.innerHTML = `
    <img src="${data.image.url}" alt="Poster do Personagem">
        <h1>${data.name}</h1>
        <h2>${data.biography["full-name"]}</h2>
        <div class="saibaMaisContainer">
            <h2>${data.biography['publisher']}</h2>
            <div class="saibaMais">Saiba mais</div>
        </div>
    
    `;
    
    return div;
};

const singleInsertDataToCards = (data, container) => {
    const containerForDiv = document.getElementById(container);
    console.log(data);
    dados = data
    containerForDiv.appendChild(createCard(dados));
};


const insertDataToCards = (data, container) => {
    const containerForDiv = document.getElementById(container);
    clearContainer(containerForDiv);
    dados = data.results
    dados.forEach(element => {
        containerForDiv.appendChild(createCard(element));
    });
};

const fetchInformation  = (url , type , container) => {
    const getCharacter = (alignment) => {
        const number = randomId();
        const url = `https://www.superheroapi.com/api.php/${token}/${number}`;
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

        case ("random"):
            fetch(url).then(response => response.json()).then(data => singleInsertDataToCards(data , container));
        break;

        default:
            fetch(url).then(response => response.json()).then(data => insertDataToCards(data , container));
        break;

    }
};

const getByName = (nome) => {
    const url = `https://www.superheroapi.com/api.php/${token}/search/${nome}`;
    console.log(url);
    fetchInformation(url , '', 'searchCard');
};

const getById = (id,container) => {

    const url = `https://www.superheroapi.com/api.php/${token}/${id}`;
    fetchInformation(url,'',container);
};

const randomCard = (container) => {
    const number = randomId();
    const url = `https://www.superheroapi.com/api.php/${token}/${number}`;
    fetchInformation(url, "random",container);
}


const getCharacterByAlignment = (alignment,) => {
    fetchInformation( "" , alignment,container);
}

const all = () => {
    for (let i = 1 ; i < 722; i++) {
    const url = `https://www.superheroapi.com/api.php/${token}/${i}`;
    fetchInformation(url);
    }
};

const getSearchValue = () => {
    getByName(searchInput.value)
};

searchButton.addEventListener('click' , getSearchValue );

for (let i = 0 ; i < 8 ; i++) {
    randomCard('cardDestaque');
}