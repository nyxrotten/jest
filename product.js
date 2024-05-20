const products = [];
let id = 0;


function resetProducts(){};

function addProduct(name, price){
    if (typeof name !== "string") {
        throw new Error ("name is not defined or not string")
    }
    else if (price === undefined) {
        throw new Error ("price is not defined")
    }
    // else if (name === products.forEach((item) => Object.values(item))) {
    //     console.log(error)
    // }
    else {
        id = ++id;
        products.push({productId: id, productName: name, productPrice: price});
    }
};

function removeProduct(id){};

function getProducts(id) {
    let ids = [];
    products.forEach((item) => ids.push(item.id));
    let find = ids.find((element) => element === id);
    
    if (id === find) {
        return products[`${--find}`]
    }
    else {
        throw new Error ("Product not found")
    }
};


function resetProducts(){};



function updateProduct(id, name, price) {
    const ids = [];
    products.forEach((product) => ids.push(product.productId));
    console.log(ids)
    foundId = ids.find((element) => element === id);
    
    if (!foundId) {
        return "Item doesn't exist"
    }
    else { 
        const index = ids.indexOf(id);
        products[`${index}`].productName = name;
        products[`${index}`].productPrice = price;
    }
}



addProduct("lemon", 2)


console.log(products)