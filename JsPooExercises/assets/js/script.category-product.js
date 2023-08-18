//Cada categoria possui vários produtos 
//Cada produto é pertencente a uma categoria

//Classe de armazenamento de dados da categoria
class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

//Classe de armazenamento de dados dos produtos
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

//Classe de armazenamento e criação de novas categorias
class CategoryService {
    constructor() {
        this.categories = [];
        this.nextCategoryId = 1;
    }

    //Metodo de criação de nova categoria e atribuição de id
    addCategory(name) {
        const id = this.nextCategoryId;
        this.nextCategoryId++;

        const category = new Category(id, name);
        this.categories.push(category);
    }

    getCategoryById(id) {
        return this.categories.find((category) => category.id == id);
    }

}

//Classe de armazenamento e criação de novos produtos
class ProductService {
    constructor() {
        this.products = [];
        this.nextProductId = 1;
    }

    //Metodo de criação de novo e atribuição de id
    addProduct(name, price, category) {
        const id = this.nextProductId;
        this.nextProductId++;

        const product = new Product(id, name, price, category);
        this.products.push(product);
        category.products.push(product);
    }
}


//Criando novas instâncias
const categoriesList = new CategoryService();
const productsList = new ProductService();

//Função de criação de categoria
function createCategory() {

    //Atribuindo valores necessários
    const categoryName = "Candies";

    //Exportando a categoria para o array de categorias
    categoriesList.addCategory(categoryName);

    //Exibindo no console
    //console.log(categoriesList.categories);
}

//Função de criação de produto
function createProduct() {

    //Atribuindo valores necessários
    const productName = 'Chocolate';
    const productPrice = 0.50;
    const productCategory = categoriesList.categories[0];

    //Exportando para array de produtos
    productsList.addProduct(productName, productPrice, productCategory);

    //Exibindo no console
   //console.log(productsList.products);
}

function findCategory(id) {
    const category = categoriesList.getCategoryById(id);
    console.log(category.name);
}

