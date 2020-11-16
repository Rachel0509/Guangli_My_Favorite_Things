import { fetchData } from './modules/TheDataMiner.js'

(function () {
    function handleData(data) {
        let myFavorite = document.querySelector('.my-favorite .inner');

        for (let index = 0; index < data.length; index++) {
            myFavorite.innerHTML += `<div class="item" data-color='${data[index].color}'>` +
                `<div class="img"><img src="${data[index].img}" alt=""></div>` +
                `<h2>${data[index].title}</h2>` +
                `<p>${data[index].desc}</p>` +
                `</div>`;

        }
    }

    function handleClick() {
        let items = document.querySelectorAll('.my-favorite .inner .item');
        items.forEach((el, i) => {
            el.addEventListener('click', () => {
                let circles = document.querySelector(`.circles${i + 1}`);
                circles.querySelectorAll('.circle').forEach((el2, i2) => {
                    if (el2.classList.contains('active')) {
                        el2.classList.remove('active');
                    } else {
                        el2.classList.add('active');
                        let color = el.dataset.color;
                        el2.style.backgroundColor = color;
                    }
                });
            });
        });
    }

    fetchData('/includes/index.php').then(r => {
        handleData(r);
        handleClick();
    }).catch((e) => {
        location.href = '../error.html';
    });;

})();