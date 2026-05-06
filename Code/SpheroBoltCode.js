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

}