let strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
basic.forever(function () {
    strip.show()
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
