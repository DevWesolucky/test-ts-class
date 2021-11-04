import { AsyncData } from "./AsyncData";

export class AsyncService {

    async getData(id: number): Promise<AsyncData> {
        return new Promise((resolve, reject) => {
            setTimeout(() => { 
                id === 1 ? resolve(new AsyncData("Bob")) : reject("No such id.");
            }, 200);
        })
    }

}