const assert = require("../src/core/assert/assert");
const sqr = require("../src/core/sqr/sqr");
const sum = require("../src/core/sum/sum");

// Bateria de testes
describe("Testing of Assert", () => {
    it("Testing assert sum", () => {
        expect(assert(sum(1, 2) === 3)).toEqual(true);
    });
    it("Testing assert string", () => {
        expect(assert("Pessoa" === "Pessoa")).toEqual(true);
    });
    it("Testing assert sqr", () => {
        expect(assert(sqr(3) === 9)).toEqual(true);
    });
    it("Testing assert false", () => {
        expect(assert(false)).toEqual(false);
    });
});
