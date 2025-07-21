const beskinlabins = {
    sales: 0,
    icecreamName: [{ name: "민초", price: 5000 }, { name: "바닐라", price: 6000 }, { name: "초코", price: 7000 }],
    sellIcecream: function (x) {
        this.sales = this.sales + this.icecreamName[x].price
    },
}

beskinlabins.sellIcecream(0);
beskinlabins.sellIcecream(2);
beskinlabins.sellIcecream(1);
beskinlabins.sellIcecream(1);

window.console.log(beskinlabins.sales)