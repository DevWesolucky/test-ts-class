import { AsyncData } from "./AsyncData";

export class AsyncRsponse {
    
    errorMessage: string;
    data: AsyncData;

    constructor(errorMessage: string = "", data?:AsyncData ) {
        this.errorMessage = errorMessage;
        this.data = data;
    }

}