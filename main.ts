enum RadioMessage {
    message1 = 49434,
    novekszikpont = 60749
}
input.onButtonPressed(Button.A, function () {
    radio.sendValue("ko", 1)
    sendedko = 1
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("ollo", 1)
    sendedollo = 1
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("papir", 1)
    sendedpapir = 1
    basic.pause(1000)
})
radio.onReceivedValue(function (name, value) {
    if (name == "papir") {
        if (value == 1) {
            if (sendedpapir == 1) {
                radio.sendValue("ellenfelpont", pontszamlocal)
                sendedpapir = 0
            }
        }
    }
    if (name == "papir") {
        if (value == 1) {
            if (sendedko == 1) {
                radio.sendMessage(RadioMessage.novekszikpont)
                radio.sendValue("ellenfelpont", pontszamlocal)
                sendedko = 0
            }
        }
    }
    if (name == "papir") {
        if (value == 1) {
            if (sendedollo == 1) {
                pontszamlocal += 1
                radio.sendValue("ellenfelpont", pontszamlocal)
                sendedollo = 0
            }
        }
    }
    if (name == "ko") {
        if (value == 1) {
            if (sendedko == 1) {
                radio.sendValue("ellenfelpont", pontszamlocal)
                ko = 0
            }
        }
    }
    if (name == "ko") {
        if (value == 1) {
            if (sendedollo == 1) {
                radio.sendMessage(RadioMessage.novekszikpont)
                radio.sendValue("ellenfelpont", pontszamlocal)
                sendedollo = 0
            }
        }
    }
    if (name == "ko") {
        if (value == 1) {
            if (sendedpapir == 1) {
                pontszamlocal += 1
                radio.sendValue("ellenfelpont", pontszamlocal)
                sendedpapir = 0
            }
        }
    }
    if (name == "ollo") {
        if (value == 1) {
            if (sendedollo == 1) {
                radio.sendValue("ellenfelpont", pontszamlocal)
                sendedollo = 0
            }
        }
    }
    if (name == "ollo") {
        if (value == 1) {
            if (sendedpapir == 1) {
                radio.sendMessage(RadioMessage.novekszikpont)
                radio.sendValue("ellenfelpont", pontszamlocal)
                sendedpapir = 0
            }
        }
    }
    if (name == "ollo") {
        if (value == 1) {
            if (sendedko == 1) {
                pontszamlocal += 1
                radio.sendValue("ellenfelpont", pontszamlocal)
                sendedko = 0
            }
        }
    }
})
radio.onReceivedMessage(RadioMessage.novekszikpont, function () {
    pontszamlocal += 1
})
function gameover () {
    basic.showString("GAME OVER")
}
let ko = 0
let pontszamlocal = 0
let sendedpapir = 0
let sendedollo = 0
let sendedko = 0
radio.setGroup(183)
basic.forever(function () {
    let ellenfelpont = 0
    if (ellenfelpont == 5) {
        for (let index = 0; index < 1000; index++) {
            gameover()
        }
    }
})
basic.forever(function () {
	
})
