import { SimpleClass } from "../src/SimpleClass";

describe("SimpleClass", () => {
    
    it("should return SimmpleClass output", () => {
        const simpleClass = new SimpleClass();
        const result = simpleClass.getOutput();
        expect(result).toBe("Simple output");
    })

    it("should return 3", () => {
        const simpleClass = new SimpleClass();
        const result = simpleClass.increase(2);
        expect(result).toBe(3);
    })

})