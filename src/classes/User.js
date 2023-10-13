import { Data } from "@lenra/app";

export class User extends Data {
    /**
     * 
     * @param {string} id 
     * @param {string} steamId 
     * @param {string} webhookUuid
     * @param {string} avatar
     * @param {string} personaname
     */
    constructor(id, steamid, webhookUuid, avatar, personaname) {
        super();
        this.id = id;
        this.steamId = steamid;
        this.webhookUuid = webhookUuid;
        this.avatar = avatar;
        this.personaname = personaname;
    }
}