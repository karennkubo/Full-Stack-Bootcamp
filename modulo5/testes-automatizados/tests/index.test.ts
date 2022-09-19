import {connection, purchase, User} from "../src/index";

describe("teste index.ts", ()=>{
    test("testando balance maior que value", () => {
        const user:User = {
            name: "Abelha",
            balance: 2000
        };
        const value:number = 1000;
        const result = purchase(user, value);
        expect(result).toEqual({
            ...user,
            balance: user.balance-value
        })
    });
    test("testando balance igual a value", () => {
        const user:User = {
            name: "Beija-flor",
            balance: 30
        };
        const value:number = 30;
        const result = purchase(user, value);
        expect(result).toEqual({
            ...user,
            balance: user.balance-value
        })
    });
    test("testando balance menor que value", () => {
        const user:User = {
            name: "Cacatua",
            balance: 340
        };
        const value:number = 600;
        const result = purchase(user, value);
        expect(result).not.toBeDefined();
    });
})