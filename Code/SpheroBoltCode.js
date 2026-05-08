// Programers: Cyle Krohling & William Holmes
// Sphero Bolt ID:33DF
//Date 5.4.2026
//Program : Sandbox Training


/*async function startProgram() {
    await speak("goodbye world", true);
    setMainLed({ r: 200, g: 0, b: 255 });
    setSpeed(70);
    await delay(3);
    setSpeed(0);

}
*/
/*
async function startProgram() {

    setMainLed({ r: 0, g: 0, b: 255 });

    await speak("Hello Square", true);

    await delay(1);

    for (var _i1 = 0; _i1 < 4; _i1++) {

        setMainLed(getRandomColor());

        await Sound.Game.Coin.play(true);

        await roll((getHeading() + 90), 60, 2);

        await delay(1);

    }


async function startProgram() {

    await roll(0,50,2)
    if (getLocation().x = 50){
        await roll(0,-50,2)
        await speak("Moooooooo"), true
    
    }
    if (getLocation().x = -50){
        await spin(360, 1);
        await roll(0,100,2)
        await roll(-20,50,2)
    }
    if (getLocation().y = 0){
        await spin(360, 1);
    }
    else {
        for (var _i1 = 0; _i1 < 8; _i1++) {

             await strobe({ r: 255, g: 57, b: 66 }, 1, 5)
             setMainLed({ r: 90, g: 255, b: 90 })
             await speak('Natilie is crazy')

            }

        }
    }


    */

	async function startProgram() {

    playMatrixAnimation(0, true);

}



registerMatrixAnimation({

    frames: [

        [

            [1, 1, 6, 6, 6, 6, 6, 1],

            [1, 6, 6, 6, 6, 6, 1, 1],

            [6, 6, 6, 6, 6, 1, 1, 1],

            [6, 6, 6, 6, 1, 1, 9, 9],

            [6, 6, 6, 6, 1, 1, 9, 9],

            [6, 6, 6, 6, 6, 1, 1, 1],

            [1, 6, 6, 6, 6, 6, 1, 1],

            [1, 1, 6, 6, 6, 6, 6, 1],

        ],

        [

            [1, 1, 6, 6, 6, 6, 1, 1],

            [1, 6, 6, 6, 6, 6, 6, 1],

            [6, 6, 6, 6, 6, 6, 6, 6],

            [6, 6, 6, 6, 6, 6, 6, 6],

            [6, 6, 6, 6, 6, 6, 6, 6],

            [6, 6, 6, 6, 6, 6, 6, 6],

            [1, 6, 6, 6, 6, 6, 6, 1],

            [1, 1, 6, 6, 6, 6, 1, 1],
        ]

    ],

    palette: [

        { r: 255, g: 255, b: 255 },

        { r: 0, g: 0, b: 0 },

        { r: 255, g: 0, b: 0 },

        { r: 255, g: 16, b: 0 },

        { r: 255, g: 128, b: 0 },

        { r: 255, g: 191, b: 0 },

        { r: 255, g: 255, b: 0 },

        { r: 185, g: 246, b: 30 },

        { r: 0, g: 255, b: 0 },

        { r: 185, g: 255, b: 255 },

        { r: 0, g: 255, b: 255 },

        { r: 0, g: 0, b: 255 },

        { r: 145, g: 0, b: 211 },

        { r: 157, g: 48, b: 118 },

        { r: 255, g: 0, b: 255 },

        { r: 204, g: 27, b: 126 }

    ],

    fps: 6,

    transition: MatrixAnimationTransition.None

});