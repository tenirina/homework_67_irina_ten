const baseUrl = 'https://www.breakingbadapi.com/api/characters';
const body = document.getElementsByTagName('body')[0];
let container = document.createElement('div');


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

function onPersonLoad({name, birthday, img}){
    let card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '12rem';
    let clickImg = document.createElement('a');
    clickImg.href = '#';
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
    cardBody.append(nameText);
    cardBody.append(birthdayText);
    card.append(clickImg);
    card.append(cardBody);
    container.append(card);  
    body.append(container);          
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
// $.get(baseUrl, function(data){
//     $('#data').text(data.name);
// })