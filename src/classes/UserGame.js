import { Data } from "@lenra/app";

export class UserGame extends Data {
    /**
     * 
     * @param {Number} appid 
     * @param {string[]} achieved 
     * @param {user} user 
     * @param {Number} playtimeForever 
     */
    constructor(appid, achieved, user, playtimeForever) {
        super();
        this.appid = appid;
        this.achieved = achieved;
        this.user = user;
        this.playtimeForever = playtimeForever;
    }
}
