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

    //R => read
    getCategoryById(id) {
        return this.categories.find((category) => category.id == id);
    }

    //U => Update
    updateCategory (id, name) {
        const category = this.getCategoryById(id);
        category.name = name;
    }

    //D => delete
deleteCategory(id) {
    const category = this.getCategoryById(id);
    const index = this.categories.indexOf(category);

    this.categories.splice(index, 1);
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
    const categoryName1 = 'Candies';
    const categoryName2 = 'makes';
    const categoryName3 = 'shoes';


    //Exportando a categoria para o array de categorias
    categoriesList.addCategory(categoryName1);
    categoriesList.addCategory(categoryName2);
    categoriesList.addCategory(categoryName3);


    //Exibindo no console
    console.log(categoriesList.categories);
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

function editCategory(id, name) {
    categoriesList.updateCategory(id, name);

    console.log(categoriesList.categories);
}

function deleteCategory(id) {
    categoriesList.deleteCategory(id);

    console.log(categoriesList.categories);
}
