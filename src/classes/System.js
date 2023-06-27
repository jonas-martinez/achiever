import { Data } from "@lenra/app-server";

export class System extends Data {
    /**
     * 
     * @param {Number} appId 
     */
    constructor(appId) {
        super();
        this.appId = appId;
    }
}