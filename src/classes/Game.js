import { Data } from "@lenra/app";

export class Game extends Data {
    /**
     * 
     * @param {Number} appid 
     * @param {string} img_icon_url 
     * @param {string} name 
     */
    constructor(appid, img_icon_url, name) {
        super();
        this.appid = appid;
        this.img_icon_url = img_icon_url;
        this.name = name;
    }
}