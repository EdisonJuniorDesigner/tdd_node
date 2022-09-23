const { it, describe } = require("mocha");
const assert = require("assert");
var User = require("../src/core/user/user");

var admin = new User("admin", "123456");

describe("Testing of authentication", () => {
    it("Testing invalid user name", () => {
        assert(!admin.auth("admi", "123456"));
    });
    it("Testing invalid user password", () => {
        assert(!admin.auth("admin", "1234567"));
    });

    it("Testing valid credentials", () => {
        assert(admin.auth("admin", "123456"));
    });
});
