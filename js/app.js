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
            const div = document.createElement('div');
            const i = document.createElement('i');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            const a = document.createElement('a');

            div.classList.add('box', 'col-3');
            i.classList.add(box.icon);
            h3.innerHTML = box.title;
            p.innerHTML = box.description;
            a.innerText = box.button.text;
            a.setAttribute('href', box.button.link);

            div.appendChild(i)
            div.appendChild(h3)
            div.appendChild(p)
            div.appendChild(a)

            boxesContainer.appendChild(div)
        })
    })
    .catch(error => {
        console.log(error);
    });
