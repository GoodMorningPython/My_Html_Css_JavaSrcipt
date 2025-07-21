const car = {
    name: "페라리",
    price: 2000000000,
    color: "빨간색",
    changeName: function(cgName){
        this.name = cgName;
    },
    priceUp: function(cgPrice){
        this.price = this.price + cgPrice;
    },
    changeColor: function(cgColor){
        this.color = cgColor;
    },
}

window.console.log(car)
car.changeColor("검은색")
window.console.log(car)
