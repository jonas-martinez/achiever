'use strict'

module.exports = async (data, props) => {
    // console.log(props);

    let minutesPlayed = props.playtime_forever % 60;
    let hoursPlayed = Math.floor(props.playtime_forever / 60);

    return {
        type: "container",
        child: {
            type: "flex",
            spacing: 1,
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
                    value: `${hoursPlayed}h ${minutesPlayed}m`
                }
            ]
        }
    }
}

