// Programers: Cyle Krohling & William Holmes
// Sphero Bolt ID:33DF
//Date 5.4.2026
//Program : Sandbox Training


async function startProgram() {
    await speak("goodbye world", true);
    setMainLed({ r: 200, g: 0, b: 255 });
    setSpeed(70);
    await delay(3);
    setSpeed(0);

}
