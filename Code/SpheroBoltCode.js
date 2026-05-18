// Programers: Cyle Krohling & William Holmes
// Sphero Bolt ID:33DF
//Date 5.4.2026
//Program : Maze Comp

async function startProgram() {
    await setMainLed({ r: 255, g: 0, b: 0});
    await roll(0, 75, 2)
    if (getLocation().x = 75) {
        await setMainLed({ r: 200, g: 0, b: 255 });
        await delay(5)
    }
    await roll(90,53,2)
    if (getLocation().x = 75){
        await setMainLed({ r: 0, g: 255, b: 0 });
        await delay(5)
    }
}