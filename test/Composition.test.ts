import { Composition } from "../src/Composition";

describe("Composition", () => {

    it("should return output from Composition", () => {
        const instance = new Composition();
        const result = instance.getOutput();
        expect(result).toBe("Simple output from Compositon");
    })

    it("should return 4", () => {
        const instance = new Composition();
        const result = instance.increase(2);
        expect(result).toBe(4);
    })
    
})