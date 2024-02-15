import { Data } from "@lenra/app";

export class GameAchievement extends Data {
    /**
     * 
     * @param {Number} appid 
     * @param {string} name 
     * @param {string} display_name
     * @param {string} description
     * @param {string} icon
     */
    constructor(appid, name, display_name, description, icon) {
        super();
        this.appid = appid;
        this.name = name;
        this.display_name = display_name;
        this.description = description;
        this.icon = icon;
    }
}