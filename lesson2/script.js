'use strict'

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class="goods-item"><img class="good-img"></img><h3>${this.title}</h3><p>${this.price}</p><button class="good-button">Купить</button></div>`;
    }
}


class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {     // определяем массив
        this.goods = [
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
    }

    render() {
        let listHtml = "";
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        })
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}


// вызываем класс

const list = new GoodsList();
list.fetchGoods();
list.render();