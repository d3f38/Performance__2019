document.addEventListener("DOMContentLoaded", function () {
    const buttonsContainer = document.querySelector('.buttons-wrap');

    buttonsContainer.innerHTML = '<button class="button button_yellow" type="button">Да</button>' +
        '<button class="button">Нет</button>';

    [].slice.call(document.querySelectorAll('.card')).forEach(item => {
        if (item.classList.contains('card_size_s')) {
            item.style.borderRadius = '22px';
        } else {
            item.style.borderRadius = '23px';
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

document.addEventListener("DOMContentLoaded", function () {

    const buttonsContainer = document.querySelector(".buttons-wrap");
    const fridgeInfoContainer = document.querySelector(".card_size_m:nth-child(8) .card-description");

        const confirmPurchaseButton = document.querySelector(".buttons-wrap .button_yellow");
        // const purchaseListContainer = document.createElement('div');
        // const purchaseListTitle = document.createElement('p');
        // const purchaseList = document.createElement('ol');
        // const purchaseListItemOne = document.createElement('li');
        // const purchaseListItemTwo = document.createElement('li');


        const purchaseList = `<div class="purchase-list-wrap">
            <p class="card-description card-description_big description_critical">
                Список покупок:
            </p>
            <ol class="purchase-list">
                <li class="purchase-list__item">Хлеб</li>
                <li class="purchase-list__item">Молоко</li>
            </ol>
        </div>`;

        // purchaseListContainer.setAttribute('class', 'purchase-list-wrap');
        // purchaseListTitle.setAttribute('class', 'card-description card-description_big description_critical');
        // purchaseListTitle.textContent = 'Список покупок:';
        // purchaseList.setAttribute('class', 'purchase-list');
        // purchaseListItemOne.setAttribute('class', 'purchase-list__item');
        // purchaseListItemOne.textContent = 'Хлеб';
        // purchaseListItemTwo.setAttribute('class', 'purchase-list__item');
        // purchaseListItemTwo.textContent = 'Молоко';

        // purchaseListContainer.appendChild(purchaseListTitle);
        // purchaseListContainer.appendChild(purchaseList);
        // purchaseList.appendChild(purchaseListItemOne);
        // purchaseList.appendChild(purchaseListItemTwo);

        confirmPurchaseButton.onclick = () => {
            // fridgeInfoContainer.replaceWith(purchaseListContainer);

            fridgeInfoContainer.outerHTML = purchaseList;
            buttonsContainer.style.display = "none";
        }


    document.getElementsByClassName("header-menu__switcher")[0].addEventListener("click", function () {
        document.getElementsByClassName("header-menu")[0].classList.toggle("header-menu_active")
    })
}, !1);
