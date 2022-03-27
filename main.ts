grove_mpr121.init(
)
basic.forever(function () {
    if (grove_mpr121.touchedFeeler() == 0) {
        soundExpression.hello.playUntilDone()
    } else if (grove_mpr121.touchedFeeler() == 1) {
        soundExpression.happy.playUntilDone()
    } else if (grove_mpr121.touchedFeeler() == 2) {
        soundExpression.sad.playUntilDone()
    } else if (grove_mpr121.touchedFeeler() == 3) {
        soundExpression.yawn.playUntilDone()
    }
})
