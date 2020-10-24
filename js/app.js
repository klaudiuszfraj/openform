// header
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click',e => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
})
// header end

// boxes
const API = "http://localhost:3000";
const boxesContainer = document.querySelector('.boxes__container');

fetch(`${API}/boxes`)
    .then(response => response.json())
    .then(boxes => {
        boxes.map(box=> {
            const card = document.createElement('div');
            const div = document.createElement('div');
            const i = document.createElement('i');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            const a = document.createElement('a');

            card.classList.add('card', 'col-3');
            div.classList.add('box');
            i.classList.add('far' ,box.icon);
            h3.innerHTML = box.title;
            p.innerHTML = box.description;
            a.innerText = box.button.text;
            a.setAttribute('href', box.button.link);

            div.appendChild(i)
            div.appendChild(h3)
            div.appendChild(p)
            div.appendChild(a)

            card.appendChild(div)
            boxesContainer.appendChild(card)
        })
    })
    .catch(error => {
        console.log(error);
    });
//boxes end

//form

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const nameIsCorrect = validateText(name.value);
    const emailIsCorrect = validateEmail(email.value);
    const phoneIsCorrect = validateMobileUS(phone.value);
    const messageIsCorrect = validateText(message.value);

    setInputState(nameIsCorrect,name)
    setInputState(emailIsCorrect,email)
    setInputState(phoneIsCorrect,phone)
    setInputState(messageIsCorrect,message)

    if (nameIsCorrect && emailIsCorrect && phoneIsCorrect && messageIsCorrect){
        form.reset();
        setInputState('reset', name);
        setInputState('reset', email);
        setInputState('reset', phone);
        setInputState('reset', message);
        // send form
        window.alert('formularz wysłany');
    }

})

function validateText(text){
    if (text === ''){
        return false
    }
    const re = /^[A-Za-z]*$/;
    return re.test(String(text))
}
function validateEmail(email) {
    if (email === ''){
        return false
    }
    const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
function validateMobileUS(number) {
    if (number === '') {
        return false
    }
    const re = /^[0-9]{9}$/;
    return re.test(String(number))
}
function setInputState(isCorrect, input){
    const parentDiv = input.parentElement.parentElement;
    if (isCorrect === 'reset'){
        parentDiv.classList.remove('correct');
    } else if (isCorrect){
        parentDiv.classList.remove('incorrect');
        parentDiv.classList.add('correct');
    } else{
        parentDiv.classList.remove('correct');
        parentDiv.classList.add('incorrect');
    }
}
//form end