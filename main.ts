basic.forever(function () {
    // Com esses blocos e com o uso dos motores de 3 pinos foi possível fazer 3 dos 4 motores andarem e pararem manualmente.
    if (input.buttonIsPressed(Button.A)) {
        pins.servoWritePin(AnalogPin.P0, 1)
        pins.servoWritePin(AnalogPin.P0, 1)
        pins.servoWritePin(AnalogPin.P0, 1)
        pins.servoWritePin(AnalogPin.P0, 1)
    }
})
