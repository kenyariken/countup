input.onButtonPressed(Button.A, function () {
    // Aボタンでカウントアップを停止
    isRunning = false
})
input.onButtonPressed(Button.B, function () {
    // Bボタンでカウンタを0に戻して表示（動作状態は変更しない）
    counter = 0
    basic.showNumber(counter)
})
input.onButtonPressed(Button.AB, function () {
    // A+B同時押しでカウンタを0に戻して再び��ウントを開始
    counter = 0
    isRunning = true
    basic.showNumber(counter)
})
let isRunning = true
let counter = 0
counter = 0
isRunning = true
basic.forever(function () {
    if (isRunning) {
        counter += 1
        basic.showNumber(counter)
        basic.pause(1000)
    }
})
