import { Flex, Image, Text, Container, Actionable } from "@lenra/components"


export default async function ([user], props, context) {
    console.log(user);
    console.log(props);

    return Container(
        Flex([
            Flex([
                Container(
                    Image(props.avatarfull).width(100).height(100)
                ).borderRadius(
                    {
                        "topLeft": {
                            "x": 30,
                            "y": 30,
                        },
                        "bottomRight": {
                            "x": 30,
                            "y": 30,
                        },
                    },
                ),
                Text(`Hello ${props.personaname}, is this you ?`).style({ fontSize: 24, fontWeight: 'bold', color: 0xFFaaabad }),
                Flex([
                    Actionable(
                        Container(
                            Text('Yes').style({ fontSize: 24, fontWeight: 'bold', color: 0xFFaaabad })
                        ).border(
                            {
                                "top": { "width": 3, "color": 0xFFaaabad },
                                "left": { "width": 3, "color": 0xFFaaabad },
                                "bottom": { "width": 3, "color": 0xFFaaabad },
                                "right": { "width": 3, "color": 0xFFaaabad },
                            }
                        ).padding({
                            "top": 8,
                            "left": 8,
                            "bottom": 8,
                            "right": 8
                        },).borderRadius({
                            "topRight": {
                                "x": 10,
                                "y": 10,
                            },
                            "bottomLeft": {
                                "x": 10,
                                "y": 10,
                            },
                        })
                    ).onPressed('thisisme', props),
                    Actionable(
                        Container(
                            Text('No').style({ fontSize: 24, fontWeight: 'bold', color: 0xFFaaabad })
                        ).border(
                            {
                                "top": { "width": 3, "color": 0xFFaaabad },
                                "left": { "width": 3, "color": 0xFFaaabad },
                                "bottom": { "width": 3, "color": 0xFFaaabad },
                                "right": { "width": 3, "color": 0xFFaaabad },
                            }
                        ).padding({
                            "top": 8,
                            "left": 8,
                            "bottom": 8,
                            "right": 8
                        },).borderRadius({
                            "topLeft": {
                                "x": 10,
                                "y": 10,
                            },
                            "bottomRight": {
                                "x": 10,
                                "y": 10,
                            },
                        })
                    ).onPressed('@lenra:navTo', { path: '/' }),
                ]).direction('horizontal').spacing(32)
            ]).direction('vertical').fillParent(true).crossAxisAlignment('center').mainAxisAlignment('center').spacing(16)
        ]).fillParent(true).mainAxisAlignment('center').crossAxisAlignment('center')
    ).decoration({ color: 0xFF000000 });
}