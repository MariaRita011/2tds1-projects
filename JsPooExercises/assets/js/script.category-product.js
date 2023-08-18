//Cada categoria possui vários produtos 
//Cada produto é pertencente a uma categoria

class Category {
    constructor(id, name) {
        this.id = id;
        this.nam = name;
        this.products = [];
    }
}

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
