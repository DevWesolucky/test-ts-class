import { AsyncRsponse } from "./AsyncRsponse";
import { AsyncService } from "./AsyncService";
import { SimpleClass } from "./SimpleClass";

export class DependencyInjection {

    simpleClass: SimpleClass;
    asyncService: AsyncService;

    constructor(simpleClass: SimpleClass, asyncService: AsyncService) {
        this.simpleClass = simpleClass;
        this.asyncService = asyncService;
    }

    getOutput(): string {
        return this.simpleClass.getOutput() + " from DependencyInjection";
    }

    increase(num: number): number {
        return this.simpleClass.increase(num);
    }

    async getAsyncData(id: number): Promise<AsyncRsponse> {
        const response = new AsyncRsponse();
        try {
            response.data = await this.asyncService.getData(id);
        } catch (errorMessage) {
            response.errorMessage = errorMessage;
        }
        return response;
    }

}