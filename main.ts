basic.showIcon(IconNames.Confused)
basic.pause(500)
basic.forever(function () {
    basic.showNumber(pins.digitalReadPin(DigitalPin.P1))
    basic.pause(1000)
    if (pins.digitalReadPin(DigitalPin.P1) < 500) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    } else {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    }
})
