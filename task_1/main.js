let buttonPlus = document.getElementById('add-item-btn');
let containers = document.getElementById('container');
let newDiv = document.createElement('div');
let newElement = document.createElement('p');
let newButton = document.createElement('button');

buttonPlus.addEventListener('click', function(evt){    
    newDiv.classList.add('notif')
    newElement.innerText = 'Description alert'
    newButton.type = 'button';
    newButton.innerText = 'Close';
    newButton.classList.add('buttunClose')
    newDiv.append(newElement, newButton);
    containers.append(newDiv);
    newButton.onclick = function(){newDiv.remove()};
    setTimeout(function(){newDiv.remove()}, 5000);    
});


