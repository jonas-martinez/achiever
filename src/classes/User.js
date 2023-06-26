import { Data } from "@lenra/app-server";

export class User extends Data {
    /**
     * 
     * @param {string} id 
     * @param {string} steamId 
     */
    constructor(id, steamid) {
        super();
        this.id = id;
        this.steamId = steamid;
    }
}