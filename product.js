const products = [];
let id = 0;

function resetProducts(){};

function addProduct(name, price){
    if(name === undefined) {
        throw new Error ("name is not defined")
    }
    else if (price === undefined) {
        throw new Error ("price is not defined")
    }
    else if (products.find((product) => product === name)){
        throw new Error ("Product already on the list")
    }
    else {
        id = ++id;
        products.push({productId: id, productName: name, productPrice: price});
    
    }
};

function removeProduct(id){};

function getProducts(){};

function resetProducts(){};

function getProduct(id){};

function updateProduct(id, name, price){};

addProduct("lemon", 20);
addProduct("orange", 20);
console.log(products)