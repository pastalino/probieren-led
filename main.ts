input.onGesture(Gesture.TiltRight, function () {
    if (x >= -1 && x <= 5) {
        basic.clearScreen()
    }
    x += 1
    if (x >= 0 && x <= 4) {
        led.plot(x, y)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (y >= -1 && y <= 5) {
        basic.clearScreen()
    }
    y += 1
    if (y >= 0 && y <= 4) {
        led.plot(x, y)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (x >= -1 && x <= 5) {
        basic.clearScreen()
    }
    x += -1
    if (x >= 0 && x <= 4) {
        led.plot(x, y)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (y >= -1 && y <= 5) {
        basic.clearScreen()
    }
    y += -1
    if (y >= 0 && y <= 4) {
        led.plot(x, y)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
let y = 0
let x = 0
x = 0
y = 0
led.plot(0, 0)
