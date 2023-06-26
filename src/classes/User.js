import { Data } from "@lenra/app-server";

export class User extends Data {
    /**
     * 
     * @param {string} id 
     * @param {string} steamId 
     * @param {string} webhookUuid
     */
    constructor(id, steamid, webhookUuid) {
        super();
        this.id = id;
        this.steamId = steamid;
        this.webhookUuid = webhookUuid;
    }
}