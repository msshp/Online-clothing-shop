'use strict'

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Shoes', price: 250 },
    { title: 'Shoes', price: 250 },
    { title: 'Shoes', price: 250 },
    { title: 'Shoes', price: 250 },
    { title: 'Shoes', price: 250 },
    { title: 'Shoes', price: 250 },
    { title: 'Shoes', price: 250 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title = 'Товар', price = 0) => { // в скобках параметры по умолчанию
    return `<div class="goods-item"><img class="good-img"></img><h3>${title}</h3><p>${price}</p><button class="good-button">Купить</button></div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
};

renderGoodsList(goods);