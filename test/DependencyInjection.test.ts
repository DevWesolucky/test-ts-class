import { AsyncData } from "../src/AsyncData";
import { AsyncService } from "../src/AsyncService";
import { DependencyInjection } from "../src/DependencyInjection";
import { SimpleClass } from "../src/SimpleClass";

jest.mock('../src/SimpleClass', () => {
    return {
        SimpleClass: jest.fn().mockImplementation(() => {
            return {
                getOutput: () => { return "Mock output" },
                increase: (num: number) => { return num * num },
            };
        })
    };
});

jest.mock('../src/AsyncService', () => {
    return {
        AsyncService: jest.fn().mockImplementation(() => {
            return {
                getData: async (id: number) => { 
                    return id === 1 ? Promise.resolve(new AsyncData("Bob")) : Promise.reject("No such id.")
                },
            };
        })
    };
});

describe("DependencyInjection", () => {
    const mockSimpleClass = new SimpleClass();
    const mockAsyncService = new AsyncService();

    it("should return: Mock output from DependencyInjection", () => {
        const instance = new DependencyInjection(mockSimpleClass, mockAsyncService);
        const result = instance.getOutput();
        expect(result).toBe("Mock output from DependencyInjection");
    })

    // test different implementaton in mock definition 
    // Mocked implementation may lead to unexpected restults/bugs? Change in soruce code does not reflected.
    it("should return 9 from mock/different implementation of increase function from SimpleClass", () => {
        const instance = new DependencyInjection(mockSimpleClass, mockAsyncService);
        const result = instance.increase(3);
        expect(result).toBe(9);
    })

    it("should return AsyncResponse with AyncData with name Bob", async () => {
        const instance = new DependencyInjection(mockSimpleClass, mockAsyncService);
        const response = await instance.getAsyncData(1);
        expect(response.data.name).toBe("Bob");
    })

    it("should return AsyncResponse with errorMessage: No such id.", async () => {
        const instance = new DependencyInjection(mockSimpleClass, mockAsyncService);
        const response = await instance.getAsyncData(99);
        expect(response.errorMessage).toBe("No such id.");
    })
    
})