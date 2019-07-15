
window.addEventListener("gamepadconnected", (event) => {
    console.log("A gamepad connected:");
    console.log(event.gamepad);
});

window.addEventListener("gamepaddisconnected", (event) => {
    console.log("A gamepad disconnected:");
    console.log(event.gamepad);
});


export default class Gamepad {

    constructor() {
        var gamepads = navigator.getGamepads()[0];
        this.buttons = [
            gamepads.buttons[0].pressed,
            gamepads.buttons[1].pressed, 
            gamepads.buttons[2].pressed, 
            gamepads.buttons[3].pressed,
            gamepads.buttons[4].pressed,
            gamepads.buttons[5].pressed,
            Math.floor(gamepads.buttons[6].value *10),
            Math.floor(gamepads.buttons[7].value * 10),
            gamepads.buttons[8].pressed,
            gamepads.buttons[9].pressed
        ]

        this.sticks = {
            left: { x: Math.floor(gamepads.axes[0] * 10), y: Math.floor(gamepads.axes[1] * 10) },
            right: { x: Math.floor(gamepads.axes[2] * 10), y: Math.floor(gamepads.axes[3] * 10) }
        }

    }
}