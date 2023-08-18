/* //Testando forEach names
const names = ["Lívia", "Felipe", "Thiago", "Maria"];

names.forEach((name) => {
    console.log(`Hi ${name}`);
});

//Testando forEach numbers com index
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((number, index) => {
    if (number % 2 == 0) {
        console.log(`O número ${number} está na posição ${index}.`);
    }
}) */

//Testando forEach com objetos
/* const cars = [
    {
        marca : "ford",
        modelo : "focus",
    },
    {
        marca : "BMW",
        modelo : "BMW Z4",
    },
    {
        marca : "Fiat",
        modelo : "Palio",
    },
    {
        marca : "Audi",
        modelo : "A3",
    },
];

cars.forEach((car) => {
    console.log(`Marca: ${car.marca} no modelo: ${car.modelo}`);
}) */

/* class Car {
    constructor(brandCar, modelCar) {
        this.brandCar = brandCar;
        this.modelCar = modelCar;

    }
}

class ListCar {
    constructor() {
        this.cars = [];
    }

    listAdd(param) {
        this.cars.push(param);
    }
}

const list = new ListCar();

function add() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;

    const list2 = new Car(brand, model);

    list.listAdd(list2);

    document.getElementById('brand').value = '';

    document.getElementById('model').value = '';

    console.log(list);
} */
 