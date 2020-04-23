const enhancer = require('./enhancer.js');
// test away!

const weapon = {
    name: "Sword",
    durability: 70,
    enhancement: 10
}

describe("enhancing wpn", () => {
    describe("fixing wpn", () => {
        it('weapon is at 100%', () => {
            expect(enhancer.repair(weapon)).toEqual({ ...weapon, durability: 100 });
        })
    })

    describe("Successfully enhanced your wpn", () => {
        it("weapon enhanced by 20 pts", () => {
            expect(enhancer.succeed(weapon)).toEqual({ ...weapon, enhancement: weapon.enhancement +1 });
        })
        it('weapon is already enhanced', () => {
            expect(enhancer.succeed({ ...weapon, enhancement: 20 })).toEqual({ ...weapon, enhancement: 20})
        })
    })

    describe('You failed to enhance your wpn', () => {
        it('low enhancer failed', () => {
            expect(enhancer.fail(weapon)).toEqual({ ...weapon, durability: weapon.durability -5 })
        })
        it("mid enhancer failed", () => {
            expect(enhancer.fail({ ...weapon, enhancement: 15 })).toEqual({ ...weapon, enhancement: 15, durability: weapon.durability -10 })
        })
        it('high ehancer failed', () => {
            expect(enhancer.fail({ ...weapon, enhancement: 17 })).toEqual({ ...weapon, enhancement: 16, durability: weapon.durability -10 })
        })
    })
})