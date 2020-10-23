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
