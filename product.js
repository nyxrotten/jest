let products = [];
let id = 0;


const resetProducts = () => {
    id = 0;
    products = [];
};

function addProduct(name, price){
    if (typeof name !== "string") {
        throw new Error ("name is not defined or not string")
    }
    else if (price === undefined) {
        throw new Error ("price is not defined")
    }
    else {
        id = ++id;
        products.push({productId: id, productName: name, productPrice: price});
    }
};


function getProduct(id) {
    const product = products.find((item) => item.productId === id);
    if (product !== undefined) {
        return product
    }
    else {
        throw new Error ("Product doesn't exist");
    }
};



function updateProduct(id, name, price) {
    const ids = [];
    products.forEach((product) => ids.push(product.productId));
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

const getProducts = () => {
    return products
    };

const removeProduct = (id) => {
        let product = products.find((item) => item.productId === id);
        if (product !== undefined) {
            delete product.productId;
            delete product.productName;
            delete product.productPrice;
        }
        else if (id === undefined) {
            return
        }
        else {
            throw new Error ("Product doesn't exist");
        }
    };
    

addProduct("lemon", 2) //añadir primer producto
updateProduct(1, "orange", 3) //editar el producto
getProduct(1) //obtener el producto
getProducts()

//resetProducts()
removeProduct(1)
console.log(products)

module.exports = {
    updateProduct,
    getProduct,
    resetProducts,
    getProducts,
    removeProduct,
    addProduct};