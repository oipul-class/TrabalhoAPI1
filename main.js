'use strict';

let id = 485;


const fetchInformation  = (url) => {
    fetch(url).then(response => response.json()).then(data => console.log(data));
};


const getId = () => {
    const urlId = id;
    const token = 1687915884717809;

    const url = `http://superheroapi.com/api/${token}/${urlId}`;
    console.log(`url = ${url}`);
    fetchInformation(url);
};




