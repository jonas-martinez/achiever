import { Data } from "@lenra/app-server";

export class Game extends Data {
    /**
     * 
     * @param {Number} appid 
     * @param {JSON} achievements 
     * @param {string} img_icon_url 
     * @param {string} name 
     */
    constructor(appid, achievements, img_icon_url, name) {
        super();
        this.appid = appid;
        this.achievements = achievements;
        this.img_icon_url = img_icon_url;
        this.name = name;
    }
}