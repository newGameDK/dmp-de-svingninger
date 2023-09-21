let datalogningsStatus = 0
input.onButtonPressed(Button.A, function () {
    datalogningsStatus = 1
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (datalogningsStatus == 1) {
        datalogningsStatus = 0
    }
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
loops.everyInterval(100, function () {
    if (datalogningsStatus == 1) {
        datalogger.log(datalogger.createCV("Acceleration", input.acceleration(Dimension.Strength)))
    }
})
