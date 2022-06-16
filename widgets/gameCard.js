'use strict'

module.exports = async (data, props) => {
    // console.log("GAME CARD");
    // console.log(data);
    console.log(props);

    return {
        type: "container",
        child: {
            type: "flex",
            children: [
                {
                    type: "image",
                    src: `http://media.steampowered.com/steamcommunity/public/images/apps/${props.appid}/${props.img_icon_url}.jpg`,
                },
                {
                    type: "text",
                    value: props.name
                },
                {
                    type: "text",
                    value: `${props.playtime_forever} minutes played`
                }
            ]
        }
    }
}

