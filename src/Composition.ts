import { SimpleClass } from "./SimpleClass";

export class Composition {

    simpleClass: SimpleClass;

    constructor() {
        this.simpleClass = new SimpleClass();
    }

    getOutput(): string {
        return this.simpleClass.getOutput() + " from Compositon";
    }

    increase(num: number): number {
        const res = this.simpleClass.increase(num) + 1;
        return res;
    }

}