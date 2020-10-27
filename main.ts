let hint = ""
let answer = ""
let solution = ""
info.setLife(4)
solution = String.fromCharCode(randint(97, 122))
while (info.life() > 0) {
    answer = game.askForString("Estoy pensando en la letra...", 1)
    if (answer == solution) {
        game.splash("¡Ganaste!")
        control.reset()
    } else {
        info.changeLifeBy(-1)
        if (info.life() > 0) {
            hint = "Más arriba"
            if (answer > solution) {
                hint = "Más abajo"
            }
            game.splash("Prueba " + hint)
        } else {
            game.splash("Lo siento, era la letra\"" + solution + "\"")
        }
    }
}
game.over()