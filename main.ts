input.onButtonPressed(Button.A, function () {
    isRunning = false
})
let isRunning = false
let counter = 0
isRunning = true
basic.forever(function () {
    if (isRunning == true) {
        counter += 1
        basic.showNumber(counter)
        basic.pause(1000)
    }
})
