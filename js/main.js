"use strict";

const output = document.querySelector('.modal__value');
const rangeSLider = document.querySelector('.adjust-bar.adjust-bar_theme_temp');
const arrowLeftDevs = document.querySelector('.devices__paginator .paginator__arrow_left');
const arrowRightDevs = document.querySelector('.devices__paginator .paginator__arrow_right');
const panelCountDevs = document.querySelectorAll('.devices__panel').length;
const devices = document.querySelector('.devices');
const pagiantorDevs = document.querySelector('.devices__paginator');
let currentPageDevs = 1;

$('.card').each(function(e) {
    if ($(this).hasClass('card_size_s')) {
        $(this).css({'border-radius': '22px'})
    } else {
        $(this).css({'border-radius': '54px'})
    }
});

let knobDragged;
let prevAngleRad = null;
let prevRotate = null;


document.querySelectorAll('.modal_close').forEach(b => {
    b.onclick = function() {
        document.querySelectorAll('.modal').forEach(m => {
            m.classList.toggle('modal_open', false);
            document.querySelector('body').style.overflow = 'auto';
        });
    }
});

const TEMPS = {
    'manual': -10,
    'cold': 0,
    'warm': 23,
    'hot': 30
}

document.querySelectorAll('.modal__filter-item_temp').forEach(l => {
    l.onclick = function() {
        document.querySelector('.adjust-bar_theme_temp').value = TEMPS[this.id];
        document.querySelector('.modal_temp .modal__value').innerHTML = TEMPS[this.id] > 0 ? '+' + TEMPS[this.id] : TEMPS[this.id];
    }
});

const showModal = function(selector) {
    document.querySelector(selector).classList.toggle('modal_open', true);
    document.querySelector('body').style.overflow = 'hidden';
}


document.querySelectorAll('.panel_lamp').forEach(p => {
    p.onclick = function() {
        showModal('.modal_light');
    }
});

document.querySelectorAll('.panel_floor').forEach(p => {
    p.onclick = function() {
        showModal('.modal_knob');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    $('.card').each(function(e) {
        if ($(this).hasClass('card_size_s')) {
            $(this).css({'border-radius': '22px'})
        } else {
            $(this).css({'border-radius': '23px'})
        }
    });
    var waterContainer = document.querySelector('.card.card_size_s:last-child');

    waterContainer.innerHTML = 
                '<div class="card-heading">' +
                    '<div class="card-icon-wrap">' +
                        '<img class="card-icon" src="img/kettle.svg">' +
                    '</div>' +
                    '<h3 class="card-title">Вода вскипела</h3>' +
               ' </div>' +
                '<div class="card-specs">' +
                    '<p class="card-source">Чайник</p>' +
                    '<p class="card-time card-time_block">16:20, Сегодня</p>' +
                '</div>'

});


const arrowLeftScens = document.querySelector('.scenarios__paginator .paginator__arrow_left');
const arrowRightScens = document.querySelector('.scenarios__paginator .paginator__arrow_right');
const panelCountScens = document.querySelectorAll('.scenarios__panel').length;
const pageCountScens = document.querySelectorAll('.scenarios__page').length;
const scenarios = document.querySelector('.scenarios');
const pagiantorScens = document.querySelector('.scenarios__paginator');
let currentPage = 1;

const selectButton = document.querySelector('.filter__select-button');
const selectButtonText = document.querySelector('.filter__select-button .button__text');
const selectOptions = document.querySelectorAll('.filter__select-item');
const popup = document.querySelector('.filter__select-popup');

let widths = '';
window.addEventListener('scroll', function() {
    widths += document.querySelectorAll('body')[0].offsetWidth;

});

selectOptions.forEach(o => {
    o.addEventListener('click', function(e) {
        document.querySelector('#' + e.target.dataset.group).checked = true;

        selectOptions.forEach(opt => opt.classList.toggle('filter__select-item_checked', false));
        e.target.classList.toggle('filter__select-item_checked', true);
        popup.classList.toggle('filter__select-popup_open', false);
        selectButtonText.innerText = e.target.innerText;
    })
});


$(document).ready(function(){

    var carousel = $("#carousel");

    carousel.owlCarousel();
});

function status(e) {
    return 200 <= e.status && e.status < 300 ? Promise.resolve(e) : Promise.reject(new Error(e.statusText))
}

function json(e) {
    return e.json()
}

function buildHTML(e) {
    e.events.forEach(function (e) {
        var t, n, o, r, i, c, a, l, s, d, u, m, p, v, h, y, g, f, S, q, x, L, C;
        v = document.querySelector(".content"), n = (t = document.querySelector("template").cloneNode(!0).content).querySelector(".card"), l = t.querySelector(".card-specs"), i = t.querySelector(".card-heading"), o = t.querySelector(".card-title"), r = t.querySelector(".card-icon"), c = t.querySelector(".card-source"), a = t.querySelector(".card-time"), o.textContent = e.title, r.src = "img/" + e.icon + ".svg", c.textContent = e.source, a.textContent = e.time, "s" == e.size && a.classList.add("card-time_block"), e.description && null != e.description && ((d = document.querySelector(".template-description").content.querySelector(".card-description")).textContent = e.description, "l" == e.size && d.classList.add("card-description_big"), "critical" == e.type && (d.classList.add("description_critical"), i.classList.add("heading-critical"), l.classList.add("specs-critical"), e.data && e.data.image && (C = document.querySelector(".template-cam").content, d.appendChild(C))), n.appendChild(d.cloneNode(!0))), e.data && ("graph" == (u = e.data).type && ((p = (m = document.querySelector(".template-graph").content.querySelector(".card-data")).querySelector("img")).srcset = "\n            img/Richdata.png 590w,\n            img/Richdata@2x.png 1180w,\n            img/Richdata@3x.png 1770w", p.sizes = "\n                (max-width: 590px) 590px,\n        (max-width: 1180px) 1180px,\n        1770px\n                ", p.src = "img/Richdata@2x.png", n.appendChild(m.cloneNode(!0))), u.temperature && (g = (y = document.querySelector(".template-climat").content.querySelector(".card-data")).querySelector(".climat-block_data__temp"), f = y.querySelector(".climat-block_data__hum"), g.textContent = u.temperature + " C", f.textContent = u.humidity + "%", n.appendChild(y.cloneNode(!0))), u.volume && (x = (S = document.querySelector(".template-music").content.querySelector(".card-data_music")).querySelector(".cover"), L = S.querySelector(".song-title"), q = S.querySelector(".song-length"), S.querySelector(".song-volume").textContent = u.volume + "%", q.textContent = u.track.length, L.textContent = u.artist + " - " + u.track.name, x.src = u.albumcover, n.appendChild(S.cloneNode(!0))), u.buttons && (s = document.querySelector(".template-buttons").content, n.appendChild(s.cloneNode(!0)))), n.classList.add("card_size_" + e.size), "critical" == e.type && n.classList.add("critical"), h = document.importNode(t, !0), v.appendChild(h)
    })
}

document.addEventListener("DOMContentLoaded", function () {
    const buttonsContainer = document.querySelector(".buttons-wrap");
    const fridgeInfoContainer = document.querySelector(".card_size_m:nth-child(8) .card-description");
    setTimeout(function() {
        const confirmPurchaseButton = document.querySelector(".buttons-wrap .button_yellow");
        const purchaseListContainer = document.createElement('div');
        const purchaseListTitle = document.createElement('p');
        const purchaseList = document.createElement('ol');
        const purchaseListItemOne = document.createElement('li');
        const purchaseListItemTwo = document.createElement('li');

        purchaseListContainer.setAttribute('class', 'purchase-list-wrap');
        purchaseListTitle.setAttribute('class', 'card-description card-description_big description_critical');
        purchaseListTitle.textContent = 'Список покупок:';
        purchaseList.setAttribute('class', 'purchase-list');
        purchaseListItemOne.setAttribute('class', 'purchase-list__item');
        purchaseListItemOne.textContent = 'Хлеб';
        purchaseListItemTwo.setAttribute('class', 'purchase-list__item');
        purchaseListItemTwo.textContent = 'Молоко';

        purchaseListContainer.appendChild(purchaseListTitle);
        purchaseListContainer.appendChild(purchaseList);
        purchaseList.appendChild(purchaseListItemOne);
        purchaseList.appendChild(purchaseListItemTwo);

        confirmPurchaseButton.onclick = () => {
            fridgeInfoContainer.replaceWith(purchaseListContainer)
            buttonsContainer.style.display = "none";
        }
    }, 500)
   

    document.getElementsByClassName("header-menu__switcher")[0].addEventListener("click", function () {
        document.getElementsByClassName("header-menu")[0].classList.toggle("header-menu_active")
    })
}, !1);
