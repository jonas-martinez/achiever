import { Data } from "@lenra/app-server";

export class Game extends Data {
    /**
     * 
     * @param {user} id 
     * @param {string} steamId 
     */
    constructor(id, steamid) {
        super();
        this.id = id;
        this.steamId = steamId;
    }
}