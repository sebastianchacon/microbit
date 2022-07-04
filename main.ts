let nivel_mitad = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(1000)
basic.clearScreen()
let nivel = 0
basic.forever(function () {
    nivel = pins.analogReadPin(AnalogPin.P0)
    nivel_mitad = pins.analogReadPin(AnalogPin.P1)
    if (nivel > 950 && nivel_mitad > 950) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.pause(2000)
    } else {
        if (nivel > 950 && nivel_mitad < 400) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
            basic.pause(2000)
        } else {
            if (nivel < 400 && nivel_mitad < 400) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(2000)
            }
        }
    }
})
