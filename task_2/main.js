const baseUrl = 'https://www.breakingbadapi.com/api/characters';
const body = document.getElementsByTagName('body')[0];
let container = document.createElement('div');
container.classList.add('container', 'text-center');
let row = document.createElement('div');
row.classList.add('row', 'row-cols-6');
container.append(row);
body.append(container); 


async function makeRequest(url, method='GET'){
    let response = await fetch(url, {method});
    if (response.ok){
        return await response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response
        throw error;
    }
}

function onPersonLoad({char_id, name, birthday, img, status}){
    let card = document.createElement('div');
    card.classList.add('card', 'col');
    card.style.width = '15rem';
    let clickImg = document.createElement('a');
    clickImg.href = `character.html?id=${char_id}`;
    let imgCard = document.createElement('img');
    imgCard.src = img;
    imgCard.classList.add('card-img-top');
    imgCard.alt = 'Image card'
    clickImg.append(imgCard);
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let nameText = document.createElement('h5');
    nameText.innerText = name;
    let birthdayText = document.createElement('p');
    birthdayText.innerText = birthday;
    let statusText = document.createElement('p');
    statusText.innerText = status;
    cardBody.append(nameText);
    cardBody.append(birthdayText);
    cardBody.append(statusText);
    card.append(clickImg);
    card.append(cardBody);
    row.append(card);              
}

async function onload(){   
    url = baseUrl;
    try{
        let data = await makeRequest(url);
        data.forEach(onPersonLoad);
    } catch(error) {
        console.log(error)
    }  
}

window.addEventListener('load', onload);
