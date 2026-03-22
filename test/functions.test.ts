import {
    isUsernameValid,
    isCommentValid,
    calculateCredit
} from "../src/functions";

describe("Username validation", () => {

    test("username with 3 symbols should be valid", () => {
        expect(isUsernameValid("Tom")).toBeTruthy();
    });

    test("username with 2 symbols should be invalid", () => {
        expect(isUsernameValid("Al")).toBeFalsy();
    });

});

describe("Comment validation", () => {

    test("non empty comment should be valid", () => {
        expect(isCommentValid("Hello")).toBeTruthy();
    });

    test("empty comment should be invalid", () => {
        expect(isCommentValid("")).toBeFalsy();
    });

});

describe("Credit calculation", () => {

    test("client with debt should receive 0 credit", () => {
        expect(calculateCredit(5000, 100)).toBe(0);
    });

    test("client without debt should receive 60% of income", () => {
        expect(calculateCredit(5000, 0)).toBe(3000);
    });

});