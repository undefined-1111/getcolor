// Get pixel color under the mouse.
const robot = require('robotjs');
let colorid = 0
const chalk = require("chalk")

console.log(
    chalk.bold(
        chalk.green(
`
░██████╗░███████╗████████╗    ░█████╗░░█████╗░██╗░░░░░░█████╗░██████╗░
██╔════╝░██╔════╝╚══██╔══╝    ██╔══██╗██╔══██╗██║░░░░░██╔══██╗██╔══██╗
██║░░██╗░█████╗░░░░░██║░░░    ██║░░╚═╝██║░░██║██║░░░░░██║░░██║██████╔╝
██║░░╚██╗██╔══╝░░░░░██║░░░    ██║░░██╗██║░░██║██║░░░░░██║░░██║██╔══██╗
╚██████╔╝███████╗░░░██║░░░    ╚█████╔╝╚█████╔╝███████╗╚█████╔╝██║░░██║
░╚═════╝░╚══════╝░░░╚═╝░░░    ░╚════╝░░╚════╝░╚══════╝░╚════╝░╚═╝░░╚═╝

UTILITY TO GET PIXEL COLOR UNDER THE MOUSE

`
)))

setInterval(function() {
    // Get mouse position.
    var mouse = robot.getMousePos();

    // Get pixel color in hex format.
    var hex = robot.getPixelColor(mouse.x, mouse.y);
    console.log(chalk.green(chalk.bold("#" + hex + "           ID: " + colorid)));
    colorid++
}, 1000)