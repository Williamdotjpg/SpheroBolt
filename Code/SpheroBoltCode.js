// Programers: Cyle Krohling & William Holmes
// Sphero Bolt ID:33DF
//Date 5.4.2026
//Program : Maze Comp


registerMatrixAnimation({
    frames: [
        [
            [1, 1, 6, 6, 6, 6, 1, 1],
            [1, 6, 6, 6, 6, 6, 6, 1],
            [6, 6, 1, 6, 6, 1, 6, 6],
            [6, 6, 1, 6, 6, 1, 6, 6],
            [6, 6, 6, 6, 6, 6, 6, 6],
            [6, 1, 6, 6, 6, 6, 1, 6],
            [1, 6, 1, 1, 1, 1, 6, 1],
            [1, 1, 6, 6, 6, 6, 1, 1]
        ],
        [
            [1, 1, 6, 6, 6, 6, 1, 1],
            [1, 6, 6, 6, 6, 6, 6, 1],
            [6, 6, 1, 6, 6, 6, 6, 6],
            [6, 6, 1, 6, 1, 1, 1, 6],
            [6, 6, 6, 6, 6, 6, 6, 6],
            [6, 1, 6, 6, 6, 6, 1, 6],
            [1, 6, 1, 1, 1, 1, 6, 1],
            [1, 1, 6, 6, 6, 6, 1, 1]
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
    fps: 2,
    transition: MatrixAnimationTransition.None
})

async function startProgram() {
    await setMainLed({ r: 255, g: 0, b: 0 });
    await roll(0, 70, 2)
    if (getLocation().x = 70) {
        await setMainLed({ r: 200, g: 0, b: 255 });
        await delay(5)
    }
    await roll(90, 46, 2)
    if (getLocation().x = 70) {
        await setMainLed({ r: 0, g: 255, b: 0 });
        await delay(5)
    }
    await roll(180, 30, 2)
    await roll(210, 28, 2)
    if (getLocation().x = 70) {
        await Sound.Effects.Fireworks.play(false);
        await delay(5)
    }
    await roll(90, 14, 2)
    await roll(45, 28, 2)
    playMatrixAnimation(0, true);
    await delay(5)
    playMatrixAnimation(0, false);
    await roll(120,10,2)
    await roll(190,20,2)
    if (getLocation().y = 20){
        await setMainLed({ r: 0, g: 0, b: 255 });
        await delay(5)
    }
    await roll (105, 20, 2) 
    await setMainLed({ r: 255, g: 92, b: 5 });
}