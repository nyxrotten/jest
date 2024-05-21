const { updateProduct, getProduct, resetProducts, getProducts, removeProduct, addProduct} = require('./product');

describe("updateProduct", () => {
    it ("should update an existing product", () => {
        expect(() => updateProduct(1, "orange", 3)).not.toThrow()
    });
    it ("shouldn't find product", () => {
        expect(() => updateProduct(3, "orange", 3)).not.toBe(true)
    });
});

describe("getProduct", () => {
    it ("should get product by id", () => {
        expect(() => getProduct(1).not.toThrow())
    });
    it ("shouldn't find product", () => {
        expect(() => getProduct(2).not.toBe(true))
    })
});

describe("resetProducts", () => {
    it ("should erase products and ids", () => {
        expect(() => getProduct(2).toBeUndefined())
    });
});

describe("getProducts", () => {
    it("should return products", () => {
        expect(() => getProducts.not.toThrow())
    })
});

describe("getProducts", () => {
    it("should return products", () => {
        expect(() => getProducts.not.toThrow())
    })
});

describe("addProduct", () => {
    it("should add product", () => {
        expect(() => addProduct("lemon", 2).not.ToThrow())
    });
    it("should throw error if name or price isn't defined", () => {
        expect(() => addProduct("lemon").toThrow())
    })
})