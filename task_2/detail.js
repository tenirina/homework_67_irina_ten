const baseUrl = 'https://www.breakingbadapi.com/api/characters';
let container = document.getElementById('container')

let urlParams = new URLSearchParams(window.location.search);
let param = urlParams.get('id');


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


async function onDetailLoad(data){
    let card = document.createElement('div');
    card.classList.add('card', 'mb-3');
    card.style.width = '700px';    
    let cardRow = document.createElement('div');
    cardRow.classList.add('row', 'g-0');
    card.append(cardRow);
    let cardImg = document.createElement('div');
    cardImg.classList.add('col-md-4');
    cardRow.append(cardImg);
    let imgCard = document.createElement('img');    
    imgCard.src = data.img;
    imgCard.classList.add('img-fluid', 'rounded-start');
    imgCard.alt = 'Image card'
    cardImg.append(imgCard);
    let cardBody = document.createElement('div');
    cardBody.classList.add('col-md-8');
    cardRow.append(cardBody);    
    let nameText = document.createElement('h5');
    nameText.innerText = 'Name: ' + data.name;
    let birthdayText = document.createElement('p');
    age = ((new Date().getTime() - new Date(data.birthday)) / (24 * 3600 * 365.25 * 1000)) | 0
    if (age===0){
        birthdayText.innerText = 'Age not specified' 
    } else{
        birthdayText.innerText = 'Age: ' + age;
    }    
    let statusText = document.createElement('p');
    statusText.innerText = 'Status: ' + data.status;
    let nicknameText = document.createElement('p');
    nicknameText.innerText = 'Nickname: ' + data.nickname;
    let portrayedText = document.createElement('spam');
    portrayedText.innerText = 'Portrayed: ' + data.portrayed;
    let categoryText = document.createElement('p');
    categoryText.innerText = 'Category: ' + data.category;
    cardBody.append(nameText);
    cardBody.append(birthdayText);
    cardBody.append(statusText);
    cardBody.append(nicknameText);
    cardBody.append(portrayedText);
    cardBody.append(categoryText);

    cardRow.append(cardBody);
    card.append(cardRow);
    container.append(card);              

}

async function onload(){  
    url = `${baseUrl}/${param}`;
    try{
        let data = await makeRequest(url);
        data = await onDetailLoad(data[0]);
    } catch(error) {
        console.log(error)
    }  
}

window.addEventListener('load', onload);