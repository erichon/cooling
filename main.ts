radio.setGroup(1)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
let previous_temp = 0
let desire_temp = 400
basic.forever(function () {
    previous_temp = pins.analogReadPin(AnalogPin.P0)
    if (pins.analogReadPin(AnalogPin.P0) >= desire_temp) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    radio.sendValue("temp", pins.analogReadPin(AnalogPin.P0))
    basic.pause(5000)
    if (previous_temp > pins.analogReadPin(AnalogPin.P0)) {
        if (pins.analogReadPin(AnalogPin.P0) < desire_temp) {
            pins.digitalWritePin(DigitalPin.P2, 1)
        }
    }
})
