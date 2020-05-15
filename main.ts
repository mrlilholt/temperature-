let temperature = 0
input.onGesture(Gesture.Shake, function () {
    temperature = input.temperature()
    basic.showNumber(temperature)
})
basic.forever(function () {
	
})
