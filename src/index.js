console.log('%c HI', 'color: firebrick')

const container = document.getElementById('dog-image-container')
const list = document.getElementById('dog-breeds')

document.querySelector('#breed-dropdown').addEventListener('change', (e) => getBreeds(e.target.value))

function getDogs() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderDogs(json))
}

function renderDogs(json) {
    for (const dog of json.message){
        let child = new Image()
        child.src = dog
        container.appendChild(child)
    }
}

function getBreeds(letter){
    const data = fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => {
        
        if(letter){
           const breeds = Object.keys(json.message).filter(breed => breed.startsWith(letter));
           renderBreeds(breeds)
        }
        else {
            const breeds = Object.keys(json.message)
            renderBreeds(breeds)
        }
    })
}

function renderBreeds(breeds) {
    list.innerHTML= " "
    for(const breed of breeds){
        let child = document.createElement('li')
        child.innerHTML = breed
        child.addEventListener('click', (e) => updateColor(e))
        list.appendChild(child)  
    }
}

function updateColor(event) {
    event.target.style.color = 'blue';
}

function selectBreeds(letter) {
    getBreeds(letter)
}


getBreeds() 

//getDogs()