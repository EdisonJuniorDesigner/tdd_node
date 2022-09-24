const assert = require("../src/core/assert/assert.js");
var Product = require("../src/core/product/product.js");

var prod = new Product(1234, "RTX 3090", 7999.99);

describe("Testing of product", () => {
    it("Testing toJson", () => {
        let mock = { code: 1234, name: "RTX 3090", price: 7999.99 };
        expect(prod.toJson()).toStrictEqual(mock);
    });

    it("Testing toJson is not equal", () => {
        let mock = { code: 12345, name: "RTX 3090", price: 7999.99 };
        expect(!assert(prod.toJson() === mock));
    });

    it("Testing getCode", () => {
        expect(prod.getCode()).toEqual(1234);
    });
    it("Testing getName", () => {
        expect(prod.getName()).toEqual("RTX 3090");
    });
    it("Testing getPrice", () => {
        expect(prod.getPrice()).toEqual(7999.99);
    });

    it("Testing setCode", () => {
        expect(prod.setCode(12)).toEqual(12);
    });
    it("Testing setName", () => {
        expect(prod.setName("RTX 3080")).toEqual("RTX 3080");
    });
    it("Testing setPrice", () => {
        expect(prod.setPrice(6999.99)).toEqual(6999.99);
    });
});
